
const press = document.querySelector("#clickme");

press.addEventListener('click', swapText);

function swapText() {

document.getElementById("textChange").innerHTML = "This text is magic!";
console.log("this text is Magic!")
}

