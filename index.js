const input = require('sync-input');

const ESPRESSO_WATER = 250;
const ESPRESSO_BEANS = 16;
const ESPRESSO_COST = 4;
const LATTE_WATER = 350;
const LATTE_MILK = 75;
const LATTE_BEANS = 20;
const LATTE_COST = 7;
const CAPPUCCINO_WATER = 200;
const CAPPUCCINO_MILK = 100;
const CAPPUCCINO_BEANS = 12;
const CAPPUCCINO_COST = 6;

let stateWater = 0;
let stateMilk = 0;
let stateBeans = 0;
let stateCups = 0;
let stateMoney = 0;

function main() {
    initMachine();

    let isExit = false;

    while (!isExit) {
        switch (getAction()) {
            case "buy":
                actionBuy();
                break;
            case "fill":
                actionFill();
                break;
            case "take":
                actionTake();
                break;
            case "remaining":
                displayMachineState();
                break;
            case "exit":
                isExit = true;
                break;
            default:
                console.log("Unknown action");
        }
    }
}

function initMachine() {
    stateWater = 400;
    stateMilk = 540;
    stateBeans = 120;
    stateCups = 9;
    stateMoney = 550;
}

function displayMachineState() {
    console.log(`The coffee machine has:
${stateWater} ml of water
${stateMilk} ml of milk
${stateBeans} g of coffee beans
${stateCups} disposable cups
$${stateMoney} of money
    `);
}

function getAction() {
    console.log("Write action (buy, fill, take, remaining, exit):");
    let action = input();
    console.log();
    return action;
}

function actionBuy() {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
    let choice = input();

    if (choice === "back") {
        console.log();
        return;
    }

    makeCoffee(choice);
    console.log();
}

function actionFill() {
    console.log("Write how many ml of water you want to add:");
    stateWater += parseInt(input());
    console.log("Write how many ml of milk you want to add:");
    stateMilk += parseInt(input());
    console.log("Write how many grams of coffee beans you want to add:");
    stateBeans += parseInt(input());
    console.log("Write how many disposable coffee cups you want to add:");
    stateCups += parseInt(input());
    console.log();
}

function actionTake() {
    console.log("I gave you $" + stateMoney);
    stateMoney = 0;
    console.log();
}

function makeCoffee(coffeeType) {

    let hasWater = true;
    let hasMilk = true;
    let hasBeans = true;
    let hasCups = true;
    let coffeeWater = 0;
    let coffeeMilk = 0;
    let coffeeBeans = 0;
    let coffeeCost = 0;

    if (coffeeType === "1") {
        coffeeWater = ESPRESSO_WATER;
        coffeeMilk = 0;
        coffeeBeans = ESPRESSO_BEANS;
        coffeeCost = ESPRESSO_COST;
    } else if (coffeeType === "2") {
        coffeeWater = LATTE_WATER;
        coffeeMilk = LATTE_MILK;
        coffeeBeans = LATTE_BEANS;
        coffeeCost = LATTE_COST;
    } else if (coffeeType === "3") {
        coffeeWater = CAPPUCCINO_WATER;
        coffeeMilk = CAPPUCCINO_MILK;
        coffeeBeans = CAPPUCCINO_BEANS;
        coffeeCost = CAPPUCCINO_COST;
    }

    if (stateWater - coffeeWater < 0) hasWater = false;
    if (stateMilk - coffeeMilk < 0) hasMilk = false;
    if (stateBeans - coffeeBeans < 0) hasBeans = false;
    if (stateCups - 1 < 0) hasCups = false;

    if (hasWater && hasMilk && hasBeans && hasCups) {
        console.log("I have enough resources, making you a coffee!");
        stateWater -= coffeeWater;
        stateMilk -= coffeeMilk;
        stateBeans -= coffeeBeans;
        stateCups--;
        stateMoney += coffeeCost;
    } else if (!hasWater) {
        console.log("Sorry, not enough water!");
    } else if (!hasBeans) {
        console.log("Sorry, not enough coffee beans!");
    } else if (!hasMilk) {
        console.log("Sorry, not enough milk!");
    } else if (!hasCups) {
        console.log("Sorry, not enough cups!");
    }
}

main();
