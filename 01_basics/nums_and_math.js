//******************************************** Numbers ******************************************************************

const score = 400
console.log(score);      // given output is => 400

const balance = new Number(100)
console.log(balance);                                  // given output is => [Number: 100]
console.log(balance.toString().length);                // given output is => 3
console.log(balance.toFixed(2));                       // given output is => 100.00

const otherNumber =123.8966
console.log(otherNumber.toPrecision(3));               // given output is => 124

const otherNumber2 =123.8966
console.log(otherNumber2.toPrecision(4));               // given output is => 123.9

const otherNumber1 =1123.8966
console.log(otherNumber1.toPrecision(3));               // given output is => 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));          // given output is => 10,00,000

//************************************************ Math ***********************************************************************

console.log(Math);                                          // given output is => Object [Math] {}
console.log(Math.abs(-4));                                  // given output is => 4
console.log(Math.round(4.6));                               // given output is => 5
console.log(Math.ceil(4.2));                                // given output is => 5    (not always in use this method maximum value)
console.log(Math.floor(4.9));                               // given output is => 4    (not always in use this method lowest value)
console.log(Math.min(3, 5, 27, 1.1));                       // given output is => 1.1
console.log(Math.max(3, 5, 27, 1.1));                       // given output is => 27

console.log(Math.random()); // Always gives result in between 0 to 1 => 0.22627398022175038(random)
console.log(Math.random() * 10 + 1); // given result is => 8.869345945017653
console.log(Math.floor(Math.random() * 10) + 1); // given result is => 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // given output is => 17
