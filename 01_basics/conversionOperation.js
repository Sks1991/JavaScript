// *************************************************** Conversions **********************************************************

// let score = "33"          // => 33
// let score = "33abc"       // => NaN
// let score = true          // => 1
// let score = NaN           // => NaN
// let score = undefined     // => NaN
// let score = null          // => 0
// let score = "sudhir"      // => NaN

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)0
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let isLoggedIn = 1            // => true
// let isLoggedIn = ""           // => false
// let isLoggedIn = "sudhir"     // => true

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let someNumber = 33

// let stringNumber = String(someNumber)
// console.log(stringNumber);                // => 33
// console.log(typeof stringNumber);         // => String

// ********************************************** Operations ****************************************************************

// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);               // => 4
// console.log(2-2);               // => 0
// console.log(2*2);               // => 4
// console.log(2**3); // power     // => 8
// console.log(2/3);  // divide    // => 0.6666666666666
// console.log(2%3);  // modulus   // => 2

// let str1 = "Sudhir"
// let str2 = " Sharma"
// let str3 = str1 + str2

// console.log(str3);

// console.log("1" + 2);          // => 12
// console.log(1 + "2");          // => 12
// console.log("1" + "2");        // => 12
// console.log("1" + 2 + 2);      // => 122
// console.log(1 + 2 + "2");      // => 32

// console.log(true);     // => true
// console.log(+true);    // => 1
// console.log(+"");      // => 0

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;  // => 4
// console.log(num1);

let gameCounter = 100;
gameCounter++;                // => 101
// ++gameCounter;                // => 101    //   but when both uncomment output is 102.
console.log(gameCounter);     // => 101
