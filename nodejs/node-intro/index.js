//jshint esversion:6

// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt");

const superheroes = require("superheroes");
const supervillains = require("supervillains");

let mySuperHeroName = superheroes.random();
let mySuperVillainName = supervillains.random();

console.log(`Names
Hero: ${mySuperHeroName} 
Villain: ${mySuperVillainName}`);