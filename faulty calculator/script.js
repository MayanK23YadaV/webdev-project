// made a funtion to calculate the number from user 
function calculate() {
    //getting number from html file 
    let num1 = document.getElementById("input1").value
    let num2 = document.getElementById("input2").value
    let selectedOperation = document.querySelector("select[name='operations']").value;
    //converting those strings into numbers 
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;
    //adding operatiion to calculate 
    switch (selectedOperation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "**":
        result = Math.pow(num1, num2); 
        break;
      case "/":
        if (num2 === 0) {
          result = "Error: Division by zero";
        } else {
          result = num1 / num2;
        }
        break;
    }
    //sending the result to html file
    document.getElementById("result").innerHTML = "Result: " + result ;
}