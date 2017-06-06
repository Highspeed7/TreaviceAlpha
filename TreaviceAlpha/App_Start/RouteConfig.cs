using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace TreaviceAlpha
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "view/{controller}/{action}/{id}",
                defaults: new { id = UrlParameter.Optional }
            );

            // Home Index page have ng-app
            routes.MapRoute(
                name: "test",
                url: "{*.}",
                defaults: new { controller = "Home", action = "Index" }
            );
        }
    }
}
