//Link buttons
var buttonEncrypt = document.querySelector("#btn-encrypt");
var buttonDecrypt = document.querySelector("#btn-decrypt");
var buttonCopy = document.querySelector("#btn-copy");

//Encrypte button
buttonEncrypt.addEventListener("click", function (event) {
    event.preventDefault();
    var input = captureInput();

    //Validation and error message
    var error = validateString(input);
    if (error) {
        errorMsg();
        return;
    }
    var errorReset = document.querySelector("#error");
    errorReset.innerHTML = "";

    //Calling encrypte function
    var encryptedString = encrypt(input);

    //Output encrypted word
    output(encryptedString);

});

//Decrypte button
buttonDecrypt.addEventListener("click", function (event) {
    event.preventDefault();
    var input = captureInput();

    //Validation and error message
    var error = validateString(input);
    if (error) {
        errorMsg();
        return;
    }
    var errorReset = document.querySelector("#error");
    errorReset.innerHTML = "";

    //Calling decrypte function
    var decryptedString = decrypt(input);

    //Output decrypted word
    output(decryptedString);

});

//Copy button
buttonCopy.addEventListener("click", function (event) {
    event.preventDefault();

    //Calling copy function
    copy();
});