using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using DevOne.Security.Cryptography.BCrypt;

namespace TreaviceAlpha.Services
{
    public class HashService
    {
        private static string HARD_SALT = "^TJ~332";

        public static string HashPass(string value)
        {
            var salt = BCryptHelper.GenerateSalt();
            return BCryptHelper.HashPassword(value + HashService.HARD_SALT, salt);
        }

        public bool UnhashPass(string dbPass, string userEnteredPass)
        {
            return BCryptHelper.CheckPassword(userEnteredPass + HashService.HARD_SALT, dbPass);
        }
    }
}