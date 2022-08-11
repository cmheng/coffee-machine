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
    displayMachineState();
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
        default:
            console.log("Unknown action");
    }
    displayMachineState();
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
    console.log("Write action (buy, fill, take):");
    let action = input();
    return action;
}

function actionBuy() {
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
    let choice = input();
    if (choice === "1") {
        stateWater -= ESPRESSO_WATER;
        stateBeans -= ESPRESSO_BEANS;
        stateCups--;
        stateMoney += ESPRESSO_COST;
    } else if (choice === "2") {
        stateWater -= LATTE_WATER;
        stateMilk -= LATTE_MILK;
        stateBeans -= LATTE_BEANS;
        stateCups--;
        stateMoney += LATTE_COST;
    } else if (choice === "3") {
        stateWater -= CAPPUCCINO_WATER;
        stateMilk -= CAPPUCCINO_MILK;
        stateBeans -= CAPPUCCINO_BEANS;
        stateCups--;
        stateMoney += CAPPUCCINO_COST;
    } else {
        console.log("Invalid choice");
    }

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

main();