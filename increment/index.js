const myIncrement = document.getElementById("myIncrement");
const myReset = document.getElementById("myReset");
const myDecrement = document.getElementById("myDecrement");
const myP0 = document.getElementById("myP0");

let count = 0;

myIncrement.onclick = function() {
    count++;
    myP0.textContent = count;   
}

myDecrement.onclick = function() {
    count--;
    myP0.textContent = count;  
}

myReset.onclick = function() {
    count = 0;
    myP0.textContent = count;  
}
