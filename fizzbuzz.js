const prompt = require('prompt-sync')();
let number = 0 

number = prompt("Enter a number: ");

console.log (" ");

while (number >= 0) {

  if (number % 3 == 0 && number % 5 == 0)
    console.log("FizzBuzz");

  else if (number % 3 == 0)
    console.log("Fizz");

  else if (number % 5 == 0)
    console.log ("Buzz");

  else if (number % 5 != 0 && number % 3 != 0)
    console.log(number);

  number--;

}

