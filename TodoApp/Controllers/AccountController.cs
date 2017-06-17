using System;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TodoApp.Data.Entities;
using TodoApp.DataContracts.Requests;
using TodoApp.DataContracts.Responses;

namespace TodoApp.Controllers
{
    [Route("api/account")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _signInManager.PasswordSignInAsync(request.UserName, request.Password, request.RememberMe, false);

            if (!result.Succeeded)
            {
                return StatusCode((int) HttpStatusCode.Conflict, new ErrorResponse
                {
                    ErrorMessage = "Invalid User Name or Password."
                });
            }

            return NoContent();
        }

        [Authorize]
        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();

            return NoContent();
        }

        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetCurrentUserInfo()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            var result = new UserInfoResponse
            {
                UserName = user.UserName,
                Email = user.Email
            };

            return Ok(result);
        }
    }
}