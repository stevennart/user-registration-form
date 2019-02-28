 
 /* -------------- FORM VALIDATION -------------------------  */

 function formValidation () {  
 
    if (!firstNameValidation()) {
        document.querySelector("#firstNameRef").focus(); 
        return false; 
    }
    if (!lastNameValidation()) {
        document.querySelector("#lastNameRef").focus(); 
        return false; 
    }
    if (!ageValidation()) {
        document.querySelector("#ageRef").focus(); 
        return false; 
    }
    if (!usernameValidation()) {
        document.querySelector("#usernameRef").focus(); 
        return false; 
    }
    if (!passwordValidation()) {
        document.querySelector("#passRef").focus();
        return false; 
    }
    if (!rePasswordValidation()) {
        document.querySelector("#repassRef").focus();
        return false; 
    }
    if (!educationLevelValidation()) {
        document.querySelector("#eduLevelRef").focus(); 
        return false; 
    }
    if (!emailValidation()) {
        document.querySelector("#emailRef").focus();  
        return false; 
    }

    // alert pops up if the form submission is true.  
    alert("Form Submission: Successful!");
    return true;

}

/* --------------ERROR ALERT CLEAR -------------------------  */

function clearErrorMessageAlert () {

    // reference to the errorMessage ID attribute in the div tag. 
    var errorMessageAlert = document.querySelector("#errorMessageAlert");
    errorMessageAlert.innerHTML = "";


}

/* --------------FIRST NAME VALIDATION -------------------------  */

function firstNameValidation () {

    clearErrorMessageAlert();       

    firstNameInput = document.querySelector("#firstNameRef").value.trim();

    // if the field is left empty, it will print error message. 
    if (firstNameInput.length == 0) {

        fnameErrorMessage = document.createElement("p");
        fnameErrorMessage.appendChild(document.createTextNode("**First Name field is left empty**"));
        document.querySelector("#errorMessageAlert").appendChild(fnameErrorMessage);

        // highlights the input field to catch the user's attention of incorrect input. 
        document.querySelector("#firstNameRef").style.backgroundColor = "#fa8072";
        document.querySelector("#firstNameRef").style.borderColor = "blue";

        return false;
    }
    
     // checks if the first character of the name is a capital, if it isnt it will print error message.
    if (firstNameInput[0] < "A" || firstNameInput[0] > "Z") {
        
        fnameErrorMessage = document.createElement("p");
        fnameErrorMessage.appendChild(document.createTextNode("**First Name must start with capital letter, alphabets only, and lowercase after first letter.**"));
        document.querySelector("#errorMessageAlert").appendChild(fnameErrorMessage);
       
        var fnameErrorShowed = true;

        // highlights the input field to catch the user's attention of incorrect input. 
        document.querySelector("#firstNameRef").style.backgroundColor = "#fa8072";
        document.querySelector("#firstNameRef").style.borderColor = "blue";

        return false;
    }
    
    // if the first capital error isn't shown, it will check for lowercase and alphabet only after 1st character. 
    if (!fnameErrorShowed) { // this won't execute if the 1st letter is a capital and error will appear. 
        
        var noCapsAndOnlyAlphabetAfterFirstChar = true; 
        
        for (var i = 1; i < firstNameInput.length; i++) { // i starts at 2nd char
           
            if (firstNameInput[i] < "a" || firstNameInput[i] > "z") {
                
                noCapsAndOnlyAlphabetAfterFirstChar = false; 
            }    
        }
        
        // shows error message after the check.  
        if (!noCapsAndOnlyAlphabetAfterFirstChar) { 
            
            fnameErrorMessage = document.createElement("p");
            fnameErrorMessage.appendChild(document.createTextNode("**First Name must start with capital letter, alphabets only, and lowercase after first letter.**"));
            document.querySelector("#errorMessageAlert").appendChild(fnameErrorMessage);
            // highlights the input field to catch the user's attention of incorrect input. 
            document.querySelector("#firstNameRef").style.backgroundColor = "#fa8072";
            document.querySelector("#firstNameRef").style.borderColor = "blue";
            return false;
        }
        

        // clears the highlight if input is correct.   
        document.querySelector("#firstNameRef").style.borderColor = "";
        document.querySelector("#firstNameRef").style.backgroundColor = "";
        return true; // returns true if everything passes the validation. 
    }

}

