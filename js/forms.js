//Capture input
function captureInput() {
    var input = document.querySelector("#input");
    return input.value;
}

//Show output
function output(encryptedString){
    document.querySelector("#output").value=encryptedString;
}