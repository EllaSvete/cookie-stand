'use strict';

//array of times of the day people will go in:

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let locationList = []; // this will store all locations created by constructor

let locationForm = document.getElementById('location-form');

const parentElement = document.getElementById('table');



function City(location, minCustHour, maxCustHour, avgCookieCust) {
  this.location = location;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookieCust = avgCookieCust;
  this.custPerHour = [];
  this.totalCookies = 0;
  this.hourlySales = [];

  locationList.push(this); // store any object that gets created in this function

}

City.prototype.genCustomers = function () {
  for (let i = 0; i < storeHours.length; i++) {
    this.custPerHour.push(randomCustNumber(this.minCustHour, this.maxCustHour));
    // console.log(this.custPerHour);
  }
};

City.prototype.calcHourlySales = function () {
  // this.genCustomers();
  // loop over hours array
  for (let i = 0; i < storeHours.length; i++) {
    this.hourlySales.push(Math.ceil(this.custPerHour[i] * this.avgCookieCust));
    this.totalCookies += (this.hourlySales[i]);
  }
};


City.prototype.renderCity = function () {
  // this.calcHourlySales();
  let tableRow = document.createElement('tr');
  let locationBox = document.createElement('td');
  locationBox.textContent = this.location;
  console.log(this.location);
  tableRow.appendChild(locationBox);
  for (let i = 0; i < this.hourlySales.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.hourlySales[i];
    tableRow.appendChild(td);
  }
  locationBox = document.createElement('td');
  locationBox.textContent = this.totalCookies;
  tableRow.appendChild(locationBox);
  parentElement.appendChild(tableRow);

};

function renderHeader() {
  let tableHeader = document.createElement('thead');
  parentElement.appendChild(tableHeader);
  let tableRow = document.createElement('tr');
  tableHeader.appendChild(tableRow);
  let tableCell = document.createElement('td');
  tableCell.textContent = '';
  tableRow.appendChild(tableCell);
  for (let i = 0; i < storeHours.length; i++) {
    let td = document.createElement('td');
    td.textContent = storeHours[i];
    tableRow.appendChild(td);
  }
  let totalCell = document.createElement('td');
  totalCell.textContent = 'Daily Totals';
  tableRow.appendChild(totalCell);
}


function renderFooter() {
  let tableFooter = document.createElement('tfoot');
  parentElement.appendChild(tableFooter);
  let tableRow = document.createElement('tr');
  tableFooter.appendChild(tableRow);
  let tableCell = document.createElement('td');
  tableCell.textContent = 'Cookie Totals';
  tableRow.appendChild(tableCell);
  let grandTotal = 0;
  for (let i = 0; i < storeHours.length; i++) {
    // console.log(`i loop ${i}`);
    // console.log(`hours ${storeHours[i]}`);
    let hourTotal = 0;
    for (let j = 0; j < locationList.length; j++) {
      // console.log(`j loop ${j}`);
      // console.log(`locations ${locationList[j].location}`);
      hourTotal += locationList[j].hourlySales[i];
      grandTotal += hourTotal;
    }
    let tableData = document.createElement('td');
    tableData.textContent = hourTotal;
    tableRow.appendChild(tableData);
  }
  let totalData = document.createElement('td');
  totalData.textContent = grandTotal;
  tableRow.appendChild(totalData);

}

function genData (){
  for (let i =0; i < locationList.length; i++){
    locationList[i].genCustomers();
    locationList[i].calcHourlySales();

  }
}


let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 28, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);



function randomCustNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function callAllStores() {
  for (let i = 0; i < locationList.length; i++){
    locationList[i].renderCity();
  }
}

function handleSubmit(event){
  event.preventDefault();

  let location = event.target.location.value;
  let minCustHour = event.target.minCustHour.value;
  let maxCustHour = event.target.maxCusHour.value;
  let avgCookieCust = event.target.avgCookieCust.value;
  let newLocation = new City(location, minCustHour, maxCustHour, avgCookieCust);

  newLocation.genCustomers();
  newLocation.calcHourlySales();
  locationForm.reset();
  console.log(newLocation);
  parentElement.innerHTML='';
  renderHeader();
  callAllStores();
  // seattle.renderCity();
  // console.log(seattle);
  // newLocation.renderCity();
  renderFooter();
}

