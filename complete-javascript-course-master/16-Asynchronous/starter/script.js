'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.official}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)} Million</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(data.languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbor = function (name) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${name}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Render country
//     renderCountry(data);

//     //Get Neighbor Country
//     const [neighbor] = data.borders;

//     if (!neighbor) return;

//     const requestNeighbor = new XMLHttpRequest();
//     requestNeighbor.open(
//       'GET',
//       `https://restcountries.com/v3.1/alpha/${neighbor}`
//     );
//     requestNeighbor.send();

//     requestNeighbor.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);

//       renderCountry(data, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('russia');

const request = fetch(`https://restcountries.com/v3.1/name/cuba`);

console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/name/${neighbour}`).then(
        response
      );
    });
};

getCountryData('cuba');
