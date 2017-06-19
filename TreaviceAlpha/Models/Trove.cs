using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace TreaviceAlpha.Models
{
    public class Trove
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Desc { get; set; }
        public int Value { get; set; }

        public int ProfileId { get; set; }
        public Profile Profile { get; set; }

        public bool IsSystem { get; set; } = false;

        public ICollection<Treasure> Treasures { get; set; }

        public Trove()
        {
            Treasures = new Collection<Treasure>();
        }
    }
}