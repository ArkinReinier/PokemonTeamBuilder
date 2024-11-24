using MySql.Data.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RegistrationApplication.Models
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class db_poketrainerContext : DbContext
    {
        static db_poketrainerContext()
        {
            Database.SetInitializer<db_poketrainerContext>(null);
        }
        public db_poketrainerContext() : base("Name=db_poketrainer") { }

        public virtual DbSet<tbl_usersModel> tbl_users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Configurations.Add(new tbl_usersMap());
        }



    }


}
