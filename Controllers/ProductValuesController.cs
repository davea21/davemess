using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SportsStore.Models;
using System.Collections.Generic;
using SportsStore.Models.BindingTargets;
namespace SportsStore.Controllers
{
    [Route("api/products")]
    public class ProductValuesController : Controller 
    {
        private DataContext _context;
        public ProductValuesController(DataContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public Product GetProduct(long id)
        {
            //System.Threading.Thread.Sleep(5000);
         Product product= _context.Products
                .Include(p => p.Supplier).ThenInclude(s=>s.Products)
                .Include(p => p.Ratings)
                .FirstOrDefault(p => p.ProductId == id);
            if (product != null)
            {
                if (product.Supplier != null)
                {
                    product.Supplier.Products = product.Supplier.Products.Select(p => new Product
                    {
                        ProductId = p.ProductId,
                        Name = p.Name,
                        Category = p.Category,
                        Description = p.Description,
                        Price = p.Price
                    });
                }
                if (product.Ratings != null)
                {
                    foreach (Rating r in product.Ratings)
                    {
                        r.Product = null;
                    }
                }
            }
            return product;
        }
        [HttpGet]
        public IEnumerable<Product> GetProducts(string category, string search ,bool related = false)
        {
            IQueryable<Product> q = _context.Products;
            if (!string.IsNullOrWhiteSpace(category))
            {
                string catLower = category.ToLower();
                q = q.Where(a => a.Category.ToLower().Contains( catLower));
            }
            if (!string.IsNullOrWhiteSpace(search))
            {
                string searchLower =search.ToLower();
                q = q.Where(a => a.Name.ToLower().Contains(searchLower) ||a.Description.ToLower().Contains(searchLower));
            }
            if (related) {
                q = q.Include(p => p.Supplier)
                .Include(p => p.Ratings);
                List<Product> data = q.ToList();
                data.ForEach(p =>
                {
                    if (p.Supplier != null)
                    {
                        p.Supplier.Products = null;
                    }
                    if (p.Ratings != null)
                    {
                        p.Ratings.ForEach(r=>r.Product = null);
                    }
                });
                return data;
            }
            else {
                return q;
            }
        }
        [HttpPost]
        public IActionResult CreateProduct([FromBody] ProductData pData)
        {
            if (ModelState.IsValid)
            {
                Product p = pData.Product;
                if (p.Supplier != null && p.Supplier.SupplierId != 0)
                {
                    _context.Attach(p.Supplier);

                }
                _context.Add(p);
                _context.SaveChanges();
                return Ok(p.ProductId);
            }
            else {
                return BadRequest(ModelState);
            }
        }
    }
}
