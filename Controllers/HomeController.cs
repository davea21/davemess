using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsStore.Models;

namespace SportsStore.Controllers
{
    public class HomeController : Controller
    {
        private DataContext _Context;
        public HomeController(DataContext context)
        {
            _Context = context;
        }
        public IActionResult Index()
        {
            return View(_Context.Products.First());
        }

        
    }
}
