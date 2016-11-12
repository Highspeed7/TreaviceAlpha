using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Configuration;
using System.Web.Http;
using TreaviceAlpha.Models;
using System.Data.Entity;

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
        public User CreateUser(User user)
        {
            if(!ModelState.IsValid)
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            _context.Users.Add(user);
        }
    }
}
