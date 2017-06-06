using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TreaviceAlpha.Models
{
    public class Profile
    {
        [Required]
        public int Id { get; set; }
        
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string Phone { get; set; }

        [Required]
        public int UserId { get; set; }
        public User User { get; set; }

        public List<Item> Selling { get; set; }
        public List<Want> Wants { get; set; }
        public List<Skill> Skills { get; set; }
    }
}