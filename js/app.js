'use strict';

let operatingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomCus(min, max) {

  return Math.floor(Math.random() * (max - min) + min);
}



const seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSales: 6.3,
  numOfCustPerHour: [],
  amountPurchEachHour: [],
  totalCookiesPerDay: 0,

  getCustmerNumber: function () {

    for (let i = 0; i < operatingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCust, this.maxCust);
      this.numOfCustPerHour.push(randomFinal);
      // console.log(randomFinal);
    }
  },
  calculateAmountCookiesPerHour: function () {

    for (let i = 0; i < operatingHours.length; i++) {
      const perHour = Math.ceil(this.numOfCustPerHour[i] * this.avgCookiesPerSales);
      this.amountPurchEachHour.push(perHour);
      this.totalCookiesPerDay += this.amountPurchEachHour[i];
      // console.log(perHour);
    }
    // console.log('total', this.totalCookiesPerDay);
  },
  render: function () {
    const contianer = document.getElementById('select');
    const articlE1 = document.createElement('article');
    contianer.appendChild(articlE1);
    const pEL = document.createElement('p');
    articlE1.appendChild(pEL);
    pEL.textContent = this.location;
    const ulE1 = document.createElement('ul');
    articlE1.appendChild(ulE1);
    for (let i = 0; i < operatingHours.length; i++) {
      let liE1 = document.createElement('li');
      ulE1.appendChild(liE1);
      liE1.textContent = `${operatingHours[i]} : ${this.amountPurchEachHour[i]} cookies`;
    }
    const p2E1 = document.createElement('p');
    articlE1.appendChild(p2E1);
    p2E1.textContent = `Total: ${this.totalCookiesPerDay}`;
  }
};

seattle.getCustmerNumber();
seattle.calculateAmountCookiesPerHour();
seattle.render();

const tokyo = {
  location: 'Tokyo',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSales: 6.3,
  numOfCustPerHour: [],
  amountPurchEachHour: [],
  totalCookiesPerDay: 0,
  getCustmerNumber: function () {

    for (let i = 0; i < operatingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCust, this.maxCust);
      this.numOfCustPerHour.push(randomFinal);
      // console.log(randomFinal);
    }
  },
  calculateAmountCookiesPerHour: function () {

    for (let i = 0; i < operatingHours.length; i++) {
      const perHour = Math.ceil(this.numOfCustPerHour[i] * this.avgCookiesPerSales);
      this.amountPurchEachHour.push(perHour);
      this.totalCookiesPerDay += this.amountPurchEachHour[i];
      // console.log(perHour);
    }
    // console.log('total', this.totalCookiesPerDay);
  },
  render: function () {
    const contianer = document.getElementById('select');
    const articlE1 = document.createElement('article');
    contianer.appendChild(articlE1);
    const pEL = document.createElement('p');
    articlE1.appendChild(pEL);
    pEL.textContent = this.location;
    const ulE1 = document.createElement('ul');
    articlE1.appendChild(ulE1);
    for (let i = 0; i < operatingHours.length; i++) {
      let liE1 = document.createElement('li');
      ulE1.appendChild(liE1);
      liE1.textContent = `${operatingHours[i]} : ${this.amountPurchEachHour[i]} cookies`;
    }
    const p2E1 = document.createElement('p');
    articlE1.appendChild(p2E1);
    p2E1.textContent = `Total: ${this.totalCookiesPerDay}`;
  }
};


tokyo.getCustmerNumber();
tokyo.calculateAmountCookiesPerHour();
tokyo.render();



const dubai = {
  location: 'Dubai',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSales: 6.3,
  numOfCustPerHour: [],
  amountPurchEachHour: [],
  totalCookiesPerDay: 0,
  getCustmerNumber: function () {

    for (let i = 0; i < operatingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCust, this.maxCust);
      this.numOfCustPerHour.push(randomFinal);
      // console.log(randomFinal);
    }
  },
  calculateAmountCookiesPerHour: function () {

    for (let i = 0; i < operatingHours.length; i++) {
      const perHour = Math.ceil(this.numOfCustPerHour[i] * this.avgCookiesPerSales);
      this.amountPurchEachHour.push(perHour);
      this.totalCookiesPerDay += this.amountPurchEachHour[i];
      // console.log(perHour);
    }
    // console.log('total', this.totalCookiesPerDay);
  },
  render: function () {
    const contianer = document.getElementById('select');
    const articlE1 = document.createElement('article');
    contianer.appendChild(articlE1);
    const pEL = document.createElement('p');
    articlE1.appendChild(pEL);
    pEL.textContent = this.location;
    const ulE1 = document.createElement('ul');
    articlE1.appendChild(ulE1);
    for (let i = 0; i < operatingHours.length; i++) {
      let liE1 = document.createElement('li');
      ulE1.appendChild(liE1);
      liE1.textContent = `${operatingHours[i]} : ${this.amountPurchEachHour[i]} cookies`;
    }
    const p2E1 = document.createElement('p');
    articlE1.appendChild(p2E1);
    p2E1.textContent = `Total: ${this.totalCookiesPerDay}`;
  }
};



