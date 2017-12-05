using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TreaviceAlpha.Utilities
{
    public class LocationUtils
    {
        public static void DegreeToRadians(ref double longitude, ref double latitude)
        {
            longitude = longitude * (Math.PI / 180);
            latitude = latitude * (Math.PI / 180);
        }
    }
}