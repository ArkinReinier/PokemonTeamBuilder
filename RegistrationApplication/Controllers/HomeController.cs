using RegistrationApplication.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RegistrationApplication.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }

        public ActionResult RegistrationPage()
        {
            return View();
        }

        public ActionResult LoginPage()
        {
            return View();
        }

        public ActionResult TeamBuilder() //Added this one to open the dashboard 
        {
            return View(); 
        }
        public ActionResult ProfilePage()
        {
            return View();
        }

        /*        public JsonResult PostData(RegistrationModel registrationData)
                {
                    var username = registrationData.usernameInput;
                    var email = registrationData.userEmailInput;
                    var password = registrationData.userPasswordInput;

                    var rData = new RegistrationModel()
                    {
                        userEmailInput = email,
                        userPasswordInput = password,
                        usernameInput = username
                    };
                    return Json(rData, JsonRequestBehavior.AllowGet);

                }
        */
        [HttpPost]

        public void AddData(RegistrationModel registrationData)
        {   

            using (var db = new db_poketrainerContext())
            {
                var trainerData = new tbl_usersModel
                {
                    createdAt = DateTime.Now,
                    username = registrationData.usernameInput,
                    email = registrationData.userEmailInput,
                    uPassword = registrationData.userPasswordInput
                    
                };
                db.tbl_users.AddOrUpdate(trainerData);
                db.SaveChanges();
            }
           

        }

    }
}
