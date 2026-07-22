const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

marvelHeros.push(dcHeros)                                     
console.log(marvelHeros);                   // given output is => [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
console.log(marvelHeros[3][0]);             // given output is =>  Superman

// Concat method

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros);                      // given output is => [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

// Spread method

const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);                   // given output is => [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]  (same as concat)


const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4, 5]]
const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr);                // given output is => [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] (for one array)
 
console.log(Array.isArray("Sudhir"));       // given output is => false (Not an array)
console.log(Array.from("Sudhir"));          // given output is => [ 'S', 'u', 'd', 'h', 'i', 'r' ] (convert into an array)
console.log(Array.from({Name: "Sudhir"}));  // given output is => [] (confusing to take keys or value)
console.log(Array.of("Name", "Sudhir"));    // given output is => [ 'Name', 'Sudhir' ]

const obj = {
    Name: "Sudhir"
};

console.log(Object.entries(obj));           // given output is => [ [ 'Name', 'Sudhir' ] ]


let score = 100
let score1 = 200
let score3 = 300
console.log(Array.of(score, score1, score3));  // given output is => [ 100, 200, 300 ]



