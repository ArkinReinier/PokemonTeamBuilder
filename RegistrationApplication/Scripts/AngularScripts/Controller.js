app.controller("RegistrationApplicationController", function ($scope, RegistrationApplicationService) {

    $scope.getInputData = function () {
        // Check if all required fields are filled
        if (!$scope.userEmail || !$scope.userPassword || !$scope.userConfirm || !$scope.username) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Information',
                text: 'All fields are required!'
            });
            return;
        }

        if (!$scope.userPassword || $scope.userPassword.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Password is too short',
                text: 'Password is too short!'
            });
            return;
        } else if (!/^(?=.*[0-9])(?=.*[.!£$%^&*()\-_=+#~@[\]{}|\\/]).{6,}$/.test($scope.userPassword)) {
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
        }

        // Check if the user already exists in local storage
        var storedUsers = JSON.parse(sessionStorage.getItem('userCredentials')) || [];
        var userSearch = storedUsers.find(user =>
            user.UserName === ($scope.username)
        );

        if (!userSearch) {
            // Create user object with username in lowercase format
            var newUser = {
                UserEmail: $scope.userEmail,
                UserPassword: $scope.userPassword,
                UserName: $scope.username,
                Password: $scope.userPassword // Password is whatever the user entered
            };

            // Add the new user to the array and store it in local storage
            storedUsers.push(newUser);
            sessionStorage.setItem('userCredentials', JSON.stringify(storedUsers));

            // Success message and redirect
            let timerInterval;
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registration Complete!",
                html: "Redirecting in <b></b> seconds",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = Math.ceil(Swal.getTimerLeft() / 1000);
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                }
            }).then((result) => {
                $scope.cancelFunc(); // Clear the form inputs after successful registration
                window.location.href = "/Home/LoginPage"; // Redirect to login page
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'User Already Exists',
                text: 'A user with the same name already exists.'
            });
        }
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

    // Login function to validate user credentials and redirect to the dashboard if successful
    $scope.login = function () {
        var username = $scope.username.toLowerCase();
        var password = $scope.password;

        // Retrieve users from local storage
        var storedUsers = JSON.parse(sessionStorage.getItem('userCredentials')) || [];

        // Find the user based on the concatenated username in lowercase and matching password
        var foundUser = storedUsers.find(user =>
            user.UserName === username && user.Password === password
        );

        if (foundUser) {
            alert("Login Successful!");
            window.location.href = "/Home/Dashboard"; // Redirect sa dashboard pag ok ang login
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Login',
                text: 'Incorrect username or password.'
            });
            $scope.username = null;
            $scope.password = null;
        }
    };


    // Pokemon Forum 



});

  

