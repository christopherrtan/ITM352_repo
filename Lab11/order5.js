function validateAndSubmit() {
    var quantityInput = document.getElementById("quantity").value;
    var errorMessage = document.getElementById("error_message");

    if (isNonNegativeInteger(quantityInput)) {
        errorMessage.innerHTML = ""; // Clear error message if input is valid

        // Redirect to display_purchase.html with quantity in the URL
        window.location.href = `display_purchase.html?qty_textbox=${quantityInput}`;
    } else {
        errorMessage.innerHTML = "Invalid input. Please enter a non-negative integer.";
    }
}

function isNonNegativeInteger(value) {
    // Regular expression to check if the input is a non-negative integer
    var pattern = /^\d+$/;
    return pattern.test(value) && parseInt(value, 10) >= 0;
}
