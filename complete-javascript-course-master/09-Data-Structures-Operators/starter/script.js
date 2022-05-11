'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   //*Here we destrcture in the function parameters ahead of time
//   //!Caution: Make sure names of the parameters are the same as the properties of the object that you are passing into the function
//   //!If we're not sure, we can set default values, for good measure - we can also change the name of the passed properties, if we wish
//   orderReceived: function ({ time: t = '00:00', name: n = 'John Doe' }) {
//     console.log(
//       `${n} just made an order at ${this.name}; his order came in at ${t}`
//     );
//   },

//   orderPasta: function (ingredient1, ingredient2, ingredient3) {
//     console.log(
//       `Here's your delicious pasta with ${ingredient1}, ${ingredient2}, and ${ingredient3}!`
//     );
//   },

//   orderPizza: function (ingredient1, ...otherIngredients) {
//     console.log('ingredient1:', ingredient1);
//     console.log('otherIngredients:', otherIngredients);
//   },
// };

// restaurant.orderReceived({
//   names: 'Jonathan Peral',
//   time: '01:52',
//   sex: 'Male',
// });

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// //* Destructuring array, in order to switch the order.
// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// const [starter, main] = restaurant.order(2, 1);

// console.log(starter, main);

// //!Nested destructuring
// const nestedArray = [2, 4, [5, 6]];
// const [i, , [x, y]] = nestedArray;

// console.log(i, x, y);

// //* Default values
// //!This can be useful when getting data, for example, from an API; sometimes we don't know the length of the arrays

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//* Destructuring objects
//! Caution: when destructuring objects, you MUST make sure that the name of the variables are the same
//! as the names of the properties in the object; otherwise, they will be 'undefined'.

// const { name, openingHours, categories } = restaurant;
// console.log('name:', name);
// console.log('openingHours:', openingHours);
// console.log('categories:', categories);

// //!In case we want the variables to have different names from the properties, this is how we do so:
// const { name: restName, openingHours: opHours, categories: cat } = restaurant;
// console.log('restName:', restName);
// console.log('opHours:', opHours);
// console.log('cat:', cat);

// //* Setting default values in destructures
// //!Highly useful for when we're not sure if a property is in the object!
// const {
//   menu: menu2 = [],
//   starterMenu: starter = [],
//   categories: cat2,
// } = restaurant;
// console.log('menu:', menu2);
// console.log('starterMenu:', starter);
// console.log('cat2:', cat2);

// //*Mutating variables
// const {
//   menu: menu2 = [],
//   starterMenu: starter = [],
//   categories: cat2,
// } = restaurant;

// let a = 11;
// let b = 99;
// const obj = { a: 23, b: 7, c: 14 };

// console.log('Before mutation:');
// console.log('a:', a);
// console.log('b:', b);

// ({ a, b } = obj);

// console.log('After mutation:');
// console.log('a:', a);
// console.log('b:', b);

// //*Destructuring objects inside of objects
// const {
//   openingHours: {
//     fri: { open: o, close: c },
//   },
// } = restaurant;

// console.log('open:', o);
// console.log('close:', c);
// console.log('oneError:', oneError);
// console.log('two:', two);

//* Using the spread operator.
// //! It essentially takes all of the values of an array and inputs them at that given part of the new array; much like destructuring the array
// //!- except we do not give it variables to store the destructured values.
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr, 10, 11];
// console.log('arr:', arr);
// console.log('newArr:', newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log('newMenu:', newMenu);

// //*Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// //*Join 2 Arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const joinedArr = [...arr1, ...arr2];
// console.log('joinedArr:', joinedArr);

// //Iterables are: strings, arrays, maps, sets. //!However, they are not objects!
// const nameOfMine = 'Jonathan';
// console.log('nameOfMine spread:', ...nameOfMine);

// //* Calling orderPasta function
// const listOfIngredients = ['alio', 'olio', 'peperoncino'];

// // const listOfIngredients = [
// //   prompt("Let's make pasta! Ingredient 1: "),
// //   prompt('Ingredient 2: '),
// //   prompt('Ingredient 3: '),
// // ];

