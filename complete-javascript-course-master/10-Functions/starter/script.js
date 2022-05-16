'use strict';

const bookings = [];

//Default parameters
const createBooking = function (
  flightNum = 'DE',
  numPassenger = 2,
  price = 199 * numPassenger //This only works when the param have been declared beforehand
) {
  //   //* Setting default parameters before ES6
  //   //Short circuiting
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};
createBooking('LH112');
createBooking('LH112', 20, 50);
