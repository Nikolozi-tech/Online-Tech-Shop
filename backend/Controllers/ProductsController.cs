using Microsoft.AspNetCore.Mvc;
using OnlineTechShop.Api.Models;

namespace OnlineTechShop.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")] 
    public class ProductsController : ControllerBase
    {
        private static readonly List<Product> Products = new List<Product>
        {
            new Product
            {
                Id = 1,
                ProductName = "Macbook M3",
                Description = "Powerful Apple laptop with M3 chip",
                Price = 2200m,
                Category = "Laptops",
                Stock = 100,
                IsInStock = true
            },
            new Product
            {
                Id = 2,
                ProductName = "Hyperx Keyboard",
                Description = "Mechanical gaming keyboard with RGB lighting",
                Price = 150m,
                Category = "Accessories",
                Stock = 200,
                IsInStock = true
            },
            new Product
            {
                Id = 3,
                ProductName = "Hyperx Headset",
                Description = "High-quality gaming headset with surround sound",
                Price = 100m,
                Category = "Accessories",
                Stock = 150,
                IsInStock = true
            },
        };

        [HttpGet]
        public ActionResult<List<Product>> GetAllProduct()
        {
            return Ok(Products);
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProductById(int id)
        {
            Product? product = Products.FirstOrDefault(p => p.Id == id);

            if(product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}
