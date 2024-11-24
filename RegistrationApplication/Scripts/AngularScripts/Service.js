app.service("RegistrationApplicationService", function ($http) {


    this.postData = function (registrationData) {
        return $http({
            method: "POST",
            url: "/Home/postData", // points to the AddData action dbInput.cs
            data: registrationData
        });
    };
    this.addData = function (registrationData) {
        return $http({
            method: "POST",
            url: "/Home/AddData", // points to the AddData action dbInput.cs
            data: registrationData
        });
    };

});
