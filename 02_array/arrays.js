// Array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);                                // given output is => [ 0, 1, 2, 3, 4, 5 ]
console.log(typeof myArr);                         // given output is => object
console.log(myArr[0]);                             // given output is => 0


// Array methods

const myArr1 = new Array(1, 2, 3, 4, 5)

myArr1.push(6);                                     // given output is => [ 1, 2, 3, 4, 5, 6 ]    (add 6)
myArr1.push(6, 7, 8, 9);                            // given output is => [ 1, 2, 3, 4, 5, 6, 7, 8, 9]   (add 6, 7, 8, 9)
myArr1.pop();                                       // given output is => [ 1, 2, 3, 4 ]     (remove last number = 5) 
myArr1.unshift(9)                                   // given output is => [ 9, 1, 2, 3, 4, 5 ] (add first place)
myArr1.shift()                                      // given output is => [ 2, 3, 4, 5 ]   (remove first)

console.log(myArr1);
console.log(myArr1.includes(9));                    // given output is => false (not include 9 in given array)
console.log(myArr1.indexOf(9));                     // given output is => -1  (means no idea)
console.log(myArr1.indexOf(4));                     // given output is => 3 (where placed start from 0 in array)

const myArr2 = [0, 1, 2, 3, 4, 5]
const newArr2 = myArr2.join()
console.log(myArr);                                 // given output is => [ 0, 1, 2, 3, 4, 5 ] (Array form output)
console.log(newArr2);                               // given output is => 0,1,2,3,4,5 (join convert String, form output)
console.log(typeof newArr2);                        // given output is => String


// slice, splice

const myArr3 = [0, 1, 2, 3, 4, 5]

console.log("A ", myArr3);                          // given output is => [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr3.slice(1, 3)                     //                    [ 1, 2 ]    (first 3 array without first)

console.log(myn1);                                     
console.log("B ", myArr);                           // given output is => [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr3.splice(1, 3)
console.log("C ", myArr3);                          // given output is => [ 0, 4, 5 ]     (this is remove by splice method)
console.log(myn2);                                  // given output is => [ 1, 2, 3 ]     (first three arrays)





