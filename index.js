const input = require('sync-input');

let waterPerCup = 200;
let milkPerCup = 50;
let beansPerCup = 15;

// input
console.log("Write how many ml of water the coffee machine has:");
let water = input();
console.log("Write how many ml of milk the coffee machine has:");
let milk = input();
console.log("Wrtie how many grams of coffee beans the coffee machine has:");
let beans = input();
console.log("Write how many cups of coffee you will need:");
let cups = input();

// calculation
let waterCups = Math.floor(water / waterPerCup);
let milkCups = Math.floor(milk / milkPerCup);
let beansCups = Math.floor(beans / beansPerCup);

let leastCups = waterCups;
if (milkCups < leastCups) {
    leastCups = milkCups;
}

if (beansCups < leastCups) {
    leastCups = beansCups;
}

// output
if (leastCups == cups) {
    console.log("Yes, I can make that amount of coffee");
} else if (leastCups < cups) {
    console.log(`No, I can make only ${leastCups} cups of coffee`);
} else {
    console.log(`Yes, I can make that amount of coffee (and even ${leastCups - cups} more than that)`);
}