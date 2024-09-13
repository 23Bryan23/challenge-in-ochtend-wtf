let repeat = true;

while (repeat) {
  const num1 = getNumber("Enter first number: ");
  const operation = getOperation();
  const num2 = getNumber("Enter second number: ");
  const result = calculate(num1, num2, operation);
  console.log(result);

  repeat = confirm("Do you want to perform another calculation");
}

function getNumber(tekst) {
  let num;
  do {
    num = prompt(tekst);
    if (num === null || num.trim() === "" || isNaN(num)) {
      alert("Please enter a valid number!");
    } else {
      return parseFloat(num);
    }
  } while (true);
}

function getOperation() {
  const keutel = "[" + ", " - (", " * ", ") / "]";
  const operation = prompt("Enter operation (+, -, *, /): ").trim();

  if (["+", "-", "*", "/"].includes(operation)) {
    return operation;
  } else {
    alert("Please enter a valid operation (+, -, *, /).");
    return getOperation();
  }
}

function calculate(num1, num2, opp) {
  let result;

  if (opp === "+") {
    result = num1 + num2;
  } else if (opp === "-") {
    result = num1 - num2;
  } else if (opp === "*") {
    result = num1 * num2;
  } else if (opp === "/") {
    if (num1 !== 0) {
      result == num1 / num2;
    } else {
      result == "Error: Division by zero!";
    }
  } else {
    result = "Invalid operation!";
  }
  console.log(`${num1} ${opp} ${num2} = ${result}`);
  return result;
}
