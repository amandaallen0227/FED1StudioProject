//(CLIENT-SIDE) FORM VALIDATION

function validateForm(event) {

    //we want to gather all HTML controls into a collection instead of creating seperate variables for each

    let controls = document.getElementsByClassName('form-control');
    console.log(controls);

    //spans
    let validationMessages = document.getElementsByClassName('invalid');
    console.log(validationMessages);

    //Regular expression object for email
    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    //Regular expression object for name
    let rxpName = new RegExp(/^[A-Z]+$/i);

    //Check the length of ALL controls - if any have NOT been filled out by the user,stop the form
    //from submitting at all
    if (controls['name'].value.length == 0 || controls['email'].value.length == 0 ||
        controls['subject'].value.length == 0 || controls['message'].value.length == 0 ||
        !rxpEmail.test(controls['email'].value) || !rxpName.test(controls['name'].value)) {

        //Stop the form from submitting "prevent the default event from happening"
        event.preventDefault();

        //Check individual controls and display error messages if needed

        //--------Name Validation--------------

        //check the length
        if (controls['name'].value.length == 0) {
            validationMessages['rfvName'].textContent = "*Name is required";

        }
        else {
            validationMessages['rfvName'].textContent = "";
        }

        //Regex - "if this test comes back NOT true"
        if (!rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['rfvName'].textContent = "* Name must only include alphabetical characters";
        }

        if (rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['rfvName'].textContent = "";
        }


        //----------Email Validation----------

        //length
        if (controls['email'].value.length == 0) {
            validationMessages['rfvEmail'].textContent = "* Email is required";
        }
        else {
            validationMessages['rfvEmail'].textContent = "";
        }
        //regex
        if (!rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "* Please enter a valid email address.";
        }

        if (rxpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "";
        }



        //----------Subjection Validation-------------

        //length
        if (controls['subject'].value.length == 0) {
            validationMessages['rfvSubject'].textContent = "* Subject is required";
        }
        else {
            validationMessages['rfvSubject'].textContent = "";
        }


        //----------Message Validation-----------

        //length
        if (controls['message'].value.length == 0) {
            validationMessages['rfvMessage'].textContent = "* Message is required";
        }
        else {
            validationMessages['rfvMessage'].textContent = "";
        }

    }

}