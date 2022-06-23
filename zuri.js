const operatorVar = prompt(
  "Enter the operator that you want to use (*, -, +,  )"
);
const operand1 = prompt("Enter the First Value");
const operand2 = prompt("Enter the Second Value");
function isDigit(input) {
  var integer = true;
  for (var char of input) {
    if (char`9`) {
      integer = false;
    }
  }
  return integer;
}
if (isDigit(operand1) == false) {
  alert("Wrong input at operand 1| Not an integer Value");
}
if (isDigit(operand2) == false) {
  alert("Wrong input at operand 2| Not an integer Value");
}
if (operatorVar == "*") {
  result = operand1 * operand2;
} else if (operatorVar == "-") {
  result = operand1 - operand2;
} else if (operatorVar == "/") {
  result = operand1 / operand2;
} else if (operatorVar == "+") {
  result = parseInt(operand1) + parseInt(operand2);
} else {
  alert("Invalid Operator");
}
alert("The result is : " + result);
