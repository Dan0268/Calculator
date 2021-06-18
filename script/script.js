const inputDisplay = (value) => {
    document.getElementById("displayInput").value = value;
}

let number1 = "";
let number2 = "0";
let result = "0";
let current = "0";
let memory = "0";
let operation = "";
inputDisplay(result);

const clearAll = () => {
    number1 = "";
    number2 = "0";
    result = "0";
    current = "0";
    inputDisplay(result);
}

const enterNumber = (value) => {
    if (current === "0") {
        current = value;
        return inputDisplay(current);
    } 
    else {
        current += value;
        return inputDisplay(current);
    }
}

const decimal = () => {
    if (!current.includes(".")) {
        current += ".";
        return inputDisplay(current);
    }
}

const erasesign = () => {
    if (current.length === 1) {
        current = "";
        return inputDisplay("0");
    }
    current = current.slice(0, (current.length - 1));
    return inputDisplay(current);
}

const clearcurrent = () => {
    current = "0";
    return inputDisplay(current);
}

const memstore = () => {
    if (result, current === "0") {
        return memory = number1;
    } else 
    return memory = current;
}
const memplus = () => {
    return memory = (Number(memory) + Number(current)).toString();
}
const memrec = () => {
    current = memory;
    return inputDisplay(current);
}
const positivenegative = () => {
    current = (Number(current) * -1 ).toString();
    return inputDisplay(current);
}
const percent = () => {
    current = (Number(current) / 100 ).toString();
    return inputDisplay(current);
}

document.getElementById("btnOne").addEventListener("click", function() {enterNumber("1")});
document.getElementById("btnTwo").addEventListener("click", function() {enterNumber("2")});
document.getElementById("btnThree").addEventListener("click", function() {enterNumber("3")});
document.getElementById("btnFour").addEventListener("click", function() {enterNumber("4")});
document.getElementById("btnFive").addEventListener("click", function() {enterNumber("5")});
document.getElementById("btnSix").addEventListener("click", function() {enterNumber("6")});
document.getElementById("btnSeven").addEventListener("click", function() {enterNumber("7")});
document.getElementById("btnEight").addEventListener("click", function() {enterNumber("8")});
document.getElementById("btnNine").addEventListener("click", function() {enterNumber("9")});
document.getElementById("btnZerosign").addEventListener("click", function() {enterNumber("0")});

const equalsign = () => {
    // if (operation === "" && result === "") {
    //     result = current;
    //     number1 = result;
    //     number2 = "";
    //     current = "";
    //     operation = "";
    //     return inputDisplay(result);
    // }  
    if (operation === "plus") {
        number2 = current;
        result = (Number(number1) + Number(number2)).toString();
        number1 = result;
        number2 = "";
        current = "";
        operation = "";
        return inputDisplay(result);
    } else if (operation === "minus") {
        number2 = current;
        result = (Number(number1) - Number(number2)).toString();
        number1 = result;
        number2 = "";
        current = "";
        operation = "";
        return inputDisplay(result);
    } else if (operation === "mult") {
        number2 = current;
        result = (Number(number1) * Number(number2)).toString();
        number1 = result;
        number2 = "";
        current = "";
        operation = "";
        return inputDisplay(result);
    } else if (operation === "div") {
       if (current === "" || current === "0") {
            number1 = "";
            number2 = "";
            result = "";
            current = "";
            return inputDisplay(`E R R O R`);
        } else
        number2 = current;
        result = (Number(number1) / Number(number2)).toString();
        number1 = result;
        number2 = "";
        current = "";
        operation = "";
        return inputDisplay(result);
        }
    }

const addition = () => {
    if (number1.length === 0) {
        number1 = current;
        current = "";
        operation = "plus";
        return inputDisplay(`${number1} + `);
    } else {
        equalsign();   
        operation = "+";             
        return inputDisplay(`${result} + `);
    }
}
const subtraction = () => {
    if (number1.length === 0) {
        number1 = current;
        current = "";
        operation = "minus";
        return inputDisplay(`${number1} - `);
    } else {
        operation = "minus";
        equalsign();
        operation = "minus";
        return inputDisplay(`${result} - `);
    }
}

const multiplication = () => {
    if (number1.length === 0) {
        number1 = current;
        current = "";
        operation = "mult";
        return inputDisplay(`${number1} × `);
    } else {
        operation = "mult";
        equalsign();
        operation = "mult";
        return inputDisplay(`${result} × `);
    }
}

const division = () => {
    if (number1.length === 0) {
        number1 = current;
        current = "";
        operation = "div";
        return inputDisplay(`${number1} ÷ `);
    } else {
        operation = "div";
        equalsign();
        operation = "div";
        return inputDisplay(`${result} ÷ `);
    }
}


document.getElementById("btnAllClear").addEventListener("click", function() {clearAll()});
document.getElementById("btnEqualsign").addEventListener("click", function() {equalsign()});
document.getElementById("btnPlus").addEventListener("click", function() {addition()});
document.getElementById("btnMinus").addEventListener("click", function() {subtraction()});
document.getElementById("btnDecimalsign").addEventListener("click", function() {decimal()});
document.getElementById("btnMultiplysign").addEventListener("click", function() {multiplication()});
document.getElementById("btnDivide").addEventListener("click", function() {division()});
document.getElementById("btnErase").addEventListener("click", function() {erasesign()});
document.getElementById("btnDelete").addEventListener("click", function() {clearcurrent()});
document.getElementById("btnDelete").addEventListener("click", function() {clearcurrent()});
document.getElementById("btnMem").addEventListener("click", function() {memstore()});
document.getElementById("btnMemPlus").addEventListener("click", function() {memplus()});
document.getElementById("btnMemRec").addEventListener("click", function() {memrec()});
document.getElementById("btnPositiveNegative").addEventListener("click", function() {positivenegative()});
document.getElementById("btnPercent").addEventListener("click", function() {percent()});