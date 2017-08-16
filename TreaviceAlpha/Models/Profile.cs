using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TreaviceAlpha.Models
{
    public class Profile
    {
        public int Id { get; set; }
        
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string Phone { get; set; }

        public User User { get; set; }
        public double LocationLat { get; set; }
        public double LocationLong { get; set; }
        public ICollection<Want> Wants { get; set; }
        public ICollection<Trove> Troves { get; set; }
    }
}