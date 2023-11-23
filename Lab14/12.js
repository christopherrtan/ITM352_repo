app.get("/login", function (request, response) {
    // Check if there is a login error message
    const loginError = request.query.error || '';
  
    // Give a simple login form with an error message if present
    const str = `
      <body>
        <form action="/login" method="POST">
          <input type="text" name="username" size="40" placeholder="enter username"><br />
          <input type="password" name="password" size="40" placeholder="enter password"><br />
          <input type="submit" value="Submit" id="submit">
        </form>
        <p style="color: red;">${loginError}</p>
      </body>
    `;
  
    response.send(str);
  });
  
  app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    const submittedUsername = request.body.username;
    const submittedPassword = request.body.password;
  
    // Check if the submitted username exists in users_reg_data
    if (users_reg_data.hasOwnProperty(submittedUsername)) {
      // Check if the submitted password matches the stored password
      if (users_reg_data[submittedUsername].password === submittedPassword) {
        // Successful login
        response.send(`<h3>${submittedUsername} logged in</h3>`);
      } else {
        // Incorrect password, redirect back to login page with an error message
        response.redirect("/login?error=Incorrect password. Please try again.");
      }
    } else {
      // Username not found, redirect back to login page with an error message
      response.redirect("/login?error=Username not found. Please register an account.");
    }
  });
  