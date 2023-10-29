let params = (new URL(document.location)).searchParams;

if (params.has("qty_textbox")) {
    var quantity = params.get("qty_textbox");
    if (isNonNegativeInteger(quantity)) {
        document.body.innerHTML = "Thank you for ordering " + quantity + " things!";
    } else {
        document.body.innerHTML = "Invalid quantity. Press the back button and try again.";
    }
}
