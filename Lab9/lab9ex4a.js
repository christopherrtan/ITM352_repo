  //function for isNonNegInt
  function nonNegativeInt(q){
    let errors = []; // create empty array
    if(Number(q) !== q) errors.push('Not a number!'); 
    if(q < 0) errors.push('Negative value!'); 
    if(parseInt(q) !== q) errors.push('Not an integer!'); 
    return errors.length === 0; 
  };
  
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
    console.log(piece + " is an acceptable non-negative integer: " + isNonNegativeInt(piece));
  }
  