const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const celcius = document.getElementById("celcius")
const result = document.getElementById("result")

let temp;


function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "ºf"
    }
    else if(celcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "ºC"
    }
    else{
      result.textContent = "Select a unit" 
    }
}

