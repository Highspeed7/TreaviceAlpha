using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using TreaviceAlpha.Models;
using System.Data.Entity;
using System.Threading.Tasks;
using System.Web.Http;
using TreaviceAlpha.Services;

namespace TreaviceAlpha.Controllers.Api
{
    public class UsersController : ApiController
    {
        private UserDbContext _context;

        public UsersController()
        {
            _context = new UserDbContext();
        }

        // POST /api/users/login

        // POST /api/users
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
                catch (Exception e)
                {
                    var responseMessage = new HttpResponseMessage(HttpStatusCode.Conflict);
                    throw new HttpResponseException(responseMessage);
                }

                return new HttpResponseMessage(HttpStatusCode.OK);
            }

            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }
    }
}
