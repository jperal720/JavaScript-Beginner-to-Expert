// 'use strict';

// // const bookings = [];

// // //Default parameters
// // const createBooking = function (
// //   flightNum = 'DE',
// //   numPassenger = 2,
// //   price = 199 * numPassenger //This only works when the param have been declared beforehand
// // ) {
// //   //   //* Setting default parameters before ES6
// //   //   //Short circuiting
// //   //   numPassengers = numPassengers || 1;
// //   //   price = price || 199;

// //   const booking = {
// //     flightNum,
// //     numPassenger,
// //     price,
// //   };

// //   console.log(booking);
// //   bookings.push(booking);
// // };
// // createBooking('LH112');
// // createBooking('LH112', 20, 50);
// // createBooking('LH112', undefined, 50); //!The'undefined' can be used to skip a parameter - and set it to its default.

// //Passing argument: value vs reference

// const flight = 'LH234';
// const jonathan = {
//   name: 'Jonathan Peral',
//   passport: 2343434333,
// };

// const checkIn = function (flightNum, passenger) {
//   //Directly changing parameters is not good practice
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name; //? This will change the original object, because objects - reference types - are stored in the memory heap
//   //? and this function's parameters directly manipulates the object.

//   //   passenger.passport == 2343434333
//   //     ? alert('Check in!')
//   //     : alert('Wrong passport!');
// };
// checkIn(flight, jonathan);
// console.log('flight:', flight);
// console.log('jonathan:', jonathan);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonathan);
// console.log('jonathan:', jonathan);

// //First class and higher-order functions

// //* Higher order functions

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// const coolOrNot = function (name) {
//   return name.toLowerCase() == 'jonathan'
//     ? `You are cool!`
//     : `You are not cool...`;
// };

// //This is a higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string:\n${str}`);
//   console.log(`Transformed string:\n${fn(str)}`);

//   console.log(`Transformed by:\n${fn.name}`);
// };

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// const highFive = function () {
//   console.log('Heart');
// };

// document.body.addEventListener('click', highFive);

// console.log(['Jonas', 'Martha', 'Adam'].forEach(oneWord));

//*Function returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}!`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');

// greeterHey('Jonathan');
// greeterHey('fooh');

// greet('Hello')('cuh'); //?Calling the function that returns a function
// //This becomes very important, especially when abiding by functional programming's principles.

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline}; flight ${this.iataCode} ${flightNum}`
    );

    this.bookings.push({
      flight: `${this.iataCode} ${flightNum}`,
      passengerName,
    });
  },
};

lufthansa.book(239, 'Jonathan Peral Gort');
lufthansa.book(332, 'Mike Doe');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//*Call method
//Does not Work
// book(23, 'Sarah Johnes');
console.log(eurowings);
book.call(eurowings, 23, 'Sara Johnes');

const swiss = {
  name: 'Swiss Airlines',
  iataCode: 'SA',
  bookings: [],
};

book.call(swiss, 333, 'Jonas Schmedtmann');
console.log(swiss);

//* Apply method - it has become obsolete
const flightData = [545, 'George Cooper'];
book.apply(swiss, flightData);

//Apply method has become obsolete, because we can just use the 'call' method with the spread (...) keyword
book.call(swiss, ...flightData);
console.log(swiss);