/* --------------LAST NAME VALIDATION -------------------------  */

function lastNameValidation () {

    clearErrorMessageAlert();

    lastNameInput = document.querySelector("#lastNameRef").value.trim();

    if (lastNameInput.length == 0) {

        lnameErrorMessage = document.createElement("p");
        lnameErrorMessage.appendChild(document.createTextNode("**Last Name field is left empty**"));
        document.querySelector("#errorMessageAlert").appendChild(lnameErrorMessage);


        // highlights the input field to catch the user's attention of incorrect input. 
        document.querySelector("#lastNameRef").style.backgroundColor = "#fa8072";
        document.querySelector("#lastNameRef").style.borderColor = "blue";

        return false;
    }

     // checks if the first character of the name is a capital, if it isnt it will print error message.
     if (lastNameInput[0] < "A" || lastNameInput[0] > "Z") {
        
        lnameErrorMessage = document.createElement("p");
        lnameErrorMessage.appendChild(document.createTextNode("**Last Name must start with capital letter, alphabets only, and lowercase after first letter.**"));
        document.querySelector("#errorMessageAlert").appendChild(lnameErrorMessage);
       
        var lnameErrorShowed = true;

        // highlights the input field to catch the user's attention of incorrect input. 
        document.querySelector("#lastNameRef").style.backgroundColor = "#fa8072";
        document.querySelector("#lastNameRef").style.borderColor = "blue";
       
        return false;
    }
    
    // if the first capital error isn't shown, it will check for lowercase and alphabet only after 1st character. 
    if (!lnameErrorShowed) { // this won't execute if the 1st letter is a capital and error will appear. 
        
        var noCapsAndOnlyAlphabetAfterFirstChar = true; 
        
        for (var i = 1; i < lastNameInput.length; i++) { // i starts at 2nd char instead of 1st char. 
           
            if (lastNameInput[i] < "a" || lastNameInput[i] > "z") { // if each char of the name is out of the 97 - 122 range ascii code it will set the var to false. 
                
                noCapsAndOnlyAlphabetAfterFirstChar = false; 
            }    
        }
        
        // shows error message after the check.  
        if (!noCapsAndOnlyAlphabetAfterFirstChar) { 
            
            lnameErrorMessage = document.createElement("p");
            lnameErrorMessage.appendChild(document.createTextNode("**Last Name must start with capital letter, alphabets only, and lowercase after first letter.**"));
            document.querySelector("#errorMessageAlert").appendChild(lnameErrorMessage);
            

            // highlights the input field to catch the user's attention of incorrect input. 
            document.querySelector("#lastNameRef").style.backgroundColor = "#fa8072";
            document.querySelector("#lastNameRef").style.borderColor = "blue";
            return false;
        }
        

         // clears the highlight if input is correct.   
         document.querySelector("#lastNameRef").style.borderColor = "";
         document.querySelector("#lastNameRef").style.backgroundColor = "";
        return true; // returns true if everything passes the validation. 
    }

}

/* --------------AGE  VALIDATION -------------------------  */

function ageValidation () {

    clearErrorMessageAlert();

    ageInput = document.querySelector("#ageRef").value;

    if (ageInput == 0) {

        ageErrorMessage = document.createElement("p");
        ageErrorMessage.appendChild(document.createTextNode("**Age field is left empty**"));
        document.querySelector("#errorMessageAlert").appendChild(ageErrorMessage);


         // highlights the input field to catch the user's attention of incorrect input. 
         document.querySelector("#ageRef").style.backgroundColor = "#fa8072";
         document.querySelector("#ageRef").style.borderColor = "blue";
        return false;
    }

    if (ageInput < 18 || ageInput > 60) { 

        ageErrorMessage = document.createElement("p");
        ageErrorMessage.appendChild(document.createTextNode("**Age is out of the specified range**"));
        document.querySelector("#errorMessageAlert").appendChild(ageErrorMessage);


         // highlights the input field to catch the user's attention of incorrect input. 
         document.querySelector("#ageRef").style.backgroundColor = "#fa8072";
         document.querySelector("#ageRef").style.borderColor = "blue";
        return false;
    }
    else {

          // clears the highlight if input is correct.   
          document.querySelector("#ageRef").style.borderColor = ""; 
          document.querySelector("#ageRef").style.backgroundColor = "";
        return true;
    }
}