dubai.getCustmerNumber();
dubai.calculateAmountCookiesPerHour();
dubai.render();


const paris = {
  location: 'Paris',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSales: 6.3,
  numOfCustPerHour: [],
  amountPurchEachHour: [],
  totalCookiesPerDay: 0,
  getCustmerNumber: function () {

    for (let i = 0; i < operatingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCust, this.maxCust);
      this.numOfCustPerHour.push(randomFinal);
      // console.log(randomFinal);
    }
  },
  calculateAmountCookiesPerHour: function () {

    for (let i = 0; i < operatingHours.length; i++) {
      const perHour = Math.ceil(this.numOfCustPerHour[i] * this.avgCookiesPerSales);
      this.amountPurchEachHour.push(perHour);
      this.totalCookiesPerDay += this.amountPurchEachHour[i];
      // console.log(perHour);
    }
    // console.log('total', this.totalCookiesPerDay);
  },
  render: function () {
    const contianer = document.getElementById('select');
    const articlE1 = document.createElement('article');
    contianer.appendChild(articlE1);
    const pEL = document.createElement('p');
    articlE1.appendChild(pEL);
    pEL.textContent = this.location;
    const ulE1 = document.createElement('ul');
    articlE1.appendChild(ulE1);
    for (let i = 0; i < operatingHours.length; i++) {
      let liE1 = document.createElement('li');
      ulE1.appendChild(liE1);
      liE1.textContent = `${operatingHours[i]} : ${this.amountPurchEachHour[i]} cookies`;
    }
    const p2E1 = document.createElement('p');
    articlE1.appendChild(p2E1);
    p2E1.textContent = `Total: ${this.totalCookiesPerDay}`;
  }
};



paris.getCustmerNumber();
paris.calculateAmountCookiesPerHour();
paris.render();



const lima = {
  location: 'Lima',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSales: 6.3,
  numOfCustPerHour: [],
  amountPurchEachHour: [],
  totalCookiesPerDay: 0,
  getCustmerNumber: function () {

    for (let i = 0; i < operatingHours.length; i++) {
      let randomFinal = getRandomCus(this.minCust, this.maxCust);
      this.numOfCustPerHour.push(randomFinal);
      // console.log(randomFinal);
    }
  },
  calculateAmountCookiesPerHour: function () {

    for (let i = 0; i < operatingHours.length; i++) {
      const perHour = Math.ceil(this.numOfCustPerHour[i] * this.avgCookiesPerSales);
      this.amountPurchEachHour.push(perHour);
      this.totalCookiesPerDay += this.amountPurchEachHour[i];
      // console.log(perHour);
    }
    // console.log('total', this.totalCookiesPerDay);
  },
  render: function () {
    const contianer = document.getElementById('select');
    const articlE1 = document.createElement('article');
    contianer.appendChild(articlE1);
    const pEL = document.createElement('p');
    articlE1.appendChild(pEL);
    pEL.textContent = this.location;
    const ulE1 = document.createElement('ul');
    articlE1.appendChild(ulE1);
    for (let i = 0; i < operatingHours.length; i++) {
      let liE1 = document.createElement('li');
      ulE1.appendChild(liE1);
      liE1.textContent = `${operatingHours[i]} : ${this.amountPurchEachHour[i]} cookies`;
    }
    const p2E1 = document.createElement('p');
    articlE1.appendChild(p2E1);
    p2E1.textContent = `Total: ${this.totalCookiesPerDay}`;
  }
};



lima.getCustmerNumber();
lima.calculateAmountCookiesPerHour();
lima.render();

