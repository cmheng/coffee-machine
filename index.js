// Read how much coffee the machine needs to make (in cups);
// Figure out how much of each ingredient is required. 
// Note that one cup of coffee contains 200 ml of water, 50 ml of milk, and 15 g of coffee beans;
// Output the required ingredients.
// Example:
// Write how many cups of coffee you will need:
// > 25
// For 25 cups of coffee you will need:
// 5000 ml of water
// 1250 ml of milk
// 375 g of coffee beans

const input = require('sync-input');

let waterPerCup = 200;
let milkPerCup = 50;
let beansPerCup = 15;

console.log("Write how many cups of coffee you will need:")
let cups = input();
console.log(`For ${cups} of coffee you will need:
${cups * waterPerCup} ml of water
${cups * milkPerCup} ml of milk
${cups * beansPerCup} g of coffee beans`);

