using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SportsStore.Models;
using System.Collections.Generic;
using SportsStore.Models.BindingTargets;
using Microsoft.AspNetCore.JsonPatch;

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
        public IEnumerable<Product> GetProducts(string category, string search,
                bool related = false)
        {
            IQueryable<Product> query = _context.Products;

            if (!string.IsNullOrWhiteSpace(category))
            {
                string catLower = category.ToLower();
                query = query.Where(p => p.Category.ToLower().Contains(catLower));
            }
            if (!string.IsNullOrWhiteSpace(search))
            {
                string searchLower = search.ToLower();
                query = query.Where(p => p.Name.ToLower().Contains(searchLower)
                    || p.Description.ToLower().Contains(searchLower));
            }

            if (related)
            {
                query = query.Include(p => p.Supplier).Include(p => p.Ratings);
                List<Product> data = query.ToList();
                data.ForEach(p => {
                    if (p.Supplier != null)
                    {
                        p.Supplier.Products = null;
                    }
                    if (p.Ratings != null)
                    {
                        p.Ratings.ForEach(r => r.Product = null);
                    }
                });
                return data;
            }
            else
            {
                return query;
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
        [HttpPut("{id}")]
        public IActionResult ReplaceProduct(long id, [FromBody] ProductData pData)
        {
            if (ModelState.IsValid)
            {
                Product p = pData.Product;
                p.ProductId = id;
                if (p.Supplier != null && p.Supplier.SupplierId != 0)
                {
                    _context.Attach(p.Supplier);
                  
                }
                _context.Update(p);
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
            }
        [HttpPatch("{id}")]
        public IActionResult UpdateProduct(long id,
                [FromBody]JsonPatchDocument<ProductData> patch)
        {

            Product product = _context.Products
                                .Include(p => p.Supplier)
                                .First(p => p.ProductId == id);
            ProductData pdata = new ProductData { Product = product };
            patch.ApplyTo(pdata, ModelState);

            if (ModelState.IsValid && TryValidateModel(pdata))
            {

                if (product.Supplier != null && product.Supplier.SupplierId != 0)
                {
                    _context.Attach(product.Supplier);
                }
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public void DeleteProduct(long id)
        {
            _context.Products.Remove(new Product { ProductId = id });
            _context.SaveChanges();
        }
    }
}
