//create var result with empty value to store the user in put and the result
let result = "";
let displayResult = document.getElementById("result");
//create var array namet calculationParts
let Calculater = document.getElementById("Calculater");

function appendNumber(number){
    displayResult.value += number.toString();
 }
function appendOperator (operator){
    displayResult.value += '' + operator + '';
 }

 function clearResult(){
    displayResult.value = "";
 }
 function deleteNumber() {
    let currentValue = displayResult.value;
    displayResult.value = currentValue.slice(0, -1);
}
 
 Calculater.addEventListener('click',(e)=>{
    const expression = displayResult.value;
    //perform calculations with multiple numbers, (regex) pattern 
    const calculationParts = expression.split(/(\+|\-|\*|\/)/);
 
   /* if (calculationParts.length !==3){
        return('invalid input')
    }*/
    let num1 = parseFloat(calculationParts[0]);
    let operator = calculationParts[1];
    let num2 = parseFloat(calculationParts[2]);

    let finalResult;

    switch (operator) {
        case "+":
          finalResult = num1 + num2;
          break;
        case "-":
          finalResult = num1 - num2;
          break;
        case "x":
          finalResult = num1 * num2;
          break;
        case "/":
          finalResult = num1 / num2;
          break;
        default:
          console.log("Invalid operator");
          return;
      }

      result = finalResult.toString();
      displayResult.value = result
      return result;
 });
/*function calculateResult(){
    const calculationParts = displayResult.value.split('');

    if (calculationParts.length !==3){
        return('invalid input')
    }
    let num1 = parseFloat(calculationParts[0]);
    let operator = calculationParts[1];
    let num2 = parseFloat(calculationParts[2]);

    let finalResult;

    switch (operator) {
        case "+":
          finalResult = num1 + num2;
          break;
        case "-":
          finalResult = num1 - num2;
          break;
        case "x":
          finalResult = num1 * num2;
          break;
        case "/":
          finalResult = num1 / num2;
          break;
        default:
          console.log("Invalid operator");
          return;
      }

    result = finalResult.toString();
    displayResult.value = result

}

calculateResult()*/