// restaurant.orderPasta(...listOfIngredients);

// // //!Since 2018, JS's spread operator supports objects
// // console.log('restaurant:', { ...restaurant });

// //! SPREAD because of right-hand side of the assignment operator
// const arr = [1, 2, ...[3, 4]];

// //! REST because on left-hand side of the assignment operator
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log('arr:', arr);
// console.log('a:', a);
// console.log('b:', b);
// console.log('others:', others);

// //* REST on arrays
// const [...completeMenu] = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log('completeMenu:', completeMenu);

// //* REST on objects
// const { sat, ...weekdays } = restaurant.openingHours;

// console.log('sat:', sat);
// console.log('weekdays:', weekdays);

// //* REST on paramaters of a function
// //! REST keyword on parametsers is commonly used in JS

// function sum(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//   console.log('the total sum is:', sum);
// }

// sum(1, 5, 3, 3);

// const x = [23, 5, 7];

// sum(...x);

// const ingredients = ['tomato sauce', 'mozzarella', 'alio', 'olio', 'basil'];
// restaurant.orderPizza(...ingredients);

// //* Short circuiting using || operator

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //* Short circuiting using && operator - works opposite to the || operand
// // Returns the first falsy value, without considering the other values
// console.log(0 && 'Jonathan');
// console.log(7 && 'Jonathan');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('pasta', 'pasta');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10; //*Nullish coalescing operator, introduced in ES2020
// //!Nullish values are: null or undefined - not the same as falsy values
// console.log('guestCorrect:', guestCorrect);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Pizzeria Italiana',
//   owner: 'Giovanni Rossi',
// };

// // //10 is being set as a default value if rest2.numGuests is falsy
// // rest2.numGuests = rest2.numGuests || 10;

// // console.log('rest2:', rest2);

// //!Exact same thing as before, the '||=' operator assigns a value to the variable if it is falsy, that includes a value of 0
// rest2.numGuests = 0;
// // rest2.numGuests ||= 10;

// // console.log('rest2.numGuests:', rest2.numGuests);

// //!Does the exact same as '||=', but with nullish values - null, or undefined.
// rest2.numGuests ??= 10;

// console.log('rest2.numGuests:', rest2.numGuests);

// //!If rest2.owner is truthy, it will set the 'anonymous' value.
// rest2.owner &&= 'anonymous';
// console.log(rest2.owner);

//?CHALLENGE 1

const players1 = [];
const players2 = [];

const gk1 = 'John Cena';
const fieldPlayers1 = [
  'Messi',
  'Gaynaldo',
  'Ronaldo',
  'Maradona',
  'Madonna',
  'Michael Jackson',
  'Michael Jordan',
  'Justin Bieber',
  'Selena Glomez',
  'Kaka',
];

const gk2 = 'Shakira';
const fieldPlayers2 = [
  'Sami nami na',
  'Waka Waka eh eh',
  'this is for africa',
  'Pique',
  'Gayque',
  'Ronaldinho',
  'Soxer',
  '64',
  'Teenage Mutant Ninja',
  'Turtle',
];

players1.push(gk1, ...fieldPlayers1);
players2.push(gk2, ...fieldPlayers2);

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const players2Final = [...players2, 'GayNaldo', 'Babaldo', 'Feraldo'];

const game = {
  odds: ['team1', 'draw', 'team2'],
};

const printGoals = function (...player) {
  console.log(player);

  console.log('Total number of goals: ' + player.length);
};

const team1 = {
  name: 'Liverpool FC',
  roster: players1Final,
  odds: 0.54,
};

const team2 = {
  name: 'Santos FC',
  roster: players2Final,
  odds: 0.54,
};

printGoals('Legayski', 'Gaynaldo');

team2.odds > team1.odds && console.log('Team1 Wins!');
team1.odds > team2.odds && console.log('Team2 Wins!');
team1.odds > team2.odds || team2.odds > team1.odds || console.log('Draw!');
