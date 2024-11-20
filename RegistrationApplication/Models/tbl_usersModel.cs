using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RegistrationApplication.Models
{
    public class tbl_usersModel
    {
        public int userID { get; set; }
        public string username { get; set; }
        public string uPassword { get; set; }
        public string email { get; set; }
        public DateTime createdAt { get; set; }
    }
}
