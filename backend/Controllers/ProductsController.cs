using Microsoft.AspNetCore.Mvc;
using OnlineTechShop.Api.Models;
using OnlineTechShop.Api.Services;

namespace OnlineTechShop.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")] 
    public class ProductsController : ControllerBase
    {

        private readonly ProductsService _productsService;

        public ProductsController(ProductsService productsService)
        {
            _productsService = productsService;
        }

        [HttpGet]
        public ActionResult<List<Product>> GetAllProducts()
        {
            return Ok(_productsService.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<Product> GetProductById(int id)
        {
            Product? product = _productsService.GetProductById(id);

            if(product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpGet("search")]
        public ActionResult<List<Product>> SearchProducts([FromQuery] string search)
        {
            List<Product> products = _productsService.Search(search);
            if(products.Count == 0)
            {
                return NotFound();
            }
            return Ok(products);
        }
    }
}
