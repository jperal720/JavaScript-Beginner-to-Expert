'use strict';

// const variable = function (n1, n2) {

//   /**
//    * Checking if keyword var ignores scope on functions as well
//    * !I already know it ignores scope inside blocks
//    */

//   const variable2 = function(){
//     var car = true;
//   }

//   variable2();

//   console.log(`car: ${car}`);
//   return n2;
// };

// variable();
// // console.log(car);

// console.log(this);

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
//     console.log(this);
// };

// calcAge(1992);

// var x = 10;

// const calcAge = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this.x);
// };

// calcAge(1992);

// var firstName = 'Matilda';

// const jonathan = {
//   firstName: 'Jonathan',
//   lastName: 'Peral',
//   birthYear: 2000,
//   calcAge: function () {
//     console.log("we're good");
//     const birthYear = 2001;

//     const self = this; //* by declaring self as this, which points to the global object here.
//     const isMillenial = function () {
//       return self.birthYear >= 1981 && self.birthYear <= 1996 ? true : false;
//     };
//     isMillenial();

//     return 2037 - this.birthYear;
//   },

// const jonathan = {
//   firstName: 'Jonathan',
//   lastName: 'Peral',
//   birthYear: 2000,
//   calcAge: function () {
//     console.log("we're good");
//     const birthYear = 2001;

//     // const self = this; //* by declaring self as this, which points to the global object here.
//     const isMillenial = () => {
//       console.log(this);
//       return this.birthYear >= 1981 && this.birthYear <= 1996 ? true : false;
//     };
//     isMillenial();

//     return 2037 - this.birthYear;
//   },

//   //!When accessing a property inside an object, that does not exist in that object we get 'undefined'
//   greet: () => console.log(`Hey, I'm ${this.firstName}!`),
// };

// //*User Ctrl + Alt + W , and W, once again, to console.log() a variable that you're currently selecting!
// jonathan.calcAge();
// jonathan.greet();

// console.log('firstName:', firstName);

/**
 * *This function can take more arguments than the ones it supports,
 * *we access them through the keyword 'arguments'
 * !This can only be done in a function declaration- it cannot be done in arrow functions.
 * @param {} a
 * @param {*} b
 * @returns
 */
// const addExpression = function (a, b) {
//   console.log('arguments:', arguments[2]);
//   return a + b;
// };

// addExpression(2, 5);
// addExpression(2, 5, 8, 10);

// const addArrow = (a, b) => a + b;

// addArrow(2, 5);

let age = 30,
  oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
  family: ['Alice', 'Bob'],
};

//!Pointing to the object, not copying!
const friend = me;

friend.age = 27;
friend.family.push('Nina');
friend.family.push('John');
console.log('friend:', friend);
console.log('me:', me);

//!Copying objects

//* This is considered to be a shallow copy
//* It will not create a copy of the objects stored in the properties, like arrays.
const friendCopy = Object.assign({}, me);

friendCopy.age = 31;

friend.family.push('Jojhan');

console.log('friend:', friend);
console.log('friendCopy:', friendCopy);
