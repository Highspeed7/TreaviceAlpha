using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TreaviceAlpha.Models
{
    public class User
    {
        [Required]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<Skill> Skills { get; set; }
    }
}