// *************************************************** Conversions **********************************************************

let score = "33"; // => 33
console.log(typeof score);
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score1 = "33abc"; // => NaN
console.log(typeof score1);
console.log(typeof score1);
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let score2 = true; // => 1
console.log(typeof score2);
console.log(typeof score2);
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score3 = NaN; // => NaN
console.log(typeof score3);
console.log(typeof score3);
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let score4 = undefined; // => NaN
console.log(typeof score4);
console.log(typeof score4);
let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

let score5 = null; // => 0
console.log(typeof score5);
console.log(typeof score5);
let valueInNumber5 = Number(score5);
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

let score6 = "sudhir"; // => NaN
console.log(typeof score6);
console.log(typeof score6);
let valueInNumber6 = Number(score6);
console.log(typeof valueInNumber6);
console.log(valueInNumber6);

let isLoggedIn = 1; // => true
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let isLoggedIn1 = ""; // => false
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = "sudhir"; // => true
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); // => 33
console.log(typeof stringNumber); // => String

// ********************************************** Operations ****************************************************************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 + 2); // => 4
console.log(2 - 2); // => 0
console.log(2 * 2); // => 4
console.log(2 ** 3); // power     // => 8
console.log(2 / 3); // divide    // => 0.6666666666666
console.log(2 % 3); // modulus   // => 2

let str1 = "Sudhir";
let str2 = " Sharma";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // => 12
console.log(1 + "2"); // => 12
console.log("1" + "2"); // => 12
console.log("1" + 2 + 2); // => 122
console.log(1 + 2 + "2"); // => 32

console.log(true); // => true
console.log(+true); // => 1
console.log(+""); // => 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // => 4
console.log(num1);

let gameCounter = 100;
gameCounter++; // => 101
++gameCounter; // => 101    //   but when both uncomment output is 102.
console.log(gameCounter); // => 101
