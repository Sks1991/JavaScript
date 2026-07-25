function sayMyName() {
    console.log("S");
    console.log("U")
    console.log("D")
    console.log("H")
    console.log("I")
    console.log("R")
}
sayMyName()

function addTwoNumbers(Number1, Number2) {
    console.log(Number1 + Number2);
}
addTwoNumbers(3, 4)                                    // given => 7

let result = addTwoNumbers(3, 4)                       // given => 7
console.log("Result: ", result);                       //Result:  undefined



function addTwoNumbers1(Number1, Number2) {
    let result1 = Number1 + Number2;
    return result1
}
let result1 = addTwoNumbers1(3, 4)
console.log("Result1: ", result1);                      // given => Result1:  7




function addTwoNumbers2(Number1, Number2) {
    return Number1 + Number2;
}
let result2 = addTwoNumbers2(3, 4)
console.log("Result2: ", result2);                      // given => Result2:  7    (best way)



function loginUserMsg(username = "sudhir"){             // (username = "sudhir") es se undefined nahi ayega name print karega
    // if(username === undefined){
        if(!username){                                  // use (!username) instead of (username === undefined)
        console.log("Please enter a username...");      // given => Please enter a username...
        return                                          // return use for not print outside of {} means {username} just logged in` is not printed
    }
    return `${username} just logged in`
}
console.log(loginUserMsg("sudhir"))                     //  given => sudhir just logged in
console.log(loginUserMsg(""));                            //  given =>undefined

