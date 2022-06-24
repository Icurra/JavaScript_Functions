console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;
  if (age >= 16) {
    console.log(aboveSixteen);
  } else if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log("Invalid Number");
  }
}