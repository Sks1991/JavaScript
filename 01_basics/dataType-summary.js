// # Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.
// JS is Dynamically typed language.

const score = 100; // => 100
const scoreValue = 100.3; // => 100.3
const isLoggedIn = false; // => false
const outSideTemp = null; // => null
let userEmail; // => undefined

console.table([score, scoreValue, isLoggedIn, outSideTemp, userEmail]);

const id = Symbol("123");
const anotherId = Symbol;
console.log(id === anotherId); // given output is => false

const bigNumber = 395269523658923539n;
console.log(typeof bigNumber); // => false

// # Reference / Non-premitive
// Array, Object, Functions, Date, RegExp, Map, Set.

// Array
const heros = ["shaktiman", "naagraj", "doga"];
console.log(heros); // given output is => [ 'shaktiman', 'naagraj', 'doga' ]

// Object
let myObj = {
  name: "Sudhir",
  age: 22,
};
console.log(myObj); // given output is => { name: 'Sudhir', age: 22 }

// Function
const myFunction = function () {
  console.log("Sudhir"); // given output is => Sudhir
};
myFunction();

//**********************************************************************************************************
// Stack (Primitive) , Heap (Non-Premitive)

let MyProjectName = "JavaScriptLearn";
let anotherName = "MyProjectName";
anotherName = "JSFull";

console.log(MyProjectName); //given output is => JavaScriptLearn
console.log(anotherName); //given output is => JSFull

let userOne = {
  email: "sudhir@gooogle.com",
  upi: "user@abl",
};
let userTwo = userOne;
userTwo.email = "sudhir@goooooogle.com";

console.log(userOne.email); //given output is => sudhir@goooooogle.com
console.log(userTwo.email); //given output is => sudhir@goooooogle.com
