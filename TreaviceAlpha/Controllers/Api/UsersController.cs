using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using TreaviceAlpha.Models;
using System.Data.Entity;
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

        // POST /api/customers
        [HttpPost]
        public Boolean CreateUser(User user)
        {
            if(!ModelState.IsValid)
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            user.Password = HashService.HashPass(user.Password);

            _context.Users.Add(user);
            _context.SaveChanges();

            return true;
        }
    }
}