locationForm.addEventListener('submit', handleSubmit);
console.log(locationForm);

genData();
renderHeader();
seattle.renderCity();
tokyo.renderCity();
dubai.renderCity();
paris.renderCity();
lima.renderCity();
renderFooter();

// City.prototype.render = function() {

// }
// object that contains keys and values:

// let seattle = {
//   location: 'seattle',
//   minCustHour: 23,
//   maxCustHour: 65,
//   avgCookieCust: 6.3,
//   custPerHour: [],
//   totalCookies: 0,
//   hourlySales: [], //cookies per hour being stored in an array
//   genCustomers: function() {
//     for (let i = 0; i < storeHours.length; i++){
//       this.custPerHour.push (Math.floor(Math.random() * (this.maxCustHour - this.minCustHour - +1)+ this.minCustHour));
//       // console.log(this.custPerHour);
// //     }
// //   },

// calcHourlySales: function(){
//   this.genCustomers();
//   // loop over hours array
//   for (let i = 0; i < storeHours.length; i++){
//     this.hourlySales.push (Math.ceil(this.custPerHour[i] * this.avgCookieCust));
//     this.totalCookies += (this.hourlySales[i]);
//     //this.totalCookies = this.totalCookies + this.hourlySales[i]
//   }
// },

//   renderCity: function(){
//     this.calcHourlySales();
//     let seattleList = document.getElementById('Seattle');
//     for (let i = 0; i < storeHours.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies`;
//       seattleList.appendChild(listItem);
//     }
//     let totalSold = document.createElement('li');
//     totalSold.textContent = `Total Sold: ${this.totalCookies}`;
//     seattleList.appendChild(totalSold);

//   }
// };
// seattle.renderCity();
// seattle.genCustomers();
// seattle.calcHourlySales();
// // console.log(seattle.hourlySales);
// // console.log(seattle.custPerHour);



// let tokyo = {
//   location: 'tokyo',
//   minCustHour: 3,
//   maxCustHour: 24,
//   avgCookieCust: 1.2,
//   custPerHour: [],
//   totalCookies: 0,
//   hourlySales: [], //cookies per hour being stored in an array
//   genCustomers: function() {
//     for (let i = 0; i < storeHours.length; i++){
//       this.custPerHour.push (Math.floor(Math.random() * (this.maxCustHour - this.minCustHour - +1)+ this.minCustHour));
//       // console.log(this.custPerHour);
//     }
//   },

//   calcHourlySales: function(){
//     this.genCustomers();
//     // loop over hours array
//     for (let i = 0; i < storeHours.length; i++){
//       this.hourlySales.push (Math.ceil(this.custPerHour[i] * this.avgCookieCust));
//       this.totalCookies += (this.hourlySales[i]);
//       //this.totalCookies = this.totalCookies + this.hourlySales[i]
//     }
//   },
//   renderCity: function(){
//     this.calcHourlySales();
//     let seattleList = document.getElementById('Tokyo');
//     for (let i = 0; i < storeHours.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies`;
//       seattleList.appendChild(listItem);
//     }
//     let totalSold = document.createElement('li');
//     totalSold.textContent = `Total Sold: ${this.totalCookies}`;
//     seattleList.appendChild(totalSold);

//   }
// };
// tokyo.renderCity();
// tokyo.genCustomers();
// tokyo.calcHourlySales();
// console.log(tokyo.hourlySales);



// let dubai = {
//   location: 'dubai',
//   minCustHour: 11,
//   maxCustHour: 38,
//   avgCookieCust: 3.7,
//   custPerHour: [],
//   totalCookies: 0,
//   hourlySales: [], //cookies per hour being stored in an array
//   genCustomers: function() {
//     for (let i = 0; i < storeHours.length; i++){
//       this.custPerHour.push (Math.floor(Math.random() * (this.maxCustHour - this.minCustHour - +1)+ this.minCustHour));
//       // console.log(this.custPerHour);
//     }
//   },

