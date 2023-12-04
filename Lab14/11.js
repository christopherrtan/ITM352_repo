app.get("/login", function (request, response) {
    // Give a simple login form
    const usernameQueryParam = request.query.username || ''; // Get username from query string if present
  
    const str = `
      <body>
        <form action="/login" method="POST">
          <input type="text" name="username" size="40" placeholder="enter username" value="${usernameQueryParam}"><br />
          <input type="password" name="password" size="40" placeholder="enter password"><br />
          <input type="submit" value="Submit" id="submit">
        </form>
      </body>
    `;
  
    response.send(str);
  });
  