using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Newtonsoft.Json;

namespace TreaviceAlpha.Models
{
    public class Treasure
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Value { get; set; }
        public string ImgKey { get; set; }
        public int CatId { get; set; }
        public Category Category { get; set; }
        public TreasureType Type { get; set; }

        public DateTime DateCreated { get; set; }

        [JsonIgnore]
        public ICollection<Trove> Troves { get; set; }

        public Treasure()
        {
            DateCreated = DateTime.Now;
            Troves = new Collection<Trove>();
        }
    }
}