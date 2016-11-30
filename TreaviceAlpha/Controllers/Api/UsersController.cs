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
using TreaviceAlpha.dtos;
using System.Data.Entity.Migrations;

namespace TreaviceAlpha.Controllers.Api
{
    [RoutePrefix("api/user")]
    public class UsersController : ApiController
    {
        //
        // POST /api/user/register
        [Route("register")]
        [HttpPost]
        [AntiForgeryValidate]
        public async Task<IHttpActionResult> CreateUser(User user)
        {
            Profile profile = new Profile();

            if (ModelState.IsValid)
            {
                user.Password = HashService.HashPass(user.Password);
                using (var context = new ProfileDbContext())
                {
                    using (var dbContextTransaction = context.Database.BeginTransaction())
                    {
                        try
                        {
                            context.Users.Add(user);
                            await context.SaveChangesAsync();
                            profile.UserId = user.Id;
                            context.Profiles.Add(profile);
                            await context.SaveChangesAsync();
                            dbContextTransaction.Commit();

                            return Ok();
                            
                        }catch (Exception)
                        {
                            dbContextTransaction.Rollback();
                            var responseMessage = new HttpResponseMessage(HttpStatusCode.Conflict);
                            throw new HttpResponseException(responseMessage);
                        }
                    }
                }
                //    _context.Users.Add(user);
                //try
                //{
                //    await _context.SaveChangesAsync();
                //}
                //catch (Exception)
                //{
                //    var responseMessage = new HttpResponseMessage(HttpStatusCode.Conflict);
                //    throw new HttpResponseException(responseMessage);
                //}

                //return Ok();
            }

            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }

        //
        // POST /api/user/register
        [Route("login")]
        [HttpPost]
        [AntiForgeryValidate]
        public IHttpActionResult Login(User user)
        {
            if (ModelState.IsValid)
            {
                if (IsValid(user.Email, user.Password))
                {
                    var ident = new ClaimsIdentity(
                        new[] {
                            new Claim(ClaimTypes.NameIdentifier, user.Email),
                            new Claim("http://schemas.microsoft.com/accesscontrolservice/2010/07/claims/identityprovider", user.Email),
                            new Claim(ClaimTypes.Name, user.Email) },
                        DefaultAuthenticationTypes.ApplicationCookie
                    );
                    HttpContext.Current.GetOwinContext().Authentication.SignIn(
                        new AuthenticationProperties { IsPersistent = false },
                        ident
                    );
                    
                    return Content(HttpStatusCode.OK, new ProfileDto() { Email = user.Email});
                }
            }
            return BadRequest();
        }

        [Route("profile-data")]
        [HttpPost]
        public IEnumerable<Profile> getUserProfileData(ProfileDto user)
        {
            using (var _context = new ProfileDbContext())
            {
                var userQuery = from u in _context.Users
                                where u.Email == user.Email
                                select u;

                var result = from p in _context.Profiles
                                   join u in userQuery
                                   on p.UserId equals u.Id
                                   select new Profile();
                return result;
            }
        }

        [Route("logout")]
        [HttpGet]
        public void Logout()
        {
            HttpContext.Current.GetOwinContext().Authentication.SignOut(DefaultAuthenticationTypes.ApplicationCookie,
                                                                    DefaultAuthenticationTypes.ExternalCookie);
        }

        [Route("isLoggedIn")]
        [HttpGet]
        public bool IsLoggedIn()
        {
            return HttpContext.Current.Request.IsAuthenticated;
        }

        private bool IsValid(string email, string password)
        {
            using (var _context = new ProfileDbContext())
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
