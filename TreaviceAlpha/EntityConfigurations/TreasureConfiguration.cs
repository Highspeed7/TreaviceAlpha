using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;
using TreaviceAlpha.Models;

namespace TreaviceAlpha.EntityConfigurations
{
    public class TreasureConfiguration : EntityTypeConfiguration<Treasure>
    {
        public TreasureConfiguration()
        {
                HasRequired(t => t.Type)
                .WithMany(ty => ty.Treasures)
                .HasForeignKey(t => t.TypeId)
                .WillCascadeOnDelete(false);
            
                HasRequired(t => t.Category)
                .WithMany(c => c.Treasures)
                .HasForeignKey(t => t.CatId);
        }
    }
}