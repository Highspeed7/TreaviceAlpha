using System;
using System.Collections.Generic;

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
        public byte TypeId { get; set; }
        public TresureType Type { get; set; }

        public DateTime DateCreated { get; set; }

        public virtual ICollection<Trove> Troves { get; set; }

        public Treasure()
        {
            DateCreated = DateTime.Now;
        }
    }
}