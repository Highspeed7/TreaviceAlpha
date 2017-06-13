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

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // Trove to Treasure
            modelBuilder.Entity<Trove>()
                .HasMany<Treasure>(tv => tv.Treasures)
                .WithMany(tr => tr.Troves)
                .Map(cs =>
                {
                    cs.MapLeftKey("TroveId");
                    cs.MapRightKey("TreasureId");
                    cs.ToTable("TroveXTreasure");
                });

            // User
            modelBuilder.Entity<User>()
                .HasKey(u => u.Id);

            // Trove
            modelBuilder.Entity<Trove>()
                .HasKey(tv => tv.Id);
            modelBuilder.Entity<Trove>()
                .Property(tv => tv.Title)
                .HasMaxLength(150)
                .IsRequired();
            modelBuilder.Entity<Trove>()
                .Property(tv => tv.Desc)
                .HasMaxLength(1000);
            modelBuilder.Entity<Trove>()
                .Property(tv => tv.Value)
                .IsRequired();

            // Treasure
            modelBuilder.Entity<Treasure>()
                .HasKey(t => t.Id);
            modelBuilder.Entity<Treasure>()
                .Property(t => t.Title)
                .IsRequired()
                .HasMaxLength(150);
            modelBuilder.Entity<Treasure>()
                .Property(t => t.Value)
                .IsRequired();

            // Profile
            modelBuilder.Entity<Profile>()
                .HasMany(p => p.Troves)
                .WithRequired(tv => tv.Profile)
                .HasForeignKey(tv => tv.ProfileId);

            // Category
            modelBuilder
                .Entity<Category>()
                .HasMany(c => c.Treasures)
                .WithRequired(t => t.Category)
                .HasForeignKey(t => t.CatId);
        }
    }
}