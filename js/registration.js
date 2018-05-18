function formValidation() {
    clearErrors();
    return validateForm();
}

function clearErrors() {
    document.querySelector("#errorName").innerHTML = "";
    document.getElementById("name").style.border = "";

    document.querySelector("#errorpassw").innerHTML = "";
    document.getElementById("passw").style.border = "";

    document.querySelector("#errorcpassw").innerHTML = "";
    document.getElementById("confPassw").style.border = "";

    document.querySelector("#errorcity").innerHTML = "";
    document.getElementById("city").style.border = "";


}

function showErrors(message, type) {
    if (type == 'N') {
        document.querySelector("#errorName").innerHTML += message;
        document.getElementById("name").style.border = "2px solid red";
        document.getElementById("name").focus();
    }
    if (type == 'P') {

        document.querySelector("#errorpassw").innerHTML += message;
        document.getElementById("passw").style.border = "2px solid red";
        document.getElementById("passw").focus();

    }
    if (type == 'CP') {

        document.querySelector("#errorcpassw").innerHTML += message;
        document.getElementById("confPassw").style.border = "2px solid red";
        document.getElementById("confPassw").focus();

    }
    if (type == 'C') {

        document.querySelector("#errorcity").innerHTML += message;
        document.getElementById("city").focus();
        document.getElementById("city").style.border = "2px solid red";

    }

}

function validateForm() {

    var nameValid = nameValidation();
    var passwValid = passwordValidation();

    var cpasswValid = cpasswordValidation(passwValid);

    var cityValid = cityValidation();
   
    if (nameValid && passwValid && cpasswValid && cityValid) {
        return true;
    } else {
        return false;
    }
}  // function

function cityValidation() {
    var allLetters = true;

    var elem = document.querySelector("#city");
    var inputValue = elem.value.trim();

    inputValue = inputValue.toUpperCase();
    for (var i = 0; i < inputValue.length; i++) {

        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") {
            allLetters = false;
        }
    }

    if (!allLetters) {
        showErrors("Passwords must match", 'C');
        return false;
    }

    return true;

}


function nameValidation() {
    //Name validation
    var firstAlpha = true;
    var elem = document.querySelector("#name");
    var inputValue = elem.value.trim();

    if (inputValue.length < 6) {      /* check the length */
        showErrors("Name must have at least 6 characters and starts with a letter", 'N');
        return false;
    }

    inputValue = inputValue.toUpperCase();

    if (inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z") {
        firstAlpha = false;
    }


    if (!firstAlpha) {
        showErrors("Name must have at least 6 characters and starts with a letter", 'N');
        return false;
    }

    return true;

}

function passwordValidation(){
    // Password validation
    var firstAlpha = true;
    var upperCase = false;
    var digit = false;
    var elem = document.querySelector("#passw");
    var inputValue = elem.value.trim();

    if (inputValue.length < 8) {      /* check the length */
        showErrors("The password must have at least 8 characters.\n", 'P');
        return false;
    }

    for (var i = 0; i < inputValue.length; i++) {
        // check all character are letters
        if (inputValue.charAt(i) > "A" && inputValue.charAt(i) < "Z")
        {
            upperCase = true;
        }

        if (inputValue.charAt(i) > 0 && inputValue.charAt(i) < 9) {

            digit = true;
        }
    }

    inputValue = inputValue.toUpperCase();
    if (inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z") {
        firstAlpha = false;
    }


    if (!upperCase || !digit || !firstAlpha) {
        showErrors("Password must start with a letter, have at least 1 uppercase letter and 1 digit", 'P');
        
        return false;

    } else {

        return true;
    }

}


function cpasswordValidation(passwValid) {
    // confirm Password validation
    if (passwValid) {
        var elem_passw2 = document.querySelector("#confPassw");
        var inputValue2 = elem_passw2.value.trim();

        var elem_passw1 = document.querySelector("#passw");
        var inputValue1 = elem_passw1.value.trim();

        if (inputValue2 === inputValue1) {
            return true;
        } 
    }

    showErrors("Passwords must match.\n", 'CP');
    return false;

}