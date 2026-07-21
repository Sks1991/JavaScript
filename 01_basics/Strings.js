const name = "sudhir"
const repoCount = 50

// console.log(name + repoCount + " value"); //outdated this type of coding.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);     // given output is => Hello my name is sudhir and my repo count is 50 

const gameName = new String('sudhir-kumar-sharma')
console.log(gameName);               // given output is => [String: 'sudhir-kumar-sharma']
console.log(gameName[0]);            // given first later => s
console.log(gameName[4]);            // given fifth later => i
console.log(gameName.__proto__);     // given object => {}
console.log(gameName.length);        // given length count => 19
console.log(gameName.toUpperCase()); // given uppercase => SUDHIR-KUMAR-SHARMA
console.log(gameName.charAt(3));     // given third number charactor => h
console.log(gameName.indexOf('i'));  // given place of i => 4
console.log(gameName.split('-'));      // given output is => [ 'sudhir', 'kumar', 'sharma' ]


const newString = gameName.substring(0, 4)
console.log(newString);               // given output is => sudh

const anotherString = gameName.slice(-19, 9)
console.log(anotherString);           // given output is => sudhir
 
const newStringOne = "     Sudhir       "
console.log(newStringOne);            // given output is =>       Sudhir      .
console.log(newStringOne.trim());     // given output is => Sudhir.

const url = "https://www.giiglr.com/sudhir%20sharma" 
console.log(url.replace('%20', '-'));  // given url is => https://www.giiglr.com/sudhir-sharma
console.log(url.includes('sudhir'));   // given output is => true






