"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Player = /** @class */ (function () {
    function Player(name) {
        this.fuel = 100;
        this.name = name;
    }
    Player.prototype.fuelDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    Player.prototype.fuelIncrease = function () {
        this.fuel = 100;
    };
    return Player;
}());
var Opponent = /** @class */ (function () {
    function Opponent(name) {
        this.fuel = 100;
        this.name = name;
    }
    Opponent.prototype.fuelDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    return Opponent;
}());
var player = await inquirer_1.default.prompt([
    {
        name: "name",
        type: "input",
        message: "Please enter your name: ",
    },
]);
var opponent = await inquirer_1.default.prompt([
    {
        name: "Select",
        type: "list",
        message: "Select your opponent",
        choices: ["Skeleton", "Alien", "Zombie"],
    },
]);
var p1 = new Player(player.name);
var o1 = new Opponent(opponent.Select);
do {
    if (opponent.Select == "Skeleton") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink portion", "Run for your life..."],
            },
        ]);
        if (ask.opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log("".concat(p1.name, " attacked ").concat(o1.name, "! Successful hit!"));
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
                if (num <= 0) {
                    o1.fuelDecrease();
                    console.log("".concat(p1.name, " attacked ").concat(o1.name, "! Successful hit!"));
                    console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                    console.log("".concat(o1.name, " fuel is ").concat(o1.fuel));
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log("You drink health portion your fuel is " + p1.fuel);
            // let num = Math.floor(Math.random() * 2);
            // if (num > 0) {
            //   p1.fuelDecrease();
            //   console.log(`${p1.name} attacked ${o1.name}! Successful hit!`);
            //   console.log(`${p1.name} fuel is ${p1.fuel}`);
            //   console.log(`${o1.name} fuel is ${o1.fuel}`);
            //   if (num <= 0) {
            //     o1.fuelDecrease();
            //     console.log(`${p1.name} attacked ${o1.name}! Successful hit!`);
            //     console.log(`${p1.name} fuel is ${p1.fuel}`);
            //     console.log(`${o1.name} fuel is ${o1.fuel}`);
            //   }
            //  } 
            //  else {
            //   console.log(`${p1.name} attacked ${o1.name}, but missed!`);
            //   p1.fuelDecrease(); // Your fuel decreases if attack is not successful
            //   console.log(`${p1.name} fuel is ${p1.fuel}`);
            //   console.log(`${o1.name} fuel is ${o1.fuel}`);
            //   if (p1.fuel <= 0) {
            //     console.log("You loose, better luck next time");
            //     process.exit();
            //   }
            // }
        }
        if (ask.opt == "Run for your life...") {
            console.log("You loose, better luck next time");
            process.exit();
        }
    }
} while (true);
