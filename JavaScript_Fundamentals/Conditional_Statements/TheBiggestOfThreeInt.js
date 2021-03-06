/* The statement of the problem:
   Write a script that finds the biggest of three integers
   using nested if statements.
*/

// Reading the input data.
var firstNumber = Number(window.prompt("Hello user! Please enter a number", ""));
var secondNumber = Number(window.prompt("Now please enter a second number", ""));
var thirdNumber = Number(window.prompt("At last please enter a third number and wait for the magic to happen", ""));

// In the next few lines we use nested if statements to solve the problem.
if (firstNumber === secondNumber && firstNumber === thirdNumber) {
    console.log("Equals are the numbers you have entered.");
}

if (firstNumber > 0) {
    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        console.log("The first number is the biggest.");
    }
}

if (secondNumber > 0) {
    if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        console.log("The second number is the biggest.");
    }
}

if (thirdNumber > 0) {
    if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        console.log("The third number is the biggest.");
    }
}
