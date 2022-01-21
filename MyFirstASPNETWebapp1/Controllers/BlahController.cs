using Microsoft.AspNetCore.Mvc;
using MyFirstASPNETWebapp1.Models;
// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MyFirstASPNETWebapp1.Controllers
{
    public class BlahController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Calculator(GradeCalc model)
        {
            return View();
        }
    }
}
