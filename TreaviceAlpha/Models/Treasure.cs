using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TreaviceAlpha.Models
{
    public class Treasure
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Value { get; set; }
        public string ImgKey { get; set; }
        public byte CatId { get; set; }
        public Category Category { get; set; }
        public byte TypeId { get; set; }
        public TresureType Type { get; set; }

        [Required]
        public virtual ICollection<Trove> Troves { get; set; }
    }
}