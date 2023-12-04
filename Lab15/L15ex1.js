// Importing the express module and creating an Express application
const express = require('express');
const app = express();

// Middleware to parse the request body as URL-encoded data with support for nested objects and arrays
app.use(express.urlencoded({ extended: true }));

// Importing the Node.js built-in fs (file system) module
const fs = require('fs');

// Constructing the path to the JSON file containing user data
const filename = __dirname + '/user_data.json';

// Object to store user registration data
let user_reg_data = {};

// Checking if the JSON file exists
if (fs.existsSync(filename)) {
    // Reading the contents of the file synchronously and parsing it into a JavaScript object
    const data = fs.readFileSync(filename, 'utf-8');
    user_reg_data = JSON.parse(data);

    // Retrieving file statistics, specifically its size
    const user_data_stats = fs.statSync(filename);
    const stats_size = user_data_stats.size;

    // Logging file information
    console.log(`The file name ${filename} has ${stats_size} characters`);
} else {
    console.log(`The file name ${filename} does not exist.`);
}

// Creating a new user and updating the user data in the JSON file
const username = 'newuser';
user_reg_data[username] = {};
user_reg_data[username].password = 'newpass';
user_reg_data[username].email = 'newuser@user.com';

// Writing the updated user data back to the JSON file
fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');

// Setting up routes for login and registration
app.get("/login", function (request, response) {
    // HTML form for login with optional error message
    const loginForm = `
        <script>
            let params = (new URL(document.location)).searchParams;
            window.onload = function() {
                if (params.has('error')) {
                    login_form['username'].value = params.get('username');
                    document.getElementById("errMsg").innerHTML = params.get("error");
                }
            }
        </script>
        <body>
        <div id="errMsg"></div>
        <form action="" method="POST" name="login_form">
        <input type="text" name="username" size="40" placeholder="enter username" ><br />
        <input type="password" name="password" size="40" placeholder="enter password"><br />
        <input type="submit" value="Submit" id="submit">
        </form>
        </body>
    `;
    response.send(loginForm);
});

app.post("/login", function (request, response) {
    // Processing login form POST and redirecting based on success or failure
    const usernameEntered = request.body['username'];
    const passwordEntered = request.body['password'];
    let responseMsg = "";
    let errors = false;
    const params = new URLSearchParams(request.body);

    // Checking if the username exists in user_reg_data
    if (user_reg_data[usernameEntered]) {
        // Checking if the password matches the username
        if (passwordEntered === user_reg_data[usernameEntered].password) {
            responseMsg = `${usernameEntered} is logged in.`;
        } else {
            responseMsg = `Incorrect password.`;
            errors = true;
        }
    } else {
        responseMsg = `${usernameEntered} does not exist.`;
        errors = true;
    }

    // Sending response or redirecting with error message
    if (!errors) {
        response.send(responseMsg);
    } else {
        response.redirect(`./login?error=${responseMsg}&${params.toString()}`);
    }
});

// Extra credit: Registration route with a form for user registration
app.get("/register", function (request, response) {
    const registerForm = `
        <script>
            let params = (new URL(document.location)).searchParams;
            window.onload = function() {
                if (params.has('error')) {
                    reg_form['username'].value = params.get('username');
                    reg_form['email'].value = params.get('email');
                    reg_form['name'].value = params.get('name');
                }
            }
        </script>
        <body>
        <form action="" method="POST" name="reg_form">
        <input type="text" name="username" size="40" placeholder="enter username" ><br />
        <input type="password" name="password" size="40" placeholder="enter password"><br />
        <input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
        <input type="email" name="email" size="40" placeholder="enter email"><br />
        <input type="submit" value="Submit" id="submit">
        </form>
        </body>
    `;
    response.send(registerForm);
});

// Processing registration form POST and updating user_reg_data
app.post("/register", function (request, response) {
    const newUser = request.body.username;
    let errors = false;
    let respMsg = "";
    const params = new URLSearchParams(request.body);

    // Checking if the username already exists
    if (user_reg_data[newUser]) {
        respMsg = 'Username unavailable. Please enter a different username.';
        errors = true;
    } else if (request.body.password === request.body.repeat_password) {
        // Creating a new user and updating user_reg_data
        user_reg_data[newUser] = {};
        user_reg_data[newUser].name = request.body.name;
        user_reg_data[newUser].password = request.body.password;
        user_reg_data[newUser].email = request.body.email;

        // Writing the updated user data back to the JSON file
        fs.writeFileSync(filename, JSON.stringify(user_reg_data), 'utf-8');
        response.redirect(`./login`);
    } else {
        respMsg = 'Repeat password does not match with password.';
        errors = true;
    }

    // Redirecting to register page with error message if there are errors
    if (errors) {
        response.redirect(`./register?error=${respMsg}&${params.toString()}`);
    }
});

// Listening on port 8080
app.listen(8080, () => console.log(`listening on port 8080`));
