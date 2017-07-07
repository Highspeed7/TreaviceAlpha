using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TreaviceAlpha.Models;

namespace TreaviceAlpha.dtos
{
    public class TroveDto
    {
        public string Title { get; set; }
        public string Desc { get; set; }
        public int Value { get; set; }
        public ICollection<ServiceDto> Treasures { get; set; }
    }
}