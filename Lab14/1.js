const fs = require('fs');

// Define the file path
const filePath = 'user_data.json';

// Read and parse the JSON file
const rawdata = fs.readFileSync(filePath);
const users_reg_data = JSON.parse(rawdata);

// Output the object to the console
console.log(users_reg_data);

// Get the password information for the username 'kazman'
const kazmanPassword = users_reg_data.kazman.password;
console.log(`Password for kazman: ${kazmanPassword}`);
