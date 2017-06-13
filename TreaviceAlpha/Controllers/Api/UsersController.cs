﻿using System;
using System.Collections;
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
using System.Web.Mvc;
using TreaviceAlpha.Auth;

namespace TreaviceAlpha.Controllers.Api
{
    [System.Web.Http.RoutePrefix("api/user")]
    public class UsersController : ApiController
    {
        //
        // POST /api/user/register
        [System.Web.Http.Route("register")]
        [System.Web.Http.HttpPost]
        [Auth.RequireHttps]
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
                            
                        }catch (Exception e)
                        {
                            dbContextTransaction.Rollback();
                            var responseMessage = new HttpResponseMessage(HttpStatusCode.Conflict);
                            throw new HttpResponseException(responseMessage);
                        }
                    }
                }
            }

            throw new HttpResponseException(HttpStatusCode.BadRequest);
        }

        //
        // POST /api/user/register
        [System.Web.Http.Route("login")]
        [System.Web.Http.HttpPost]
        [Auth.RequireHttps]
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
                    
                    return Content(HttpStatusCode.OK, new LoginDto() { Email = user.Email});
                }
            }
            return BadRequest();
        }

        // TODO: Refactor controller database calls into a respository
        //
        // GET /api/user/profile
        [System.Web.Http.Route("profile")]
        [System.Web.Http.HttpGet]
        public IEnumerable<Profile> GetUserProfileData(string userEmail)
        {
            // TODO: User a better qualified model for returning profile data.
            using (var context = new ProfileDbContext())
            {
                var userQuery = from u in context.Users
                                where u.Email == userEmail
                                select u;

                var result = from p in context.Profiles
                                   join u in userQuery
                                   on p.UserId equals u.Id
                                   select p;
                return result.ToList();
            }
        }

        // POST /api/user/profile
        [System.Web.Http.Route("profile")]
        [System.Web.Http.HttpPut]
        [Auth.RequireHttps]
        [AuthFirst]
        public HttpResponseMessage UpdateUserProfileData([FromBody]ProfileDto profile)
        {
            var Request = new HttpRequestMessage();

            if (ModelState.IsValid)
            {
                using (var context = new ProfileDbContext())
                {
                    var userInDb = context.Users.Single(u => u.Email == profile.Email);
                    var profileInDb = context.Profiles.Single(p => p.UserId == userInDb.Id);

                    profileInDb.FirstName = profile.FirstName;
                    profileInDb.LastName = profile.LastName;
                    profileInDb.Street = profile.Street;
                    profileInDb.City = profile.City;
                    profileInDb.State = profile.State;
                    profileInDb.Phone = profile.Phone;
                    profileInDb.ZipCode = profile.ZipCode;

                    if (context.SaveChanges() > 0)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                }
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "The server received a bad request during login");
        }

        // POST /api/user/profile/services
        //[System.Web.Http.Route("profile/services")]
        //[System.Web.Http.HttpPut]
        //[Auth.RequireHttps]
        //[AuthFirst]
        //public HttpResponseMessage SaveOrUpdateServices([FromBody]ServiceDto service)
        //{
        //    var userEmail = HttpContext.Current.User.Identity.Name;

        //    if (ModelState.IsValid)
        //    {
        //        using (var context = new ProfileDbContext())
        //        {
        //            var userInDb = context.Users.Single(u => u.Email == userEmail);
        //            var profileInDb = context.Profiles.Single(p => p.UserId == userInDb.Id);

        //        }
        //    }
        //}

        [System.Web.Http.Route("progress")]
        [System.Web.Http.HttpGet]
        public int GetProfileProgress(string email)
        {
            int completedFieldsCount = 0;

            using (var context = new ProfileDbContext())
            {
                var userInDb = context.Users.Single(u => u.Email == email);
                var profileInDb = context.Profiles.Single(p => p.UserId == userInDb.Id);

                if (!String.IsNullOrEmpty(profileInDb.FirstName))
                {
                    completedFieldsCount++;
                }
                if (!String.IsNullOrEmpty(profileInDb.LastName))
                {
                    completedFieldsCount++;
                }
                if (!String.IsNullOrEmpty(profileInDb.Street))
                {
                    completedFieldsCount++;
                }
                if (!String.IsNullOrEmpty(profileInDb.City))
                {
                    completedFieldsCount++;
                }
                if (!String.IsNullOrEmpty(profileInDb.State))
                {
                    completedFieldsCount++;
                }
                if (!String.IsNullOrEmpty(profileInDb.ZipCode))
                {
                    completedFieldsCount++;
                }
                if (!String.IsNullOrEmpty(profileInDb.Phone))
                {
                    completedFieldsCount++;
                }
                if (!String.IsNullOrEmpty(userInDb.Email))
                {
                    completedFieldsCount++;
                }
            }
            return ((completedFieldsCount*100)/8);
        }

        [System.Web.Http.Route("logout")]
        [System.Web.Http.HttpGet]
        public void Logout()
        {
            HttpContext.Current.GetOwinContext().Authentication.SignOut(DefaultAuthenticationTypes.ApplicationCookie,
                                                                    DefaultAuthenticationTypes.ExternalCookie);
        }

        [System.Web.Http.Route("isLoggedIn")]
        [System.Web.Http.HttpGet]
        public bool IsLoggedIn()
        {
            return HttpContext.Current.Request.IsAuthenticated;
        }

        private bool IsValid(string email, string password)
        {
            using (var context = new ProfileDbContext())
            {
                IEnumerable<User> userInfo = context.Users.Where(c => c.Email == email);
                
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
