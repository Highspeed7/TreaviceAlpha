using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TreaviceAlpha.Models
{
    public class Category
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }

        public ICollection<Treasure> Treasures { get; set; }
    }
}