/* --------------USERNAME VALIDATION -------------------------  */

function usernameValidation () {

    clearErrorMessageAlert();

    var usernameInput = document.querySelector("#usernameRef").value.trim();
    
    //usernameInput.toUpperCase(); 
    // set to upper so it can be compared to capital letters ASCII Code. 

    if (usernameInput.length == 0) { // if the length of the string is = to nothing it will create an err msg.
       
        var usernameErrorMessage = document.createElement("p");
        usernameErrorMessage.appendChild(document.createTextNode("**Username field is left empty**"));
        document.querySelector("#errorMessageAlert").appendChild(usernameErrorMessage);
      
        // highlights the input field to catch the user's attention of incorrect input. 
        document.querySelector("#usernameRef").style.backgroundColor = "#fa8072";
        document.querySelector("#usernameRef").style.borderColor = "blue";

        return false;
    }

    if (usernameInput[0].toUpperCase() < "A" || usernameInput[0].toUpperCase() > "Z" || usernameInput.length < 6) {
        // 1st letter has to be a letter. And length of username has to be at least 6 length.
        var usernameErrorMessage = document.createElement("p");
        usernameErrorMessage.appendChild(document.createTextNode("**Username must start with a letter, must have at least 6 characters**")); 
        document.querySelector("#errorMessageAlert").appendChild(usernameErrorMessage);
       
        // highlights the input field to catch the user's attention of incorrect input. 
        document.querySelector("#usernameRef").style.backgroundColor = "#fa8072";
        document.querySelector("#usernameRef").style.borderColor = "blue";

        return false;
    }
    else {
        // clears the highlight if input is correct.   
        document.querySelector("#usernameRef").style.borderColor = "";
        document.querySelector("#usernameRef").style.backgroundColor = "";
        return true;
    }
    
}

/* --------------PASSWORD VALIDATION -------------------------  */

function passwordValidation () {

    clearErrorMessageAlert();

    var passwordInput = document.querySelector("#passRef").value.trim();

    if (passwordInput.length == 0) {
        
        var passwordErrorMessage = document.createElement("p");
        passwordErrorMessage.appendChild(document.createTextNode("**Password field is left empty**"));
        document.querySelector("#errorMessageAlert").appendChild(passwordErrorMessage);


         // highlights the input field to catch the user's attention of incorrect input. 
         document.querySelector("#passRef").style.backgroundColor = "#fa8072";
         document.querySelector("#passRef").style.borderColor = "blue";
        return false;
    }

    // var pwdLengthErrorShowed = false;

    if (passwordInput.length < 6) {

        var passwordErrorMessage = document.createElement("p");
        passwordErrorMessage.appendChild(document.createTextNode("**Password must be 6 characters long, must start with a character, must have at least 1 digit and 1 uppercase.**"));
        document.querySelector("#errorMessageAlert").appendChild(passwordErrorMessage);

        var pwdLengthErrorShowed = true;
        // pwdLengthErrorShowed = true;

         // highlights the input field to catch the user's attention of incorrect input. 
         document.querySelector("#passRef").style.backgroundColor = "#fa8072";
         document.querySelector("#passRef").style.borderColor = "blue";

        return false;
    }
    if (!pwdLengthErrorShowed) { // if (pwdLengthErrorShowed) {}
    var hasDigit = false;
    var hasUpperCase = false;

    for (var i = 0; i < passwordInput.length; i++) {
        if (isNaN(passwordInput[i]) == false) {
            hasDigit = true;
        }
        if (passwordInput[i] >= "A" && passwordInput[i] <= "Z") {
            hasUpperCase = true;
        }
    }

    if (!hasDigit || !hasUpperCase) {

        var passwordErrorMessage = document.createElement("p");
        passwordErrorMessage.appendChild(document.createTextNode("**Password must be 6 characters long, must start with a character, must have at least 1 digit and 1 uppercase.**"));
        document.querySelector("#errorMessageAlert").appendChild(passwordErrorMessage);


         // highlights the input field to catch the user's attention of incorrect input. 
         document.querySelector("#passRef").style.backgroundColor = "#fa8072";
         document.querySelector("#passRef").style.borderColor = "blue";
        return false;
    }
    else {

           // clears the highlight if input is correct.   
           document.querySelector("#passRef").style.borderColor = "";
           document.querySelector("#passRef").style.backgroundColor = "";
        return true;
    }
    


    } 

}

