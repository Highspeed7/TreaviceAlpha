using System;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Mvc;
using ActionFilterAttribute = System.Web.Http.Filters.ActionFilterAttribute;

namespace TreaviceAlpha.Auth
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
    public class AuthFirstAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext filterContext)
        {
            if(!HttpContext.Current.User.Identity.IsAuthenticated)
            {
                filterContext.Response = new HttpResponseMessage(HttpStatusCode.Unauthorized);
            }else
            {
                return;
            }
            base.OnActionExecuting(filterContext);
        }
    }
}