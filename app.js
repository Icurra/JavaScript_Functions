console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count < 0) {
    count *= -1;
  }

  for (let i = 1; i <= count; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}
printOdds(-30);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if ((userName = undefined || age == undefined)) {
    console.log("Please fill in all available fields.");
  } else if (age > 16) {
    console.log(aboveSixteen);
  } else if (age < 16) {
    console.log(belowSixteen);
  }
}
checkAge("Lisa", 42);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function grid(x, y) {
  if (x > 0 && y > 0) {
    return "1";
  } else if (x < 0 && y > 0) {
    return "2";
  } else if (x < 0 && y < 0) {
    return "3";
  } else if (x > 0 && y < 0) {
    return "4";
  } else if (x == 0 && y != 0) {
    return "Between Quadrants";
  } else if (x != 0 && y == 0) {
    return "Between Quadrants";
  } else {
    return "origin";
  }
}
console.log(grid());

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
function triangleType(a, b, c) {
  let isValid = isValidTriangle(a, b, c);
  if (isValid) {
    if (a == b && b == c) {
      return "Equilateral Triangle";
    } else if (a == b || b == c || a == c) {
      return "Isosceles Triangle";
    } else {
      return "Scalene Triangle";
    }
  } else {
    return "Not Valid";
  }
}
console.log(triangleType(4, 3, 2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataPlan(planLimit, day, usage) {
  let payPeriod = 30;
  let currentAvg = usage / day;
  let projected = planLimit / payPeriod;
  let remainder = payPeriod - day;
  let statusMSG;
  let projectedFinal = remainder * currentAvg;
  console.log(`${day} day(s) in, with ${remainder} day(s) remaining)`);
  console.log(`Average projected use: ${projected} GB/day`);
  if (currentAvg > projected) {
    statusMSG = "EXCEEDING";
  } else if (currentAvg < projected) {
    statusMSG = "BELOW";
  } else {
    statusMSG = "AT";
  }

  console.log(`You are ${statusMSG} your average daily use (${currentAvg} GB/day),
    continuing this usage, you'll end the month with a remainder of ${
      planLimit - projectedFinal
    } GB's from your data limit.`);
}

dataPlan(30, 10, 10);
