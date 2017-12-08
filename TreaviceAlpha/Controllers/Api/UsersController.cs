using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
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
using TreaviceAlpha.Auth;
using TreaviceAlpha.Utilities;

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
            // Attach a profile to the user.
            user.Profile = new Profile();
            if (ModelState.IsValid)
            {
                user.Password = HashService.HashPass(user.Password);
                using (var context = new ProfileDbContext())
                {
                    // Check that the user does not already exist.
                    if (context.Users.Any(u => u.Email == user.Email))
                    {
                        return Content(HttpStatusCode.BadRequest, "User already exists");
                    }
                    using (var dbContextTransaction = context.Database.BeginTransaction())
                    {
                        try
                        {
                            var userInDb = context.Users.Add(user);
                            await context.SaveChangesAsync();
                            var category = await context.Category.SingleOrDefaultAsync(cat => cat.Title == "Points");

                            var treasure = new Treasure()
                            {
                                Title = "Points",
                                Value = 0,
                                Type = TreasureType.POINTS,
                                CatId = category.Id,
                            };

                            treasure.Troves.Add(new Trove()
                            {
                                Title = "Points",
                                Desc = "Accumulated points",
                                Value = treasure.Value,
                                ProfileId = userInDb.Profile.Id,
                                IsSystem = true
                            });
                            context.Treasures.Add(treasure);
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
        [Route("login")]
        [HttpPost]
        [Auth.RequireHttps]
        [AntiForgeryValidate]
        public IHttpActionResult Login(UserLoginDto user)
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
                    using(var context = new ProfileDbContext())
                    {
                        User dbUser = context.Users.Include("Profile").Where(usr => usr.Email == user.Email).SingleOrDefault();
                        var longitude = user.LoginLong;
                        var latitude = user.LoginLat;

                        LocationUtils.DegreeToRadians(ref longitude, ref latitude);

                        dbUser.Profile.LoginLat = latitude;
                        dbUser.Profile.LoginLong = longitude;

                        context.Users.AddOrUpdate(dbUser);
                        context.SaveChanges();
                    }
                    return Content(HttpStatusCode.OK, new LoginDto() { Email = user.Email});
                }
            }
            return BadRequest();
        }

        // TODO: Refactor controller database calls into a respository
        //
        // GET /api/user/profile
        [Route("profile")]
        [HttpGet]
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
                                   on p.Id equals u.Id
                                   select p;
                return result.ToList();
            }
        }

        // PUT /api/user/profile
        [Route("profile")]
        [HttpPut]
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
                    var profileInDb = context.Profiles.SingleOrDefault(p => p.Id == userInDb.Id);

                    profileInDb.FirstName = profile.FirstName;
                    profileInDb.LastName = profile.LastName;
                    profileInDb.Street = profile.Street;
                    profileInDb.City = profile.City;
                    profileInDb.State = profile.State;
                    profileInDb.Phone = profile.Phone;
                    profileInDb.ZipCode = profile.ZipCode;
                    
                    // if(profile)

                    if (context.SaveChanges() > 0)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                }
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "The server received a bad request during login");
        }

        // GET /api/user/profiles/assets/categories
        [Route("profile/assets/categories")]
        [HttpGet]
        public IEnumerable<Category> GetAssetCategories()
        {
            List<Category> categories;

            using (var context = new ProfileDbContext())
            {
                categories = context.Category.Where(cat => !cat.isSystemCat).ToList();
            }

            return categories;
        }

        // GET /api/user/profiles/assets/categories
        [Route("profile/assets/system/troves")]
        [HttpGet]
        [AuthFirst]
        public async Task<IEnumerable<Trove>> GetSystemAssetTroves()
        {
            var userEmail = HttpContext.Current.User.Identity.Name;
            List<Trove> troves;

            using (var context = new ProfileDbContext())
            {
                // user id is same as their profile so use it.
                var userInDb = await context.Users.SingleAsync(u => u.Email == userEmail);

                troves = await context.Troves
                    .Where(t => t.ProfileId == userInDb.Id && !t.IsSystem)
                    .ToListAsync();
            }

            return troves;
        }

        // GET /api/user/profiles/assets/categories
        [Route("profile/assets/troves")]
        [HttpGet]
        [AuthFirst]
        public async Task<IEnumerable<Trove>> GetUserAssetTroves()
        {
            var userEmail = HttpContext.Current.User.Identity.Name;
            List<Trove> troves;

            using (var context = new ProfileDbContext())
            {
                // user id is same as their profile so use it.
                var userInDb = await context.Users.SingleAsync(u => u.Email == userEmail);

                troves = await context.Troves.Include("Treasures")
                    .Where(t => t.ProfileId == userInDb.Id)
                    .ToListAsync();
            }

            return troves;
        }

        // TODO: Prevent duplicate treasures from being stored.
        // PUT /api/user/profile/asset/troves/{id}
        [Route("profile/assets/troves/{id}")]
        [HttpPut]
        [RequireHttps]
        [AuthFirst]
        public IHttpActionResult UpdateTrove(int id, [FromBody] Trove trove)
        {
            if (ModelState.IsValid)
            {
                using (var context = new ProfileDbContext())
                {
                    var troveInDb = context.Troves.Include("Treasures").Single(tr => tr.Id == id);
                    Treasure newTreasure = null;

                    foreach (var treasure in trove.Treasures)
                    {
                        newTreasure = troveInDb.Treasures.Any(tr => tr.Id != treasure.Id) ? treasure : null;
                    }

                    if (newTreasure == null)
                    {
                        return BadRequest();
                    }

                    int troveValue = troveInDb.Value;

                    troveInDb.Title = trove.Title;
                    troveInDb.Desc = trove.Desc;
                    troveInDb.Treasures.Add(newTreasure);

                    troveValue += newTreasure.Value;

                    troveInDb.Value = troveValue;

                    if (context.SaveChanges() > 1)
                    {
                        return Ok();
                    }
                    return BadRequest();
                }
            }
            return BadRequest();
        }

        // POST /api/user/profile/assets/treasures
        [Route("profile/assets/treasures")]
        [HttpPost]
        [RequireHttps]
        [AuthFirst]
        public IHttpActionResult AddTreasure([FromBody] TreasureDto treasure)
        {
            var userEmail = HttpContext.Current.User.Identity.Name;

            if (ModelState.IsValid)
            {
                using (var context = new ProfileDbContext())
                {
                    var userInDb = context.Users.Single(u => u.Email == userEmail);

                    var newTreasure = new Treasure()
                    {
                        Title = treasure.Title,
                        Value = treasure.PtValue,
                        Type = TreasureType.ITEM,
                        CatId = treasure.CatId
                    };

                    // For every service create a default trove for it.
                    newTreasure.Troves.Add(new Trove()
                    {
                        Title = treasure.Title + " Trove",
                        ProfileId = userInDb.Id,
                        Value = treasure.PtValue,
                        Desc = treasure.Desc,
                    });

                    context.Treasures.Add(newTreasure);
                    if (context.SaveChanges() > 1)
                    {
                        return Ok();
                    }
                    return BadRequest();
                }
            }
            return BadRequest();
        }

        // POST /api/user/profile/assets/services
        [Route("profile/assets/services")]
        [HttpPost]
        [RequireHttps]
        [AuthFirst]
        public IHttpActionResult AddService([FromBody]ServiceDto service)
        {
            var userEmail = HttpContext.Current.User.Identity.Name;

            if (ModelState.IsValid)
            {
                using (var context = new ProfileDbContext())
                {
                    var userInDb = context.Users.Single(u => u.Email == userEmail);

                    var treasure = new Treasure()
                    {
                        Title = service.Title,
                        Value = service.PtValue,
                        Type = TreasureType.SERVICE,
                        CatId = service.CatId
                    };

                    // For every service create a default trove for it.
                    treasure.Troves.Add(new Trove()
                    {
                        Title = service.Title + " Trove",
                        ProfileId = userInDb.Id,
                        Value = service.PtValue,
                        Desc = service.Desc,
                    });

                    context.Treasures.Add(treasure);
                    if(context.SaveChanges() > 1)
                    {
                        return Ok();
                    }
                    return BadRequest();
                }
            }
            return BadRequest();
        }

        [System.Web.Http.Route("progress")]
        [System.Web.Http.HttpGet]
        public int GetProfileProgress(string email)
        {
            int completedFieldsCount = 0;

            using (var context = new ProfileDbContext())
            {
                var userInDb = context.Users.Single(u => u.Email == email);
                var profileInDb = context.Profiles.SingleOrDefault(p => p.Id == userInDb.Id);

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
