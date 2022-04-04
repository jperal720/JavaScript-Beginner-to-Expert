// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcAmplitude = function (temperature) {
//   let highest;
//   let lowest;

//   for (let i = 0; i < temperature.length; i++) {
//     let currentTemp = temperature[i];
//     if (typeof currentTemp !== 'number') continue;
//     else if (highest == null && lowest == null)
//       (highest = currentTemp), (lowest = currentTemp);
//     else if (currentTemp > highest) highest = currentTemp;
//     else if (currentTemp < lowest) lowest = currentTemp;
//   }

//   return highest - lowest;
// };

// console.log(`The temperature amplitude is ${calcAmplitude(temperature)}`);

// const temperature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperature2 = [-22, 2, 14, 20];

// const calcAmplitude = function (temperature1, temperature2) {
//   const temperature = temperature1.concat(temperature2);
//   console.log(temperature);
//   let highest;
//   let lowest;

//   for (let i = 0; i < temperature.length; i++) {
//     let currentTemp = temperature[i];
//     if (typeof currentTemp !== 'number') continue;
//     else if (highest == null && lowest == null)
//       (highest = currentTemp), (lowest = currentTemp);
//     else if (currentTemp > highest) highest = currentTemp;
//     else if (currentTemp < lowest) lowest = currentTemp;
//   }

//   return highest - lowest;
// };

// console.log(
//   `The temperature amplitude is ${calcAmplitude(temperature1, temperature2)}`
// );
const measureKelvin = function () {
  const measurement = {
    type: 'temperature',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius')),
  };

  //   console.table(measurement); //Handy for displaying objects in the console

  const kelvin = measurement.value + 273;

  return kelvin;
};

console.log(measureKelvin());
