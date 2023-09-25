
//declaring variables
let age = 21; //current age
let fav_num = 47; //favorite number
let day_of_birth = 10; //day born
let month_of_birth = 5; //birth month

/* do two calculations with same vairables using different precedence to show how precedence works */

let calculations1 = age + fav_num / day_of_birth * month_of_birth;
let calculations2 = (age + fav_num) / day_of_birth * month_of_birth;

//send results of calculations to the web page
document.getElementById("result1").innerHTML = calculations1;

document.getElementById("result2").innerHTML = calculations2;