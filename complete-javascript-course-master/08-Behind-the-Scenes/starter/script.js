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

var firstName = 'Matilda';

const jonathan = {
  firstName: 'Jonathan',
  lastName: 'Peral',
  birthYear: 2000,
  calcAge: function () {
    console.log("we're good");
    const birthYear = 2001;

    const self = this; //* by declaring self as this, which points to the global object here.
    const isMillenial = function () {
      return self.birthYear >= 1981 && self.birthYear <= 1996 ? true : false;
    };
    isMillenial();

    return 2037 - this.birthYear;
  },

  //!When accessing a property inside an object, that does not exist in that object we get 'undefined'
  greet: () => console.log(`Hey, I'm ${this.firstName}!`),
};

//*User Ctrl + Alt + W , and W, once again, to console.log() a variable that you're currently selecting!
jonathan.calcAge();
jonathan.greet();

console.log('firstName:', firstName);
