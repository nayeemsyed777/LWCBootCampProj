//debugger;
function beforesubmit() {
    let inputDate = document.querySelector('.inputdate').value;
    let outputDateField = document.querySelector('.outputdate');
    console.log('Input Date:', inputDate);// string date to en_US format

    let formattedDate = new Date(inputDate).toLocaleDateString('en-US');
    outputDateField.value = formattedDate;

}