//   calcHourlySales: function(){
//     this.genCustomers();
//     // loop over hours array
//     for (let i = 0; i < storeHours.length; i++){
//       this.hourlySales.push (Math.ceil(this.custPerHour[i] * this.avgCookieCust));
//       this.totalCookies += (this.hourlySales[i]);
//       //this.totalCookies = this.totalCookies + this.hourlySales[i]
//     }
//   },
//   renderCity: function(){
//     this.calcHourlySales();
//     let seattleList = document.getElementById('Dubai');
//     for (let i = 0; i < storeHours.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies`;
//       seattleList.appendChild(listItem);
//     }
//     let totalSold = document.createElement('li');
//     totalSold.textContent = `Total Sold: ${this.totalCookies}`;
//     seattleList.appendChild(totalSold);

//   }

// };
// dubai.renderCity();
// dubai.genCustomers();
// dubai.calcHourlySales();
// console.log(dubai.hourlySales);




// let paris = {
//   location: 'paris',
//   minCustHour: 20,
//   maxCustHour: 38,
//   avgCookieCust: 2.3,
//   custPerHour: [],
//   totalCookies: 0,
//   hourlySales: [], //cookies per hour being stored in an array
//   genCustomers: function() {
//     for (let i = 0; i < storeHours.length; i++){
//       this.custPerHour.push (Math.floor(Math.random() * (this.maxCustHour - this.minCustHour - +1)+ this.minCustHour));
//       // console.log(this.custPerHour);
//     }
//   },

//   calcHourlySales: function(){
//     this.genCustomers();
//     // loop over hours array
//     for (let i = 0; i < storeHours.length; i++){
//       this.hourlySales.push (Math.ceil(this.custPerHour[i] * this.avgCookieCust));
//       this.totalCookies += (this.hourlySales[i]);
//       //this.totalCookies = this.totalCookies + this.hourlySales[i]
//     }
//   },
//   renderCity: function(){
//     this.calcHourlySales();
//     let seattleList = document.getElementById('Paris');
//     for (let i = 0; i < storeHours.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies`;
//       seattleList.appendChild(listItem);
//     }
//     let totalSold = document.createElement('li');
//     totalSold.textContent = `Total Sold: ${this.totalCookies}`;
//     seattleList.appendChild(totalSold);

//   }
// };
// paris.renderCity();
// paris.genCustomers();
// paris.calcHourlySales();
// console.log(paris.hourlySales);




// let lima = {
//   location: 'lima',
//   minCustHour: 2,
//   maxCustHour: 16,
//   avgCookieCust: 4.6,
//   custPerHour: [],
//   totalCookies: 0,
//   hourlySales: [], //cookies per hour being stored in an array
//   genCustomers: function() {
//     for (let i = 0; i < storeHours.length; i++){
//       this.custPerHour.push (Math.floor(Math.random() * (this.maxCustHour - this.minCustHour - +1)+ this.minCustHour));
//       // console.log(this.custPerHour);
//     }
//   },

//   calcHourlySales: function(){
//     this.genCustomers();
//     // loop over hours array
//     for (let i = 0; i < storeHours.length; i++){
//       this.hourlySales.push (Math.ceil(this.custPerHour[i] * this.avgCookieCust));
//       this.totalCookies += (this.hourlySales[i]);
//       //this.totalCookies = this.totalCookies + this.hourlySales[i]
//     }
//   },
//   renderCity: function(){
//     this.calcHourlySales();
//     let seattleList = document.getElementById('Lima');
//     for (let i = 0; i < storeHours.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = `${storeHours[i]}: ${this.hourlySales[i]} cookies`;
//       seattleList.appendChild(listItem);
//     }
//     let totalSold = document.createElement('li');
//     totalSold.textContent = `Total Sold: ${this.totalCookies}`;
//     seattleList.appendChild(totalSold);

//   }
// };
// lima.renderCity();
// lima.genCustomers();
// lima.calcHourlySales();
// console.log(lima.hourlySales);



