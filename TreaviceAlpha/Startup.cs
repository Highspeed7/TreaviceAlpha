using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TreaviceAlpha.Startup))]
namespace TreaviceAlpha
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
