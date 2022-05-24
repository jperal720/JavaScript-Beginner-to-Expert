'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ``;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}</div>
      </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4)); //Does not include the 4
// console.log(arr.slice(-2, -1));

// //Splice
// // console.log(arr.splice(2)); //!Extracts from the [2] element until the end of the array, from the array
// console.log(arr.splice(-1));
// console.log(arr);

// //Reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); //Reverse method mutates the original array, much like splice
// console.log(arr2);

// //Concat
// const letters = arr.concat(arr2);
// console.log('arr:', arr);
// console.log('arr2:', arr2);
// console.log('letters:', letters);
// console.log('Destructuring both arrays: ', [...arr, ...arr2]);

// //Join
// console.log(letters.join(' - ')); //!Join returns a string, with each element separated by the argument (in this case: ' - ')

// const arr = [23, 11, 56];
// console.log(arr[0]);
// console.log(arr.at(0));

// //!getting the last element of an array - before .at()
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// //* after .at()
// console.log(arr.at(-1));
// const name = 'jonathan';
// console.log(name.at(-1));

//*forEach method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, move] of movements.entries()) {
//   if (move > 0) console.log(`Move ${i + 1}: you deposited ${move}`);
//   else console.log(`Move ${i + 1}: you withdrew ${Math.abs(move)}`);
// }

// //* The forEach, passes the element in which we iterate through the array, the index of said element, and the array itself
// movements.forEach(function (move, i, array) {
//   if (move > 0) console.log(`Move ${i + 1}: You deposited ${move}`);
//   else console.log(`Move ${i + 1}: You withdrew ${Math.abs(move)}`);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //*The forEach method passes to the callback function - in this order - the value, key, and complete map of each element in the map.
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log('currenciesUnique:', currenciesUnique);

// //!Although the first 2 params are the same, if the developers would've omitted one,
// //!it would've created confusion amongst developers
// currenciesUnique.forEach(function (value, _key, map) {
//   console.log(`${key}: ${value}`);
// });

// //? Challenge #1:

// const juliaDogs = [3, 5, 2, 12, 7];
// const kateDogs = [4, 1, 15, 8, 3];

// //? Note: Keep in mind that it is bad practice to mutate function parameters
// const checkDogs = function (dogsJulia, dogsKate) {
//   const updatedDogsJulia = [...dogsJulia.slice(1, -2)];
//   const allDogs = updatedDogsJulia.concat(dogsKate);
//   allDogs.forEach(function (age, i) {
//     age >= 3
//       ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
//       : console.log(
//           `Dog number ${i + 1} is still a puppy, and is ${age} years old`
//         );
//   });
// };

// checkDogs(juliaDogs, kateDogs);

// //? Challenge #1 completed

const eurToUsd = 1.1;
const moveUsd = movements.map(mov => eurToUsd * mov); //*.map does not mutate arrays

console.log(movements);
console.log(moveUsd);

const arrUSD = [];
for (const move of movements) {
  arrUSD.push(move * eurToUsd);
}

console.log(arrUSD);

//* The big difference between .map and .forEach is that, map assigns the
//* returned elements to a new array, and forEach only applies a change to
//* each element of the object array, without assigning anything
const strMove = movements.map(function (mov, i) {
  const type = mov > 0 ? `deposited` : `withdrew`;
  return `Movement ${i + 1}: You ${type} ${Math.abs(mov)}`;
});

console.log(strMove);
