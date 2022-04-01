// // // let js = "azing";
// // // console.log(40 + 8 - 10);

// // // let firstName = "Jonas";

// // // console.log(firstName, "thing");

// // // const currentYear = 2022;

// // // const birthYearJohn = 1992;
// // // const birthYearSarah = 1993;

// // // const ageJohn = currentYear - birthYearJohn;
// // // const ageSarah = currentYear - birthYearSarah;

// // // const sarahIsLegal = ageSarah >= 19;


// // // console.log(ageJohn >= ageSarah);


// // //Coding Challenge #1

// // const weightMark = 78; //in kg
// // const weightJohn = 92;

// // const heightMark = 1.69; //in meters
// // const heightJohn = 1.95;

// // const bmiMark = weightMark / (heightMark ** 2);
// // const bmiJohn = weightJohn / (heightJohn ** 2);

// // const markHigherBMI = bmiMark > bmiJohn;

// // if(bmiMark > bmiJohn)
// //     console.log(`Mark has a BMI of ${bmiMark} is higher than John's, which is ${bmiJohn}`);
// // else if(bmiMark < bmiJohn)
// //     console.log(`John has a BMI of ${bmiJohn}, which is higher than Mark's, which is ${bmiMark}`);
// // else
// //     console.log(`John's BMI (${bmiJohn}) is the same as Mark's BMI (${bmiMark})`);

// const money = 0;

// if(money)
//     console.log('got money');
// else
//     console.log('got no money');
    

// let x, y;

// y = 9;

// x = y = 10 ** 2;

// console.log(x, y);

// const valueGiven = prompt("Give me something!");
// console.log(valueGiven);


// //Challenge 1

// const scoresDolphin = [97, 112, 101];
// const scoresKoalas = [109, 95, 106];

// let avgDolphin = 0, avgKoalas = 0;

// for(let i = 0; i < scoresDolphin.length; i++){
//         avgDolphin += scoresDolphin[i];
//         avgKoalas += scoresKoalas[i];
// }

// avgDolphin /= scoresDolphin.length;
// avgKoalas /= scoresKoalas.length;

// let threshDolphin, threshKoalas; //Checks whether vars are > 100

// if(avgDolphin >= 100) threshDolphin = true;
// else threshDolphin = false;

// if(avgKoalas >= 100) threshKoalas = true;
// else threshKoalas = false;

// console.log(`Dolphin's average score: ${avgDolphin}\n
// Koalas' average score: ${avgKoalas}`);

// if(threshDolphin && threshKoalas){ //If both avg > 100
    
//     if(avgDolphin > avgKoalas) console.log(`Dolphins Win!`);
//     else if(avgKoalas > avgDolphin) console.log(`Koalas Win!`);
//     else console.log(`They are tied!`);

// }

// else if(threshDolphin || threshKoalas){ // if one avg > 100
    
//     if(threshDolphin) console.log(`Dolphins Win!`);
//     else console.log(`Koalas Win!`);

// }

// else // if neither avg > 100
//     console.log(`None of them are winners :()`);


//Ternary operators

const age = 15;

console.log(`You are ${age}, therefore you ${age >= 19 ? "can" : "cannot"} drink alcohol.`);

const legal = age >= 19 ? true : false;
console.log(`I'm legal: ${legal}`);



