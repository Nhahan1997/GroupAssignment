import {validateInput} from './inputValidation.js';

function compute(){
    var inputText = document.getElementById("inputKWIC").value;
    var lines = validateInput(inputText);
    console.log(lines);

}