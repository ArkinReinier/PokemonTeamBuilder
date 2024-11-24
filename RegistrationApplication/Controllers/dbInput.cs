/*using System;
using System.Linq;
using System.Web.Mvc;
using RegistrationApplication.Models;

namespace RegistrationApplication.Controllers
{
public class dbInputController : Controller
    {
        [HttpPost]
        public JsonResult AddData(RegistrationModel registrationData)
        {
            try
            {
                using (var db = new db_poketrainerContext())
                {
                    // Hash the password
                    var hashedPassword = PasswordHasher.HashPassword(registrationData.userPasswordInput);

                    // Prepare the data
                    var empData = new tbl_usersModel
                    {
                        username = registrationData.usernameInput,
                        email = registrationData.userEmailInput,
                        uPassword = hashedPassword,
                        createdAt = DateTime.Now
                    };

                    // Add and save the data
                    db.tbl_users.Add(empData);
                    db.SaveChanges();
                }

                return Json(new { success = true, message = "User registered successfully!" });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }
    }
}
*/