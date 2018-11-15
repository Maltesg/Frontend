

let tempNum = "";
let operand = "";
let numbers = [];


function onClick(e) {
    let button =  e.target;
    let btnContent = button.textContent;
    if (parseInt(btnContent) >= 0 && parseInt(btnContent) <= 9) {
        
        tempNum += btnContent;
        
    }
    
    if (button.textContent === "+") {
        numbers.push(tempNum);
        
    }
    console.log(tempNum);
    tempNum = [];
}
function buttonLoop() {
    let myButtons = document.querySelectorAll('button');
    for (let i = 0; i < myButtons.length; i++) {
        let button = myButtons[i];
        button.addEventListener('click', onClick);
    
    }
}
buttonLoop();

