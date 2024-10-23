console.log('=================== Part 1 ==============================')
//Part 1

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
//Part 1:
//Check if all numbers are divisible by 5. Cache the result in a variable.
let areDivisibleby5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);

console.log(areDivisibleby5);

//Check if the first number is larger than the last. Cache the result in a variable.

let FirstNumberLargerThanLast = n1 > n4;

console.log(FirstNumberLargerThanLast);

//Accomplish the following arithmetic chain

let arithmetic = ((n2 - n1) * n3) % n4;
console.log(arithmetic)

// Change the way that is isOver25

const isNotOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log("is not over 25", isNotOver25)

// Part 2
console.log('=================== Part 2 ==============================')

const totalMiles = 1500;
const fuelBudget = 175;
const fuelPricePerGallon = 3;

// Fuel efficiency & different speeds
const mpg55 = 30;
const mpg60 = 28;
const mpg75 = 23;

//  55 mph
const gallons55 = totalMiles / mpg55;
const cost55 = gallons55 * fuelPricePerGallon;
const time55 = totalMiles / 55;
const budgetEnough55 = cost55 <= fuelBudget;
console.log("At 55 mph:");
console.log("Gallons needed:", gallons55);
console.log("Fuel cost:", cost55);
console.log("Time:", time55, "hours");
console.log("Budget enough?", budgetEnough55);

// 60 mph
const gallons60 = totalMiles / mpg60;
const cost60 = gallons60 * fuelPricePerGallon;
const time60 = totalMiles / 60;
const budgetEnough60 = cost60 <= fuelBudget;
console.log("At 60 mph:");
console.log("Gallons needed:", gallons60);
console.log("Fuel cost:", cost60);
console.log("Time:", time60, "hours");
console.log("Budget enough?", budgetEnough60);

// 75 mph
const gallons75 = totalMiles / mpg75;
const cost75 = gallons75 * fuelPricePerGallon;
const time75 = totalMiles / 75;
const budgetEnough75 = cost75 <= fuelBudget;
console.log("At 75 mph:");
console.log("Gallons needed:", gallons75);
console.log("Fuel cost:", cost75);
console.log("Time:", time75, "hours");
console.log("Budget enough?", budgetEnough75);

// How many gallons of fuel will you need for the entire trip?
let totalmiles = 1500;
let mpg = 30;
let pricePerGallon = 3;
let budget = 175;
let speed = 55;

let gallonsNeeded = totalmiles / mpg;
console.log('I need this many gallons of fuel for the trip', gallonsNeeded);

let totalFuelCost = gallonsNeeded * pricePerGallon;
let budgetEnough = totalFuelCost <= budget;

console.log('Is you budget enough', budgetEnough);

time = totalmiles / speed;

console.log("How long will the trip take?",time,"hours");