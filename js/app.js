'use strict';

//array of times of the day people will go in:

let storeHours = ['6am','7am', '8am','9am','10am','11am','12pm','1pm', '2pm','3pm','4pm','5pm','6pm','7pm'];


//object that contains keys and values:

let seattle = {
  location: 'seattle',
  minCustHour: 23,
  maxCustHour: 65,
  avgCookieCust: 6.3,
  custPerHour: [],
  totalCookies: 0,
  hourlySales: [], //cookies per hour being stored in an array
  genCustomers: function() {
    for (let i = 0; i < storeHours.length; i++){
      this.custPerHour.push (Math.floor(Math.random() * (this.maxCustHour - this.minCustHour - +1)+ this.minCustHour));
      // console.log(this.custPerHour);
    }
  },

  calcHourlySales: function(){
    this.genCustomers();
    // loop over hours array
    for (let i = 0; i < storeHours.length; i++){
      this.hourlySales.push (Math.ceil(this.custPerHour[i] * this.avgCookieCust));
      this.totalCookies += (this.hourlySales[i]);
      //this.totalCookies = this.totalCookies + this.hourlySales[i]
    }
  },

  renderCity: function(){
    this.calcHourlySales();
    let seattleList = document.getElementById('Seattle');
    for (let i = 0; i < storeHours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies`;
      seattleList.appendChild(listItem);
    }
    let totalSold = document.createElement('li');
    totalSold.textContent = `Total Sold: ${this.totalCookies}`;
    seattleList.appendChild(totalSold);

  }
};
seattle.renderCity();
seattle.genCustomers();
seattle.calcHourlySales();
// console.log(seattle.hourlySales);
// console.log(seattle.custPerHour);



let tokyo = {
  location: 'tokyo',
  minCustHour: 3,
  maxCustHour: 24,
  avgCookieCust: 1.2,
  custPerHour: [],
  totalCookies: 0,
  hourlySales: [], //cookies per hour being stored in an array
  genCustomers: function() {
    for (let i = 0; i < storeHours.length; i++){
      this.custPerHour.push (Math.floor(Math.random() * (this.maxCustHour - this.minCustHour - +1)+ this.minCustHour));
      // console.log(this.custPerHour);
    }
  },

  calcHourlySales: function(){
    this.genCustomers();
    // loop over hours array
    for (let i = 0; i < storeHours.length; i++){
      this.hourlySales.push (Math.ceil(this.custPerHour[i] * this.avgCookieCust));
      this.totalCookies += (this.hourlySales[i]);
      //this.totalCookies = this.totalCookies + this.hourlySales[i]
    }
  },
  renderCity: function(){
    this.calcHourlySales();
    let seattleList = document.getElementById('Tokyo');
    for (let i = 0; i < storeHours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies`;
      seattleList.appendChild(listItem);
    }
    let totalSold = document.createElement('li');
    totalSold.textContent = `Total Sold: ${this.totalCookies}`;
    seattleList.appendChild(totalSold);

  }
};
tokyo.renderCity();
tokyo.genCustomers();
tokyo.calcHourlySales();
console.log(tokyo.hourlySales);



let dubai = {
  location: 'dubai',
  minCustHour: 11,
  maxCustHour: 38,
  avgCookieCust: 3.7,
  custPerHour: [],
  totalCookies: 0,
  hourlySales: [], //cookies per hour being stored in an array
  genCustomers: function() {
    for (let i = 0; i < storeHours.length; i++){
      this.custPerHour.push (Math.floor(Math.random() * (this.maxCustHour - this.minCustHour - +1)+ this.minCustHour));
      // console.log(this.custPerHour);
    }
  },

  calcHourlySales: function(){
    this.genCustomers();
    // loop over hours array
    for (let i = 0; i < storeHours.length; i++){
      this.hourlySales.push (Math.ceil(this.custPerHour[i] * this.avgCookieCust));
      this.totalCookies += (this.hourlySales[i]);
      //this.totalCookies = this.totalCookies + this.hourlySales[i]
    }
  },
  renderCity: function(){
    this.calcHourlySales();
    let seattleList = document.getElementById('Dubai');
    for (let i = 0; i < storeHours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies`;
      seattleList.appendChild(listItem);
    }
    let totalSold = document.createElement('li');
    totalSold.textContent = `Total Sold: ${this.totalCookies}`;
    seattleList.appendChild(totalSold);

  }

};
dubai.renderCity();
dubai.genCustomers();
dubai.calcHourlySales();
console.log(dubai.hourlySales);




let paris = {
  location: 'paris',
  minCustHour: 20,
  maxCustHour: 38,
  avgCookieCust: 2.3,
  custPerHour: [],
  totalCookies: 0,
  hourlySales: [], //cookies per hour being stored in an array
  genCustomers: function() {
    for (let i = 0; i < storeHours.length; i++){
      this.custPerHour.push (Math.floor(Math.random() * (this.maxCustHour - this.minCustHour - +1)+ this.minCustHour));
      // console.log(this.custPerHour);
    }
  },

  calcHourlySales: function(){
    this.genCustomers();
    // loop over hours array
    for (let i = 0; i < storeHours.length; i++){
      this.hourlySales.push (Math.ceil(this.custPerHour[i] * this.avgCookieCust));
      this.totalCookies += (this.hourlySales[i]);
      //this.totalCookies = this.totalCookies + this.hourlySales[i]
    }
  },
  renderCity: function(){
    this.calcHourlySales();
    let seattleList = document.getElementById('Paris');
    for (let i = 0; i < storeHours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies`;
      seattleList.appendChild(listItem);
    }
    let totalSold = document.createElement('li');
    totalSold.textContent = `Total Sold: ${this.totalCookies}`;
    seattleList.appendChild(totalSold);

  }
};
paris.renderCity();
paris.genCustomers();
paris.calcHourlySales();
console.log(paris.hourlySales);




let lima = {
  location: 'lima',
  minCustHour: 2,
  maxCustHour: 16,
  avgCookieCust: 4.6,
  custPerHour: [],
  totalCookies: 0,
  hourlySales: [], //cookies per hour being stored in an array
  genCustomers: function() {
    for (let i = 0; i < storeHours.length; i++){
      this.custPerHour.push (Math.floor(Math.random() * (this.maxCustHour - this.minCustHour - +1)+ this.minCustHour));
      // console.log(this.custPerHour);
    }
  },

  calcHourlySales: function(){
    this.genCustomers();
    // loop over hours array
    for (let i = 0; i < storeHours.length; i++){
      this.hourlySales.push (Math.ceil(this.custPerHour[i] * this.avgCookieCust));
      this.totalCookies += (this.hourlySales[i]);
      //this.totalCookies = this.totalCookies + this.hourlySales[i]
    }
  },
  renderCity: function(){
    this.calcHourlySales();
    let seattleList = document.getElementById('Lima');
    for (let i = 0; i < storeHours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies`;
      seattleList.appendChild(listItem);
    }
    let totalSold = document.createElement('li');
    totalSold.textContent = `Total Sold: ${this.totalCookies}`;
    seattleList.appendChild(totalSold);

  }
};
lima.renderCity();
lima.genCustomers();
lima.calcHourlySales();
console.log(lima.hourlySales);



