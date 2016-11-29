using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TreaviceAlpha.Models
{
    public class Item
    {
        [Required]
        public int Id { get; set; }
    }
}