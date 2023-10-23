function nonNegativeInt(q) {
  let errors = []; //creates empty array to collect errors
  if(Number(q) !== q) errors.push('Not a number!'); //checks if string is number
  if(q < 0) errors.push('Negative value!'); //checks if negative
  if(parseInt(q) !== q) errors.push('Not an integer!'); //checks if it's an integer

  if (returnErrors) {
    return errors;
  } 
  else {
    return returnErrors ? errors : (errors.length == 0);
  }
}

//define attributes
let attributes = "Christopher;21;Accounting & MIS";

//split the attribute into an array
let attributesArray = attributes.split(";");

//extract name, age, and major
let name = attributesArray[0];
let age = attributesArray[1];
let major = attributesArray[2];

//print attributes
console.log("Name: " + attributesArray[0]);
console.log("Age: " + attributesArray[1]);
console.log("Major: " + attributesArray[2]);

//testing function using the pieces array
let pieces = ["Christopher", "21", "Accounting & MIS"];

for (let piece of pieces) {
  let errors = nonNegativeInt(piece, true);
  let isValid = errors.length === 0;

  console.log()
    piece + " is a valid non-negative integer: " + (isValid ? "true" : "false") + (errors.length > 0 ? " - " + errors.join(", ") : "");
};