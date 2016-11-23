using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using TreaviceAlpha.Models;
using System.Threading.Tasks;
using System.Web.Http;
using TreaviceAlpha.Services;
using System.Security.Claims;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using System.Web;
namespace TreaviceAlpha.Controllers.Api
{
    public class UsersController : ApiController
    {
        private UserDbContext _context;

        public UsersController()
        {
            _context = new UserDbContext();
        }

        //
        // POST /api/users
        [ActionName("users")]
        [HttpPost]
        [AntiForgeryValidate]
        public async Task<HttpResponseMessage> CreateUser(User user)
        {
            if (ModelState.IsValid)
            {
                user.Password = HashService.HashPass(user.Password);

                _context.Users.Add(user);
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (Exception)
                {
                    var responseMessage = new HttpResponseMessage(HttpStatusCode.Conflict);
                    throw new HttpResponseException(responseMessage);
                }

                return new HttpResponseMessage(HttpStatusCode.OK);
            }

            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }

        //
        // POST /api/login
        [ActionName("login")]
        [HttpPost]
        [AntiForgeryValidate]
        public HttpResponseMessage Login(string email, string password)
        {
            if(IsValid(email, password))
            {
                var ident = new ClaimsIdentity(
                    new[] { new Claim(ClaimTypes.Name, email) },
                    DefaultAuthenticationTypes.ApplicationCookie
                );
                HttpContext.Current.GetOwinContext().Authentication.SignIn(
                    new AuthenticationProperties { IsPersistent = false }, 
                    ident 
                );
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }

        public bool IsValid(string email, string password)
        {
            using(_context)
            {
                IEnumerable<User> userInfo = _context.Users.Where(c => c.Email == email);
                
                foreach(var user in userInfo)
                {
                    if(HashService.UnhashPass(user.Password, password))
                    {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
