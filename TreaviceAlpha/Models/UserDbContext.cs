using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;

namespace TreaviceAlpha.Models
{
    public class UserDbContext : DbContext
    {
        public DbSet<Skill> Skills { get; set; }
        public DbSet<User> Users { get; set; }

        public UserDbContext()
            : base("name=DefaultConnection")
        {
        }
    }
}