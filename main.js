const input = document.getElementById('input')
const convertButton = document.getElementById('convert-button')
const output = document.getElementById('output')
const error = document.getElementById('error')

convertButton.addEventListener('click',updateValue)

function updateValue() {
    let inputValue = input.value
    input.value = ""  
    if (checkError(inputValue) !== ""){
        output.innerHTML = ""
        error.innerHTML =  checkError(inputValue)
    } else{
        error.innerHTML = ""
        output.innerHTML = convertDecimal(inputValue)
    }
}

function checkError(i) {
    let err = ""
    if (i===""){
        err = "Input empty"
    } else if(!(/^[01]{1,8}$/.test(i))){
        err = "Input must constraint less than 8 digits"
    } else if(!(/^[01]+$/.test(i))){
        err = "Invalid input! Only 0 & 1 digit"
    }
    return err
}

function convertDecimal(i) {
    return parseInt(i,2)
}