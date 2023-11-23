let express = require('express');
let app = express();


app.use(express.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

 /*
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
        // Incorrect password, redirect back to login page
        response.redirect("/login");
      }
    } else {
      // Username not found, redirect back to login page
      response.redirect("/login");
    }
  });
*/  

app.listen(8080, () => console.log(`listening on port 8080`));