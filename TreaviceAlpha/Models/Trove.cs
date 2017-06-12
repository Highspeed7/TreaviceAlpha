using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TreaviceAlpha.Models
{
    public class Trove
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Desc { get; set; }
        [Required]
        public int Value { get; set; }

        [ForeignKey("Profile")]
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }

        [Required]
        public virtual ICollection<Treasure> Treasures { get; set; }
    }
}