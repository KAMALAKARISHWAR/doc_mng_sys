using Microsoft.AspNetCore.Mvc;

namespace RealEstateDMS.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        // Temporary in-memory user list (Replace with DB in production)
        private static readonly List<User> Users = new List<User>
        {
            new User { Email = "admin@avsinsotech.com", Password = "admin123" },
            new User { Email = "user@avsinsotech.com", Password = "user123" }
        };

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var user = Users.Find(u => u.Email == request.Email && u.Password == request.Password);
            if (user != null)
            {
                // In real apps, generate JWT token here.
                return Ok(new { message = "Login successful", user = user.Email });
            }

            return Unauthorized(new { message = "Invalid credentials" });
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class User
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
