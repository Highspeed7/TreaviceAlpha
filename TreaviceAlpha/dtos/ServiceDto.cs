﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TreaviceAlpha.Models;

namespace TreaviceAlpha.dtos
{
    public class ServiceDto
    {
        public string Title { get; set; }
        public string Desc { get; set; }
        public bool IsNeg { get; set; }
        public int CatId { get; set; }
        public int PtValue { get; set; }
        public int TroveId { get; set; }
    }
}