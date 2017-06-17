using TreaviceAlpha.Models;

namespace TreaviceAlpha.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<TreaviceAlpha.Models.ProfileDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(TreaviceAlpha.Models.ProfileDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            context.Category.AddOrUpdate(
              c => c.Title,
              new Category { Title = "Landscaping" },
              new Category { Title = "Carpentry" },
              new Category { Title = "Photography" }
            );
        }
    }
}
