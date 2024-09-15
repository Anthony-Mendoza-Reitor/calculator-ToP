/*  This is part of the Calculator Project
    Author: Anthony Mendoza Reitor
    Date: Septemebr 15, 2024                */

let a = 0;  b = 0; operator = '+'; // Declaration of variables for display

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
function operate(){
    a = parseInt(prompt("Please enter your first value: "));
    operator = prompt("Please enter the operation(+ - * /): ");
    b = parseInt(prompt("Please enter your second value: "));
    if (operator === '+'){
        add(a, b);
        return(c);
    }
    else if (operator === '-'){
        substract(a, b);
        return(c);
    }
    else if (operator === '*'){
        multiply(a, b);
        return(c);
    }
    else if (operator === '/'){
        divide(a, b);
        return(c);
    }
}