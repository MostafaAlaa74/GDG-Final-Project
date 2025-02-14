<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignUp</title>
    <link rel="stylesheet" href="./assets/css/all.min.css">
    <link rel="stylesheet" href="./assets/css/normalize.css">
    <link rel="stylesheet" href="../../public/signUp2/signUp.js">
</head>
<body>
    
    <!-- Start Register Form -->
    <div class="regester">
        <h1>Hi, Welcome to Tikawe</h1>
        <p>Register your account</p>
        <form action="index.html">
            <div class="content">
                <div class="first-name">
                    <label for="first-name">First name</label>
                    <input class="reg-first-name" type="text" name="First name" id="first-name" placeholder="saraa" required>
                    <img src="./assets/images/user-edit.png" alt="">
                </div>
                <div class="sur-name">
                    <label for="surname">Surname</label>
                    <input class="reg-last-name" type="text" name="SurName" id="surname" placeholder="Ali" required>
                    <img src="./assets/images/user-edit.png" alt="">
                </div>
            </div>
            <div class="content">
                <div class="mail">
                    <label for="email">Email Address</label>
                    <input class="reg-email" type="email" name="email" id="email" placeholder="om34@gmail.com" required>
                    <img src="./assets/images/sms.png" alt="">
                </div>
                <div class="gender">
                    <label for="gender">Gender</label>
                    <input class="reg-gender" type="text" name="gender" id="gender" placeholder="Female" required>
                    <img src="./assets/images/usr.png" alt="">
                </div>
            </div>
            <div class="content">
                <div class="pass">
                    <label for="pass">password</label>
                    <input class="reg-password" type="password" name="password" id="pass" placeholder="Enter Your Password" required>
                    <img src="./assets/images/eye-slash.png" class="eye" alt="">
                    <img src="./assets/images/lock.png" class="lock" alt="">
                </div>
                <div class="confirm-pass">
                    <label for="confirm-pass">Confirm password</label>
                    <input class="reg-password-confirmation" type="password" name="Confirm password" id="confirm-pass" placeholder="Confirm Password" required>
                    <img src="./assets/images/lock.png" class="lock" alt="">
                    <img src="./assets/images/eye.png" class="eye" alt="">
                </div>
            </div>
            <input type="submit" value="Register" class="log-in">
            <p>or login with</p>
            <a class="google" href="index.html">Sign up with Google</a>
            <img src="assets/images/Google.png" alt="">
            <a class="apple" href="index.html">Sign up with Email</a>
            <img src="assets/images/Vector5.png" alt="">
        </form>
    </div>
    <script src="../../public/signUp2/signUp.js"></script>
</body>
</html> 