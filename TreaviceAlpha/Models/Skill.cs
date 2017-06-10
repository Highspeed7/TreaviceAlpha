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
        [Required]
        public string Title { get; set; }
        [Required]
        public string Desc { get; set; }
        [Required]
        public int Value { get; set; }
        [Required]
        public bool Negotiable { get; set; }

        [Required]
        public int ProfileId { get; set; }
        public Profile Profile { get; set; }

        public Category Category { get; set; }
    }
}