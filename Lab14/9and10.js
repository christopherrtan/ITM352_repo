app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

// Question 9 of 12
/* 
 app.post("/register", function (request, response) {
    // Process a simple register form
    const submittedUsername = request.body.username;
    const submittedPassword = request.body.password;
    const repeatedPassword = request.body.repeat_password;
    const submittedEmail = request.body.email;
  
    // Check if the submitted username already exists
    if (users_reg_data.hasOwnProperty(submittedUsername)) {
      response.send(`<h3>Username '${submittedUsername}' already exists. Please choose a different username.</h3>`);
    } else {
      // Check if the repeated password matches the original password
      if (submittedPassword !== repeatedPassword) {
        response.send(`<h3>Passwords do not match. Please try again.</h3>`);
      } else {
        // Add the new user to users_reg_data
        users_reg_data[submittedUsername] = {};
        users_reg_data[submittedUsername].password = submittedPassword;
        users_reg_data[submittedUsername].email = submittedEmail;
  
        // Write the updated users_reg_data to 'user_data.json'
        fs.writeFileSync(filePath, JSON.stringify(users_reg_data));
  
        // Redirect to the login page
        response.redirect("/login");
      }
    }
  });
 */ 

//Question 10 of 12
/*  
  app.post("/register", function (request, response) {
    // Process a simple register form
    const submittedUsername = request.body.username;
    const submittedPassword = request.body.password;
    const repeatedPassword = request.body.repeat_password;
    const submittedEmail = request.body.email;
  
    // Check if the submitted username already exists
    if (users_reg_data.hasOwnProperty(submittedUsername)) {
      response.send(`<h3>Username '${submittedUsername}' already exists. Please choose a different username.</h3>`);
    } else {
      // Check if the submitted password and repeated password match
      if (submittedPassword !== repeatedPassword) {
        response.send(`<h3>Passwords do not match. Please try again.</h3>`);
      } else {
        // Add the new user to users_reg_data
        users_reg_data[submittedUsername] = {};
        users_reg_data[submittedUsername].password = submittedPassword;
        users_reg_data[submittedUsername].email = submittedEmail;
  
        // Write the updated users_reg_data to 'user_data.json'
        fs.writeFileSync(filePath, JSON.stringify(users_reg_data));
  
        // Redirect to the login page
        response.redirect("/login");
      }
    }
  });
  */