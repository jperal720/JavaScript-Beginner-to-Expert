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

const scoresDolphins = [85, 54, 41];
const scoresKoalas = [23, 34, 27];

const calcAverage = scores => (scores[0] + scores[1] + scores[2]) / 3;

const checkWinner = function( avgDolphins, avgKoalas){
    if (avgDolphins > avgKoalas && avgDolphins / 2 >= avgKoalas)
        return `Dolphins Win (${avgDolphins} vs. ${avgKoalas})4!`;

    else if (avgKoalas > avgDolphins && avgKoalas / 2 >= avgDolphins)
        return `Koalas Win (${avgKoalas} vs. ${avgDolphins})!`;

    return `No Team Wins (${avgDolphins} vs. ${avgKoalas})!`;
}

const avgDolphins = calcAverage(scoresDolphins), avgKoalas = calcAverage(scoresKoalas);

console.log(checkWinner(avgDolphins, avgKoalas));

