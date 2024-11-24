app.service("RegistrationApplicationService", function ($http) {


 /*
    // Post registration data
    this.postData = function (registrationData) {
        var response = $http({
            method: "post",
            url: "/Home/PostData",
            data: registrationData //where data acquired is passed
        });
        return response;
    };

    // User login
    this.loginUser = function (loginData) {
        var response = $http({
            method: "post",
            url: "/Home/Login",
            data: loginData 
        });
        return response;
    };

    // for the login page validation
    this.validateUserData = function (fName, lName) {
        var response = $http({
            method: "post",
            url: "/Home/ValidateUser",
            params: {
                FirstName: fName,
                LastName: lName
            }
        });
        return response;
    };*/

    this.postData = function (registrationData) {
        return $http({
            method: "POST",
            url: "/HomeController/postData", // points to the AddData action dbInput.cs
            data: registrationData
        });
    };
    this.addData = function (registrationData) {
        return $http({
            method: "POST",
            url: "/HomeController/AddData", // points to the AddData action dbInput.cs
            data: registrationData
        });
    };

});