/* --------------PASSWORD MATCH VALIDATION -------------------------  */

function rePasswordValidation () {

    clearErrorMessageAlert();

    var rePasswordInput = document.querySelector("#repassRef").value.trim();

    if (rePasswordInput.length == 0) {
        
        var rePasswordErrorMessage = document.createElement("p");
        rePasswordErrorMessage.appendChild(document.createTextNode("**Password field is left empty**"));
        document.querySelector("#errorMessageAlert").appendChild(rePasswordErrorMessage);
                 
         // highlights the input field to catch the user's attention of incorrect input. 
         document.querySelector("#repassRef").style.backgroundColor = "#fa8072";
         document.querySelector("#repassRef").style.borderColor = "blue";
        return false;
    }

    var firstPassword = document.querySelector("#passRef").value.trim();

    if (rePasswordInput != firstPassword) {

        var rePasswordErrorMessage = document.createElement("p");
        rePasswordErrorMessage.appendChild(document.createTextNode("**Passwords do not match**"));
        document.querySelector("#errorMessageAlert").appendChild(rePasswordErrorMessage);
              

         // highlights the input field to catch the user's attention of incorrect input. 
         document.querySelector("#repassRef").style.backgroundColor = "#fa8072";
         document.querySelector("#repassRef").style.borderColor = "blue";
        return false;
    }
    else {

           // clears the highlight if input is correct.   
           document.querySelector("#repassRef").style.borderColor = "";
           document.querySelector("#repassRef").style.backgroundColor = "";
        return true;
    }


}

/* --------------EDUCATION LEVEL VALIDATION -------------------------  */

function educationLevelValidation () {

    clearErrorMessageAlert();

    educationLevelSelect = document.querySelector("#eduLevelRef").value;

    if (educationLevelSelect == "") {  // if the selected option is the --select-- option it will create an error message and display it to the user. 

        educationLevelErrorMessage = document.createElement("p");
        educationLevelErrorMessage.appendChild(document.createTextNode("**Choose one of the options in the drop down menu**"));
        document.querySelector("#errorMessageAlert").appendChild(educationLevelErrorMessage);


         // highlights the input field to catch the user's attention of incorrect input. 
         document.querySelector("#eduLevelRef").style.backgroundColor = "#fa8072";
         document.querySelector("#eduLevelRef").style.borderColor = "blue";
        return false;
    }


     // clears the highlight if input is correct.   
     document.querySelector("#eduLevelRef").style.borderColor = "";
     document.querySelector("#eduLevelRef").style.backgroundColor = "";
    return true; 

}

/* --------------EMAIL VALIDATION -------------------------  */

function emailValidation () {

    clearErrorMessageAlert();

    emailInput = document.querySelector("#emailRef").value.trim();

    if (emailInput.length == 0) {

        emailErrorMessage = document.createElement("p");
        emailErrorMessage.appendChild(document.createTextNode("**Email field is left empty**"));
        document.querySelector("#errorMessageAlert").appendChild(emailErrorMessage);


         // highlights the input field to catch the user's attention of incorrect input. 
         document.querySelector("#emailRef").style.backgroundColor = "#fa8072";
         document.querySelector("#emailRef").style.borderColor = "blue";    
        return false;
    }

    // used default HTML5 input email type validation. no implementation of JS email validation. 
    
    
      // clears the highlight if input is correct.   
      document.querySelector("#emailRef").style.borderColor = "";
      document.querySelector("#emailRef").style.backgroundColor = "";
    return true; 

}


    





/* function educationStatusValidation () {
    clearErrorMessageAlert();

    educationStatusChecked = document.querySelector("#eduStatusRef").value;

    switch (educationStatusChecked) {
        case 'Graduated':
            return true;
        case 'Currently Enrolled':
            return true;
        case 'Did Not Graduate':
            return true;
        default: 
            return false;
    }
} */
