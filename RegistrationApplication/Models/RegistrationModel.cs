using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RegistrationApplication.Models
{
    /*public class RegistrationModel

    pwede maglagay ng kahit anong variables,
      basta pwede gamitin. If iaadd sa database, ilalagay dito.
      define the access modifier and the data type if isasave ang data, ilalagay below, may value man o wala
      we used key (pair): value. 

      We will use the same idea to format the data. Kung ano ang mga dineclare dito, it will serve 
      as a key, the value will be utilized from the front end (ng-model)

      //the format is Key:Value
     // The best way para di mag typo is just copy these keys


   {
       // User registration data properties
       public string FirstName { get; set; }
       public string MiddleName { get; set; } 
       public string LastName { get; set; }
       public string Address { get; set; }
       public string Email { get; set; } 
       public string PhoneNumber { get; set; } 
       public string Username { get; set; }
       public string Password { get; set; }
   }

   public class LoginModel
   {
       // User login data properties
       public string Username { get; set; }
       public string Password { get; set; }
   } */
    public class RegistrationModel
    {
        public string usernameInput { get; set; }
        public string userEmailInput { get; set; }
        public string userPasswordInput { get; set; }
    }
}
