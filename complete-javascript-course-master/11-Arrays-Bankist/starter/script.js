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

const displayMovements = function (acc, sorted = false) {
  const movements = sorted
    ? acc.movements.slice().sort((a, b) => (a > b ? 1 : -1))
    : acc.movements;

  containerMovements.innerHTML = ``;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}€</div>
      </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = function (acc) {
  const movements = acc.movements;
  const balance = movements.reduce((acc, curr) => (acc += curr));
  acc.balance = balance;
  labelBalance.textContent = `${balance}€`;
};

const calcDisplaySummary = function (acc) {
  const movements = acc.movements;
  const interestRate = acc.interestRate;
  const incomes = movements
    .filter(map => map > 0)
    .reduce((acc, i) => acc + i, 0);

  labelSumIn.textContent = `${incomes}€`;

  const expenses = movements
    .filter(mov => mov < 0)
    .reduce((acc, i) => acc + i, 0);

  labelSumOut.textContent = `${Math.abs(expenses)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(mov => mov * (interestRate / 100))
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${Math.trunc(interest * 100) / 100}€`; //!Round the value, multiplied by 100, then divided by 100 to round it to 2 decimal places.
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(n => n[0])
      .join('');
  });
};

createUserNames(accounts);

const updateUI = function (acc, sorted = false) {
  //Display Movements
  displayMovements(acc, sorted);

  //Display Summary
  calcDisplaySummary(acc);

  //Display Balance
  calcPrintBalance(acc);
};

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  //Prevent form from submitting
  event.preventDefault();
  //Note: .find is especially powerful when we are looking for objects with unique values
  currentAccount = accounts.find(
    acc => acc.userName == inputLoginUsername.value
  );

  if (inputLoginPin?.value == Number(currentAccount?.pin)) {
    //Clearing input text content
    inputLoginUsername.value = inputLoginPin.value = ``; //? Assignment operator works from right-to-left
    inputLoginPin.blur();

    //Display UI and welcome message
    labelWelcome.textContent = `Welcome, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 100;

    //Displaying UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();

  const currentAmount = currentAccount?.balance;
  const transferAmount =
    Number(inputTransferAmount.value) > 0 &&
    Number(inputTransferAmount.value <= currentAmount)
      ? Number(inputTransferAmount.value)
      : undefined;
  const transferToAcc = accounts.find(
    acc => acc.userName == inputTransferTo.value
  );

  if (
    transferToAcc &&
    transferAmount &&
    transferToAcc?.userName !== currentAccount.userName
  ) {
    //Pushing negative movement on current Account
    currentAccount.movements.push(transferAmount * -1);

    //Pushing positive movement on receiver Account
    transferToAcc.movements.push(transferAmount);

    //Updating UI
    //Todo: Make this line ar; instead of displaying all of the already displayed movements; also, display proper time of action
    updateUI(currentAccount);
  }

  //Cleaning the input fields
  inputTransferTo.blur();
  inputTransferAmount.blur();
  inputTransferTo.value = inputTransferAmount.value = ``;
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  //inputCloseUsername
  //inputClosePin

  const closeUsername = inputCloseUsername.value;
  const closePin = Number(inputClosePin.value);
  const confirmedAccount =
    currentAccount.userName == closeUsername && currentAccount.pin == closePin
      ? true
      : false;

  //Closing the account
  if (confirmedAccount) {
    console.log('closing account');
    //Removing account from accounts array
    const accIndex = accounts.findIndex(
      acc => acc.userName == currentAccount.userName
    );
    console.log(accIndex);

    accounts.splice(accIndex, 1);

    //Removing UI
    containerApp.style.opacity = 0;

    //Display Welcome message
    labelWelcome.textContent = `Log in to get started`;
  }

  //Clearing input fields
  inputCloseUsername.blur();
  inputClosePin.blur();
  inputCloseUsername.value = inputClosePin.value = ``;
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const loanAmount =
    Number(inputLoanAmount.value) > 0
      ? Number(inputLoanAmount.value)
      : undefined;

  //Clearing input fields
  inputLoanAmount.blur();
  inputLoanAmount.value = ``;

  if (!loanAmount) return;

  //*Checks whether user meets the requirement for loan
  //?req: any deposit > 10% of request
  const requirement = currentAccount.movements.some(
    mov => mov >= loanAmount * 0.1
  );

  console.log(requirement);
  requirement && console.log(currentAccount.movements.push(loanAmount));

  //Update UI
  updateUI(currentAccount);
});

let sorted = false;

btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  sorted = !sorted;
  //Sort/return to normal, and Update UI
  updateUI(currentAccount, sorted);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

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

// const moveUsd = movements.map(mov => eurToUsd * mov); //*.map does not mutate arrays

// console.log(movements);
// console.log(moveUsd);

// const arrUSD = [];
// for (const move of movements) {
//   arrUSD.pu (move * eurToUsd);
// }

// console.log(arrUSD);

// //* The big difference between .map and .forEach is that, map assigns the
// //* returned elements to a new array, and forEach only applies a change to
// //* each element of the object array, without assigning anything
// const strMove = movements.map(function (mov, i) {
//   const type = mov > 0 ? `deposited` : `withdrew`;
//   return `Movement ${i + 1}: You ${type} ${Math.abs(mov)}`;
// });

// console.log(strMove);

//Filter

//!The idea is to return a boolean value, whether the element meets the re-
//! quirements - i.e. true or false - it is passed unto the new array
// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);

// console.log(deposits);
// console.log(withdrawals);

//* accumulator -> snowball - will be the last value that we 'reduce' to.
//* The second parameter of the .reduce method is the initial value of the acc
// const balance = movements.reduce((acc, curr) => (acc += curr), 0);

// console.log(balance);

// //Maximum value of movement array, using reduce
// //! The .reduce method is the most powerful method of arrays.
// const maxValue = movements.reduce(
//   (acc, curr) => (acc = acc < curr ? curr : acc),
//   movements[0]
// );

// console.log(maxValue);

// //? Coding Challenge #2

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages
//     .map(curr => (curr = curr <= 2 ? 2 : 16 + curr * 4))
//     .filter(curr => curr >= 18);

//   const avgHumanAges = humanAges.reduce(
//     (acc, curr, undefined, arr) => (acc += curr / arr.length),
//     0
//   );
//   console.log(
//     `The human ages of the dogs are: ${humanAges}.
//     \nAnd the average human ages are: ${avgHumanAges}`
//   );
// };

// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// //? Coding Challenge #2 Finished

// const eurToUsd = 1.1;

// // pipeline
// const totalDepositUSD = Math.trunc(
//   movements
//     .filter(mov => mov > 0)
//     // .map(mov => mov * eurToUsd)
//     .map((mov, i, arr) => (mov *= eurToUsd)) //We can use the arr arg, to debug.
//     .reduce((acc, i) => (acc += i), 0)
// );

// console.log(totalDepositUSD);

// //*Note: It is bad practice in JS to chain methods that mutate the original variable, like the .splice or .reverse method.;

//?Coding Challenge #3

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages
//     .map(curr => (curr = curr <= 2 ? 2 : 16 + curr * 4))
//     .filter(curr => curr >= 18);

//   const avgHumanAges = humanAges.reduce(
//     (acc, curr, undefined, arr) => (acc += curr / arr.length),
//     0
//   );
//   console.log(
//     `The human ages of the dogs are: ${humanAges}.
//     \nAnd the average human ages are: ${avgHumanAges}`
//   );
// };

// //?Finished Challenge #3!

//!Using the .find method to acquire the first withdrawal
// const firstWith = movements.find(mov => mov < 0); //Will return the first element in the array that satisfies the condition of the callback function

// console.log(firstWith);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner == 'Jessica Davis');
// console.log(account);

//Every returns true if all of the elements in an array meet a condition

// console.log(accounts[3].movements.every(mov => mov > 0));

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const arrDeep = [
//   [[1, 2], 3],
//   [4, 5, 6],
//   [7, [8, 9]],
// ];

// console.log(arr.flat()); //This works
// console.log(arrDeep.flat()); //However, the .flat() method only goes one level deep by default
// console.log(arrDeep.flat(2)); //we can specify the level of depth that we want it to flatten out

// let accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// //*Maps values into the array, then flattens it
// //?Note: .flatMap() method takes in argument for level of depth of flattening

// accountMovements = accounts.flatMap(acc => acc.movements);
// console.log(accountMovements);

// const overallBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => (acc += mov));

// console.log(overallBalance);

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// console.log(owners.sort()); //!.sort() method mutates arrays

// //Numbers
// console.log(movements);
// // console.log(movements.sort());

// //return < 0, a, b
// //return > 0, b, a
// console.log(movements.sort((a, b) => (a > b ? 1 : -1)));

//When using the Array object constructor, only the .fill() method can be used
// const oldArr = [1, 4, 6, 3030, 383, 48];
// const arr = new Array(7);
// //* Can take up to 3 args; and it's much like slice()
// //* First argument is the value which we are going to "fill"
// //* Second is the starting argument - index of which we will start to fill -
// //* and third is the ending argument for filling- inclusive.
// arr.fill(1, 4, 6);
// console.log(arr);

// console.log(oldArr.fill(23, 0, 2));

// //Array.from()
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from(
//   { length: 7 },
//   (_ /*throwaway param*/, index) => (index += 1)
// );
// console.log(z);

// const randomDiceRolls = Array.from({ length: 100 }, () =>
//   Math.trunc(Math.random() * 6 + 1)
// );
// console.log(randomDiceRolls);

// labelBalance.addEventListener('click', function () {
//   //*the second argument of .from() Array object method functions as a .map() callback function
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     curr => curr.textContent.replace('€', '')
//   );

//   console.log(movementsUI);

//   //?Variance of the above - with destructuring:
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
//     curr => curr.textContent.replace('€', '')
//   );
//   console.log(movementsUI2);
// });

//? Challenge #4:

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const isEatingRight = function (currFood, recommended) {
  return currFood < recommended * 1.1 && currFood > recommended * 0.9
    ? true
    : false;
};

const isEatingTooLittle = function (currFood, recommended) {
  return currFood < recommended * 0.9 ? true : false;
};

const isEatingTooMuch = function (currFood, recommended) {
  return currFood > recommended * 1.1 ? true : false;
};

//1.
dogs.forEach(
  curr =>
    (curr.recommendedFood = Math.trunc(curr.weight ** 0.75 * 28 * 100) / 100)
);

//2.
const sarahDog = dogs.find(curr => curr.owners.includes('Sarah'));
console.log('sarahDog:', sarahDog);

if (isEatingRight(sarahDog.curFood, sarahDog.recommendedFood))
  console.log(`Sarah's dog is eating okay!`);
else if (isEatingTooLittle(sarahDog.curFood, sarahDog.recommendedFood))
  console.log(`Sarah's dog is eating too little!`);
else console.log(`Sarah's dog is eating too much!`);

//3.
const ownersEatTooMuch = dogs
  .filter(curr => isEatingTooMuch(curr.curFood, curr.recommendedFood))
  .flatMap(curr => curr.owners);
const ownersEatTooLittle = dogs
  .filter(curr => isEatingTooLittle(curr.curFood, curr.recommendedFood))
  .flatMap(curr => curr.owners);

//4.
console.log(
  `${ownersEatTooLittle.join(
    ' and '
  )}'s dogs eat too little,\n${ownersEatTooMuch.join(
    ' and '
  )}'s dogs eat too much`
);

//5.
//Checks whether there's any dog eating the exact recommended amount
console.log(dogs.some(curr => curr.curFood === curr.recommendedFood));

//6.
//Checks whether there's any dog eating in the recommended range
console.log(
  dogs.some(curr => isEatingRight(curr.curFood, curr.recommendedFood))
);

//7.
const dogsEatingOkay = dogs.filter(curr =>
  isEatingRight(curr.curFood, curr.recommendedFood)
);
console.log('dogsEatingOkay:', dogsEatingOkay);

//8.
const dogsSorted = dogs
  .slice()
  .sort((a, b) => (a.recommendedFood > b.recommendedFood ? 1 : -1));
console.log('dogsSorted:', dogsSorted);

//?Challenge #4 completed!
