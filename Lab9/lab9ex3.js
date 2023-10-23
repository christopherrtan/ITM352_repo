//assign attributes to string
let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";

//Split attributes into an array
let pieces = attributes.split(";");

//use for loop to determine data types of each substring in array
for (let part of pieces) {
    console.log(`Part: ${part}, Data Type: ${typeof part}`);
}

let invertedString = pieces.join(">");