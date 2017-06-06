using System;
using System.Web.Mvc;

namespace TreaviceAlpha.Auth
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
    public class AuthFirstAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if(!filterContext.HttpContext.Request.IsAuthenticated)
            {
                filterContext.HttpContext.Response.StatusCode = 401;
            }else
            {
                return;
            }
            base.OnActionExecuting(filterContext);
        }
    }
}