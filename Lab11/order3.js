window.onload = function() {
    var theTextBox = document.forms["qty_form"]["qty_textbox"];
    var quantityMessage = document.getElementById("qty_textbox_message");

    theTextBox.onkeyup = function() {
        if (isNonNegativeInteger(theTextBox.value)) {
            quantityMessage.innerHTML = ""; // Clear error message if input is valid
        } else {
            quantityMessage.innerHTML = "Invalid input. Please enter a non-negative integer.";
        }
    };
};

function isNonNegativeInteger(value) {
    // Regular expression to check if the input is a non-negative integer
    var pattern = /^\d+$/;
    return pattern.test(value) && parseInt(value, 10) >= 0;
}
