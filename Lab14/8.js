const fs = require('fs');

// Define the file path
const filePath = 'user_data.json';

// Create or load the users_reg_data object
let users_reg_data = {};

// Add a new user
const newUsername = 'newuser';
users_reg_data[newUsername] = {};
users_reg_data[newUsername].password = 'newpass';
users_reg_data[newUsername].email = 'newuser@user.com';

// Write the updated users_reg_data to 'user_data.json'
fs.writeFileSync(filePath, JSON.stringify(users_reg_data));

// Read the file synchronously and assign the content to data
const data = fs.readFileSync(filePath, 'utf-8');

// Parse the JSON string into an object
const updated_users_reg_data = JSON.parse(data);

// Output the updated object to the console
console.log(updated_users_reg_data);
