const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;

function convert(){
    
    temp = Number(textBox.value);

    if(toCelcius.checked){
        temp = (temp-32) * (5/9) ;
        result.textContent = temp;
    }
    else if(toFahrenheit.checked){
        temp = temp * (9/5) + 32 ;
        result.textContent = temp;
    }
    else{
        result.textContent = "Please select a unit!";
    }
}