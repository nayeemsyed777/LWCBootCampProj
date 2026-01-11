//debugger;

let captchachecked = false;
function beforesubmit(event){
    if(captchachecked){

            let inputDate = document.querySelector('.inputdate').value;
    let outputDateField = document.querySelector('.outputdate');
    console.log('Input Date:', inputDate);// string date to en_US format

    let formattedDate = new Date(inputDate).toLocaleDateString('en-US');
    outputDateField.value = formattedDate;
    }else {
        alert('Please check the reCAPTCHA box to submit the lead.');
        // to stop the submition of the form
        event.preventDefault();
    }
}


 function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
 } } setInterval(timestamp, 500);

 function captchasuccess(){
    captchachecked = true;
}