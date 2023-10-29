function displayPurchase() {
    var quantityInput = document.getElementById("quantity");
    var quantityMessage = document.getElementById("qty_textbox_message");
    var quantity = quantityInput.value;

    if (isPositiveInteger(quantity)) {
        var message = "Thank you for ordering " + quantity + " things!";
        document.body.innerHTML = message;
    } else {
        quantityMessage.innerHTML = "Invalid input. Please enter a non-negative integer.";
    }
}

function isPositiveInteger(value) {
    // Regular expression to check if the input is a non-negative integer
    var pattern = /^\d+$/;
    return pattern.test(value) && parseInt(value, 10) >= 0;
}
