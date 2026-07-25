let a = 300;                                     // outer scope / globle scope => 300
const b = 400;                                   // outer scope / globle scope => 400

if (true) {
  let a = 50;
  const b = 60;
  // var c = 30
  console.log("INNER: ", a);                     // inner scope / blocled scope => 50
  console.log("INNER: ", b);                     // inner scope / blocled scope => 60
}

console.log(a);
console.log(b);
// console.log(c);

// var is not used this time
// let and const both are blocked scoped

function one() {
  const username = "Sudhir";
  console.log(username);                          // gives => Sudhir

  function two() {
    const website = "instagram";
    console.log(website);                         // gives => instagram
    
  }
  // console.log(website);
  two();
}
one();