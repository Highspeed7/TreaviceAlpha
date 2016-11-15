using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Mvc;
using ActionFilterAttribute = System.Web.Http.Filters.ActionFilterAttribute;

namespace TreaviceAlpha.Services
{
    public static class AntiForgeryService
    {
        public static string RequestVerificationToken(this HtmlHelper helper)
        {
            return String.Format("ncg-request-verification-token={0}", GetTokenHeaderValue());
        }

        private static string GetTokenHeaderValue()
        {
            string cookieToken, formToken;
            System.Web.Helpers.AntiForgery.GetTokens(null, out cookieToken, out formToken);
            return cookieToken + ":" + formToken;
        }
    }

    public class AntiForgeryValidate : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            string cookieToken = "";
            string formToken = "";

            IEnumerable<string> tokenHeaders;

            if (actionContext.Request.Headers.TryGetValues("__RequestVerificationToken", out tokenHeaders))
            {
                string[] tokens = tokenHeaders.First().Split(':');
                if (tokens.Length == 2)
                {
                    cookieToken = tokens[0].Trim();
                    formToken = tokens[1].Trim();
                }
            }
            System.Web.Helpers.AntiForgery.Validate(cookieToken, formToken);

            base.OnActionExecuting(actionContext);
        }
    }
}