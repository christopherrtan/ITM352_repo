function validateAndSubmit() {
    var quantityInput = document.getElementById("quantity").value;
    var errorMessage = document.getElementById("error_message");

    if (isNonNegativeInteger(quantityInput)) {
        errorMessage.innerHTML = ""; // Clear error message if input is valid

        // Redirect to display_purchase.html (Part 5)
        // window.location.href = "display_purchase.html?qty_textbox=" + quantityInput;
        
        // For Part 4, display message on the same page
        var successMessage = "Thank you for ordering " + quantityInput + " things!";
        errorMessage.innerHTML = successMessage;
    } else {
        errorMessage.innerHTML = "Invalid input. Please enter a non-negative integer.";
    }
}

function isNonNegativeInteger(value) {
    // Regular expression to check if the input is a non-negative integer
    var pattern = /^\d+$/;
    return pattern.test(value) && parseInt(value, 10) >= 0;
}
