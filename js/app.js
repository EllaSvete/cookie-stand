'use strict';

let storeHours = ['6am','7am', '8am','9am','10am','11am','12pm','1pm', '2pm','3pm','4pm','5pm','6pm','7pm'];

// let cities = ['Seattle','Tokyo','Dubai','Pairs','Lima'];




let seattle = {
  minCustHour: 23,
  maxCustHour: 65,
  avgCookieCust: 6.3,
  custPerHour: [],
  totalCookies: 0,
  hourlySales: [],
  genCustomers: function() {
    for (let i = 0; i < storeHours.length; i++){
      this.custPerHour.push (Math.floor(Math.random() * (this.maxCustHour - this.minCustHour - +1)+ this.minCustHour));
    }
  },

  calcHourlySales: function(){
    this.genCustomers();
    // loop over hours array
    for (let i = 0; i < storeHours.length; i++){
      let cookieSale = Math.floor(this.custPerHour[i] * this.avgCookieCust);
      this.hourlySales.push(cookieSale);
    }

  }


};

// seattle.genCustomers();
seattle.calcHourlySales();
console.log(seattle.hourlySales);
console.log(seattle.custPerHour);


// cookieSum: function(){
//   this.totalCookies = sum(this.cookiesPurchased);
//   // console.log(cookieSum);
//   genCustomers(seattle);
//   // console.log(genCustomers(Seattle));

//   let hourlySales = function(){
//   let cumstomerNumberArray = [];
  
//     for (let i = 0; i < storeHours.length; i++){
  
  
//       console.log(hourlySales);
//       genCustomers(seattle);
//     }
// }
// let Tokyo = {
//   minCustHour: 3,
//   maxCustHour: 24,
//   avgCookieCust: 1.2,
//   hourlySales: [],
//   totalCookies: 0,
//   cust: 0,
//   cookieSum: function(){
//     this.totalCookies = sum(this.cookiesPurchased);
//     console.log(cookieSum);
//   },
// };
// console.log(genCustomers(Tokyo));



// let Dubai = {
//   minCustHour: 11,
//   maxCustHour: 38,
//   avgCookieCust: 3.7,
//   hourlySales: [],
//   totalCookies: 0,
//   cust: 0,
//   cookieSum: function(){
//     this.totalCookies = sum(this.cookiesPurchased);
//     console.log(cookieSum);
//   },
// };




// let Paris = {
//   minCustHour: 20,
//   maxCustHour: 38,
//   avgCookieCust: 2.3,
//   hourlySales: [],
//   totalCookies: 0,
//   cust: 0,
//   cookieSum: function(){
//     this.totalCookies = sum(this.cookiesPurchased);
//     console.log(cookieSum);
//   },
// };





// let Lima = {
//   minCustHour: 2,
//   maxCustHour: 16,
//   avgCookieCust: 4.6,
//   hourlySales: [],
//   totalCookies: 0,
//   cust: 0,
//   cookieSum: function(){
//     this.totalCookies = sum(this.cookiesPurchased);
//     console.log(cookieSum);
//   },
// };

