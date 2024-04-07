#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAns = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.blueBright.italic.bold("please enter from currency"),
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        type: "list",
        message: chalk.blueBright.italic.bold("please enter to currency"),
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        type: "number",
        message: chalk.blueBright.italic.bold("please enter your amount"),
    },
]);
let fromAmount = currency[userAns.from];
let toAmount = currency[userAns.to];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.floor(convertedAmount));
