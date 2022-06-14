'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2022-06-05T13:32:17.929Z',
    '2022-06-06T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDates = function (date, locale) {
  const displayDate = date;

  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(date, new Date());

  if (daysPassed == 0) return `Today`;
  else if (daysPassed == 1) return `Yesterday`;
  else if (daysPassed > 1 && daysPassed < 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movements = acc.movements;
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const displayDate = formatMovementDates(
      new Date(acc.movementsDates[i]),
      acc.locale
    );

    const formattedMov = new Intl.NumberFormat(acc.locale, {
      style: 'currency',
      currency: acc.currency,
    }).format(mov.toFixed(2));

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formattedBal = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(acc.balance.toFixed(2));
  labelBalance.textContent = `${formattedBal}`;
};

const calcDisplaySummary = function (acc) {
  const formattedSum = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  });
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formattedSum.format(incomes.toFixed(2))}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formattedSum.format(Math.abs(out).toFixed(2))}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formattedSum.format(interest.toFixed(2))}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const addDate = function (acc) {
  const now = new Date();

  //*using .toISOString() method to push the
  //*current date into the same format as the
  //*other dates stored in the account
  acc.movementsDates.push(now.toISOString());

  console.log(acc.movementsDates);
};

///////////////////////////////////////
// Event handlers

//Fake always logged in
let currentAccount;

currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

//Experimenting with API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};

const locale = currentAccount.locale;

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    setTimeout(() => {
      // Add Date to new movement
      addDate(currentAccount);

      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      // Update UI
      updateUI(currentAccount);
    }, 5000);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add Date
      addDate(currentAccount);

      // Update UI
      updateUI(currentAccount);
    }, 5000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);
// console.log(0.1 + 0.2);
// console.log(+'23' + 3);

// //Parsing
// console.log(Number.parseInt('23px', 10));
// console.log(Number.parseInt('01010px', 2));

// //check if value is not a number
// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.isNaN(+'e23x'));

// //check if value is a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite(20 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.2));

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// console.log(Math.min(4, 5, 12, -200, 3, 3));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// const randomInt = (min, max) => Math.trunc(Math.random() * (max - min)) + min;

// console.log(randomInt(4, 15));

// console.log('Math.round(23.9):', Math.round(23.9));
// console.log('Math.round(23.9):', Math.round(23.3));
// console.log(Math.ceil(23.9));
// console.log(Math.floor(23.9));

// console.log((2.8).toFixed(0));

// document.querySelector('body').addEventListener('click', () => {
//   [...document.querySelectorAll('.movements__row')].forEach((curr, i) => {
//     if (i % 2 == 0) curr.style.backgroundColor = '#d138c6';
//     else curr.style.backgroundColor = '#559ff2';
//   });
// });

//287,460,000,000
// const diameter = 287_460_000_000; //'_' numeric separators
// console.log(diameter);

// const priceCents = 345_99;
// console.log(priceCents);

// const transferFee = 15_00;
// const transferFee2 = 1_500;

// //! Note: number separators can only be placed between to numbers
// const PI = 3.141_5;
// console.log(PI);

// //!number separators will not work in this case.
// console.log(Number('230_000'));

// console.log(2 ** 53 - 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(9928059824098240968029486092486n);

// //*when not using BigInt, precision can be lost during operations
// console.log(200000000000000000000 + 200000000000200000100);
// console.log(200000000000000000000n + 200000000000200000100n);

// const huge = 20928309280928029820298029n;
// const num = 23;

// console.log(huge * BigInt(num));

// //Logical operators are the exception when performing operations between bigint and number data types
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20n == 20);

// //* Math operations cannot be used on bigInt data types
// // console.log(Math.sqrt(15n));

//Create a date:
// const now = new Date();
// console.log(now);
// //! Months begin at 0
// console.log(now.getDate(), now.getMonth() + 1, now.getFullYear());

// console.log(new Date('Aug 02 2020 18:04:31')); //*Doing this is quite unreliable, unless the string is created under the JS format
// console.log(new Date('December 24, 2015')); //*Doing this is quite unreliable, unless the string is created under the JS format

// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 14, 23, 5));

// console.log(new Date(2037, 10, 31)); //Javascript autocorrect dates - Nov only has 30 days.

// console.log(new Date(0)); //Date unix was created
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear(), future.getYear()); //.getYear() method represents years relative to 1900, which is annotated as year 0.
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); //This follows an international standard
// //*This will return the timestamp - the amount of milliseconds past 1 Jan 1970.
// const timestamp = future.getTime();
// console.log(timestamp);
// console.log(new Date(timestamp)); //Will return the date of the timestamp
// console.log(Date.now());

// //* Date object properties have getters and setters.
// future.setFullYear(2040);
// console.log(future);

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future); //Date in milliseconds - starting from 1 Jan, 1970 - Unix Time.

// const daysPassed = (date1, date2) => new Date(Math.abs(date2 - date1));

// const present = new Date();

// console.log(new Date(daysPassed(present, future)));

// const num = 378888.23;

// const option = {
//   style: 'currency',
//   unit: 'mile-per-hour',
//   currency: 'USD',
//   // useGrouping: false,
// };

// console.log(new Intl.NumberFormat('en-US', option).format(num));
// console.log(new Intl.NumberFormat('es-SP', option).format(num));
// console.log(new Intl.NumberFormat(navigator.language, option).format(num));
const ingredients = [`olives`, `spinach`];

const timer = setTimeout(
  (ing1, ing2) => console.log(`Here's your pizza:\ning1:${ing1}\ning2:${ing2}`),
  1000,
  ...ingredients
);
console.log();

if (ingredients.includes(`spinach`)) clearTimeout(timer);
