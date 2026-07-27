using Microsoft.AspNetCore.Mvc;
using OnlineTechShop.Api.Models;

namespace OnlineTechShop.Api.Services
{
    public class ProductsService
    {
        private readonly List<Product> _products = new ()
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

        public List<Product> GetAll()
        {
            return _products;
        }

        public Product? GetProductById(int id)
        {
            return _products.FirstOrDefault(p => p.Id == id);
        }

        public List<Product> Search(string search)
        {
            return _products
                .Where(product =>
            product.ProductName.Contains(search, StringComparison.OrdinalIgnoreCase))
                .ToList();
        }
    }
}
