// let js = "azing";
// console.log(40 + 8 - 10);

// let firstName = "Jonas";

// console.log(firstName, "thing");

// const currentYear = 2022;

// const birthYearJohn = 1992;
// const birthYearSarah = 1993;

// const ageJohn = currentYear - birthYearJohn;
// const ageSarah = currentYear - birthYearSarah;

// const sarahIsLegal = ageSarah >= 19;


// console.log(ageJohn >= ageSarah);


//Coding Challenge #1

const weightMark = 78; //in kg
const weightJohn = 92;

const heightMark = 1.69; //in meters
const heightJohn = 1.95;

const bmiMark = weightMark / (heightMark ** 2);
const bmiJohn = weightJohn / (heightJohn ** 2);

const markHigherBMI = bmiMark > bmiJohn;

console.log("Mark's BMI: " + bmiMark);
console.log("John's BMI: " + bmiJohn);
console.log("Mark has a higher BMI than John: " + markHigherBMI)
