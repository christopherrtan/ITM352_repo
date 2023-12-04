const fs = require('fs');

// Define the file path
const filePath = 'user_data.json';

// Read the file synchronously and assign the content to data
const data = fs.readFileSync(filePath, 'utf-8');

// Parse the JSON string into an object
const users_reg_data = JSON.parse(data);

// Output the object to the console
console.log(users_reg_data);
