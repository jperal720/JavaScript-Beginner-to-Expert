'use strict';

// const bookings = [];

// //Default parameters
// const createBooking = function (
//   flightNum = 'DE',
//   numPassenger = 2,
//   price = 199 * numPassenger //This only works when the param have been declared beforehand
// ) {
//   //   //* Setting default parameters before ES6
//   //   //Short circuiting
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH112');
// createBooking('LH112', 20, 50);
// createBooking('LH112', undefined, 50); //!The'undefined' can be used to skip a parameter - and set it to its default.

//Passing argument: value vs reference

const flight = 'LH234';
const jonathan = {
  name: 'Jonathan Peral',
  passport: 2343434333,
};

const checkIn = function (flightNum, passenger) {
  //Directly changing parameters is not good practice
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name; //? This will change the original object, because objects - reference types - are stored in the memory heap
  //? and this function's parameters directly manipulates the object.

  //   passenger.passport == 2343434333
  //     ? alert('Check in!')
  //     : alert('Wrong passport!');
};
checkIn(flight, jonathan);
console.log('flight:', flight);
console.log('jonathan:', jonathan);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonathan);
console.log('jonathan:', jonathan);

//First class and higher-order functions
