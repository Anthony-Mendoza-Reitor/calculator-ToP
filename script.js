/*  This is part of the Calculator Project
    Author: Anthony Mendoza Reitor
    Date: Septemebr 15, 2024                */

let a = 0;  b = 0; c = 0; operator = '+'; counter = 0; power = "On"// Declaration of variables for display

//The 4 main calculator operations
function add(a, b){
    c = a + b;
    return (c);
}
function substract(a, b){
    c = a - b;
    return (c);
}
function multiply(a, b){
    c = a * b;
    return (c);
}
function divide(a, b){
    c = a / b;
    return (c);
}

// This will take user input for a, b, and opertorator
function operate(a, b, operator){
    if (operator === '+'){
        add(a, b);
        return(c);
    }
    else if (operator === '−'){
        substract(a, b);
        return(c);
    }
    else if (operator === '×'){
        multiply(a, b);
        return(c);
    }
    else if (operator === '÷'){
        divide(a, b);
        return(c);
    }
}

//This is the event listener for the buttons
const selectionButtons = document.querySelectorAll("button");
selectionButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        let clickButton = (button.id)
        if ((clickButton >= 0) && (counter >= 0) && (power === "On")){
            if (counter === 0){
                a = clickButton;
            } else{
                a += clickButton;
            }
            document.getElementsByClassName("upperScreen")[0].innerHTML = a;
            document.getElementsByClassName("AC")[0].innerHTML = "C";
            counter ++;
            console.log(a);
        }
        else if((typeof(clickButton)  === "string") && (counter > 0) && (clickButton !== "AC") && (clickButton !== "Off") && (clickButton !== "On") && (clickButton !== "=")){
            operator = clickButton;
            document.getElementsByClassName("upperScreen")[0].innerHTML = a + operator;
            counter = -1;
            console.log(operator);
        }
        else if((clickButton >= 0) && (counter < 0)){
            if (counter === -1){
                b = clickButton;
            }else{
                b += clickButton;
            }
            document.getElementsByClassName("upperScreen")[0].innerHTML = a + operator + b;
            counter --;
            console.log(b)
        }
        else if((clickButton === '=') &&(counter < 0) ){
            a = parseInt(a); b = parseInt(b);
            operate(a, b, operator);
            document.getElementsByClassName("lowerScreen")[0].innerHTML = c;
            counter = "done";
            console.log(c);
        }
        else if(clickButton === "AC"){
            document.getElementsByClassName("AC")[0].innerHTML = "AC";
            a = 0; b = 0; operator = '+'; c = 0; counter = 0;
            document.getElementsByClassName("upperScreen")[0].innerHTML ="";
            document.getElementsByClassName("lowerScreen")[0].innerHTML ="";
        }
        else if((clickButton === "Off") && (power === "On")){
            document.getElementsByClassName("AC")[0].innerHTML = "AC";
            document.getElementsByClassName("upperScreen")[0].innerHTML ="Shutting down..";
            var delayTime = 1000;
            setTimeout(function(){
                document.getElementsByClassName("upperScreen")[0].innerHTML ="";
            }, delayTime);
            document.getElementsByClassName("lowerScreen")[0].innerHTML ="";
            a = 0; b = 0; operator = '+'; c = 0; counter = 0;
            document.getElementsByClassName("Screen")[0].style.backgroundColor ="rgb(118, 122, 126)";
            power = "Off";
        }
        else if((clickButton === "On") && (power === "Off")){
            document.getElementsByClassName("Screen")[0].style.backgroundColor ="#0000ff";
            document.getElementsByClassName("upperScreen")[0].innerHTML ="Starting calculator..";
            var delayTime = 1000;
            setTimeout(function(){
                document.getElementsByClassName("upperScreen")[0].innerHTML ="Expression";
                document.getElementsByClassName("lowerScreen")[0].innerHTML ="Result";
                document.getElementsByClassName("Screen")[0].style.backgroundColor ="aliceblue";
            }, delayTime);
            power = "On";
        }
    })
})