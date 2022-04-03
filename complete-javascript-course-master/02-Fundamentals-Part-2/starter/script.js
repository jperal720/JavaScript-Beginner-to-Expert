'use strict';
 
// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log(`I can drive`);

//Some variables that strict mode reserves
// const private = 10;
// const interface  = 'Audio';

// function logger() {
//     console.log(`My name is Jonathan`);
// }

// logger(); //invoking, calling, running the function.;

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//     return juice;
// }

// console.log(fruitProcessor(2, 3));

//function declaration
// console.log(`Beethoven might as well be ${calcAge1(1890)} years old; he's really old!`);

// function calcAge1(birthYear){
//     return 2047 - birthYear;
// }

// const age1 = calcAge1(2000);
// console.log(`Person 1 is ${age1} years old.`);

// //function expression
// const calcAge2 = function (birthYear){
//     return 2047 - birthYear
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// //function expressions

// const audioFile = function (mp3){
//     const wav = mp3 * 2;

//     return wav;
// }

// const wavFile = audioFile(32);
// console.log(`This is the audio file conversion of mp3 32: ${wavFile}`);

// const poop = function(poops){
//     console.log(`Took ${poops} poop(s); I'm satisfied!`);

//     return 'happy';
// }

// let emotion =  poop(3);
// console.log(`Currently feeling ${emotion}!`);

//Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;

// let age = calcAge3(2000);
// console.log(age);

// const yearsUntilRetirement = (birthYear, birthName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age; //Retirement age is 65

//     return `${birthName} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement(2000, 'Nathan'));

// const fruitCutter = num => `${num} fruits cut successfully!`;


// const fruitProcessor = function (apples, oranges) {
//     console.log(fruitCutter(apples + oranges));

//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(4, 5));

//Coding Challenge #1

// const scoresDolphins = [85, 54, 41];
// const scoresKoalas = [23, 34, 27];

// const calcAverage = scores => (scores[0] + scores[1] + scores[2]) / 3;

// const checkWinner = function( avgDolphins, avgKoalas){
//     if (avgDolphins / 2 >= avgKoalas)
//         return `Dolphins Win (${avgDolphins} vs. ${avgKoalas})!`;

//     else if (avgKoalas / 2 >= avgDolphins)
//         return `Koalas Win (${avgKoalas} vs. ${avgDolphins})!`;

//     return `No Team Wins (${avgDolphins} vs. ${avgKoalas})!`;
// }

// const avgDolphins = calcAverage(scoresDolphins), avgKoalas = calcAverage(scoresKoalas);

// console.log(checkWinner(avgDolphins, avgKoalas));


//Add elements
// const friends = ['Michael', 'Steven', 'Jay'];
// friends.push('Nathan');

// console.log(friends);

// console.log(`.unshift and .push return the new length of the array after adding the element`);
// let newIndex = friends.unshift("Jonathan");
// console.log(friends);
// console.log(newIndex);

// //Remove elements
// friends.pop();
// console.log(friends);

// const shiftedElement = friends.shift();
// console.log(shiftedElement);
// console.log(friends);

// console.log(`The name "Max" is in the friends array: ${friends.includes("Max")}`);

//Coding Challenge #2;

// const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(`Bills: ${bills}\nTips: ${tips}\nTotal: ${total}`);

// const jonas = { //Object literal syntax
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     job: "Teacher",
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastNam']);

// const nameFunction = name => name;
// const nameKey = "Name";

// console.log(jonas[nameFunction('age')]);
// console.log(jonas["first" + nameKey]); //This is interesting!
// console.log(jonas["last" + nameKey]);

// let userInput = prompt(`What do you want to know about Jonas?\nfirstName, lastName, age, job, friends?`);

// jonas[userInput] ? console.log(`${userInput}: ${jonas[userInput]}`) : console.log(`Jonas does not have such property!`);

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// //Challenge
// // "Jonas has 3 friends, and his best friend is called Michael";

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'], 
//     hasDriversLicense: false,

//     // calcAge: function(){;
//     //     console.log(this); // to call the object 
//     //     return 2037 - this.birthYear;
//     // };

//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         console.log(this);
//         return this.age;
//     },

//     jonasSummary: function(){
//         this.summary = `${this.firstName} ${this.lastName} is ${this.age} years old. ${this.firstName} is a ${this.job}. His friends are ${this.friends}, which he ${this.hasDriversLicense ? `can` : `cannot`} drive around.`;
//         return this.summary;
//     }
// };

// console.log(jonas['calcAge']());
// console.log(jonas['age']);

// console.log(jonas['jonasSummary']());

//Coding Challenge #3

// const mark = {
//     fullName: "Mark",
//     mass: 78,
//     height: 1.69,

//     calcBMI: function(){
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// }

// const john = {
//     fullName: "John",
//     mass: 200,
//     height: 1.95,

//     calcBMI: function(){
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI
//     }
// }

// console.log(`${mark['fullName']}(BMI: ${mark['calcBMI']()}) has a ${mark['BMI'] > john['calcBMI']() ? `higher` : `lower`} BMI than ${john['fullName']}(BMI: ${john['BMI']}))`);

// const jonas = [
//     'Jonas', 
//     'Smith', 
//     2037 - 1991,
//     'teacher', 
//     ['Michael', 'Max', "John"]
// ];

// const typeArr = [];

// for (let i = 0; i < jonas.length; i++){
//     console.log(jonas[i]);
//     typeArr.push(typeof jonas[i]);
// }

// console.log(typeArr);

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(`You rolled a ${dice}${dice === 6 ? `!` : ``}`);


// while(dice !== 6){
//     dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(`You rolled a ${dice}${dice === 6 ? `!` : ``}`);
// }

//Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
    console.log(`The tip of ${bills[i]} is ${tips[i]}, coming out to a total of ${totals[i]}`);
}   

