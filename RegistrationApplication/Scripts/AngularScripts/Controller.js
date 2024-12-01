app.controller("RegistrationApplicationController", function ($scope, RegistrationApplicationService) {

    $scope.getInputData = function ()
        {
            /*// Check if all required fields are filled
            if (!$scope.userEmail || !$scope.userPassword || !$scope.userConfirm || !$scope.username) {
                Swal.fire({
                    icon: 'error',
                    title: 'Missing Information',
                    text: 'All fields are required!'
                });
                return;
            }
            // Check if Pass is empty or password is too short
            if (!$scope.userPassword || $scope.userPassword.length < 6) {
                Swal.fire({
                    icon: 'error',
                    title: 'Password is too short',
                    text: 'Password is too short!'
                });
                return;
            } else if (!/^(?=.*[0-9])(?=.*[.!£$%^&*()\-_=+#~@[\]{}|\\/]).{6,}$/.test($scope.userPassword)) { // Check if password is weak
                Swal.fire({
                    icon: 'error',
                    title: 'No special characters',
                    text: 'Password must contain a number and a special character!'
                });
                return;
            }
            // Ensure passwords match
            if ($scope.userPassword !== $scope.userConfirm) {
                Swal.fire({
                    icon: 'error',
                    title: 'Password Mismatch',
                    text: 'Passwords do not match!'
                });
                return;
            }*/

            // set data to chuchu to connect to backend
            var registrationData = {
                usernameInput: $scope.username,
                userEmailInput: $scope.userEmail,
                userPasswordInput: $scope.userPassword
            };

            var saveData = RegistrationApplicationService.postData(registrationData);
            saveData.then(function (ReturnedData) {
                if (ReturnedData.data.success) {
                    alert(ReturnedData.data.message);  // Success message from the controller
                } else {
                    alert("Error: " + ReturnedData.data.message);  // Error message from the controller
                }
            })

            

        };

  

    // Function that clears out all the input fields on forms
    $scope.cancelFunc = function () {
        $scope.firstName = null;
        $scope.username = null;
        $scope.lastName = null;
        $scope.userEmail = null;
        $scope.userPassword = null;
        $scope.userConfirm = null;
        $scope.userAddress = null;
        $scope.userPhone = null;
        $scope.username = null;
        $scope.password = null;
    };


    // After registration
    $scope.initAlert = function () {
        Swal.fire("Registration Success!");
    };
});


  

