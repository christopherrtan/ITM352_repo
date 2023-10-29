function validateQuantity() {
    var quantityInput = document.getElementById("quantity");
    var quantityMessage = document.getElementById("qty_textbox_message");
    var quantity = quantityInput.value;

    if (isPositiveInteger(quantity)) {
        quantityMessage.innerHTML = ""; // Clear error message if input is valid
    } else {
        quantityMessage.innerHTML = "Invalid input. Please enter a positive integer.";
    }
}

function isPositiveInteger(value) {
    // Regular expression to check if the input is a positive integer
    var pattern = /^[1-9]\d*$/;
    return pattern.test(value);
}
