//Define attributes
let attributes = "Christopher;21;Accounting & MIS";

//assigning the splitting value as semi-colon
let attributesArray = attributes.split(";");

//Assigning name, age, major to index in array
let name = attributesArray[0];
let age = attributesArray[1];
let major = attributesArray[2];

//Print attributes
console.log("Name: " + attributesArray[0]);
console.log("Age: " + attributesArray[1]);
console.log("Major: " + attributesArray[2]);