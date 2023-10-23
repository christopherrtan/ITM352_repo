function nonNegativeInt(q, returnErrors = false){
    let errors = []; //creates empty array to collect errors
  if(Number(q) !== q) errors.push('Not a number!'); //checks if string is number
  if(q < 0) errors.push('Negative value!'); //checks if negative
  if(parseInt(q) !== q) errors.push('Not an integer!'); //checks if it's an integer
    if (returnErrors) {
        return errors;
    } else {
        return returnErrors ? errors : (errors.length === 0); // Return true if there are no errors
    }
};

//Define attributes
let attributes = "Christopher;21;Accounting & MIS";

//Split attributes into array
let attributesArray = attributes.split(";");

//Extract name, age, and major
let name = attributesArray[0];
let age = attributesArray[1];
let major = attributesArray[2];

//Print attributes
console.log("Name: " + attributesArray[0]);
console.log("Age: " + attributesArray[1]);
console.log("Major: " + attributesArray[2]);

//Testing function using the pieces array
let pieces = ["Christopher", "21", "Accounting & MIS"];

pieces.forEach((item, index) => {
    console.log(`part ${index} is ${(nonNegativeInt(item) ? 'a' : 'not a')} quantity`);
});

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        picture_data = "image data:XOXOXO";
        callback(picture_data); // 
    }, 3* 1000);
    
};

function process(picture) {
    console.log(`Processing ${picture}`);
};

let url = 'https://www.example.com/a_picture.jpg';
download(url, process);
