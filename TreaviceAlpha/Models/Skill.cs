using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TreaviceAlpha.Models
{
    public class Skill
    {
        [Required]
        public int Id { get; set; }
        public string Name { get; set; }
        public byte CategoryId { get; set; }
        public int PointValue { get; set; }
        public List<User> Users { get; set; }
    }
}