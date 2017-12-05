using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TreaviceAlpha.dtos
{
    public class UserLoginDto
    {
        public String Email { get; set; }
        public String Password { get; set; }
        public double LoginLat { get; set; }
        public double LoginLong { get; set; }
    }
}