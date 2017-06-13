using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;

namespace TreaviceAlpha.Models
{
    public class ProfileDbContext : DbContext
    {
        public ProfileDbContext()
            : base("name=DefaultConnection")
        {
        }

        public DbSet<Profile> Profiles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Trove> Troves { get; set; }
        public DbSet<Treasure> Treasures { get; set; }
    }
}