using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace RegistrationApplication.Models
{
    public class tbl_usersMap : EntityTypeConfiguration<tbl_usersModel>
    {
        public tbl_usersMap()
        {
            HasKey(x => x.userID); // primary key
            ToTable("tbl_users");
        }
    }
}
