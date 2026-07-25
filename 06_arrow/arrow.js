const user = {
    username: "Sudhir",
    price: 99,
    welcomeMsg: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);                      // Sudhir, welcome to website
                                                // { username: 'Sudhir', price: 99, welcomeMsg: [Function: welcomeMsg] } 
                                                // Sharma, welcome to website
                                                // { username: 'Sharma', price: 99, welcomeMsg: [Function: welcomeMsg] } 
        
    }

}
user.welcomeMsg()                               // Sudhir, welcome to website
user.username = "Sharma"              
user.welcomeMsg()                               //Sharma, welcome to website

// console.log(this);                           // {}


// ********************************** arrow function ******************************

const chai = () => {
    let userName = "Sudhir";           
    console.log(userName);                      // Sudhir
}
chai();



const addTwo = (num1 , num2) => {
    return num1 + num2;
}
console.log(addTwo(7, 5));                      // 12 with return function without {}



const addTwo1 = (num1 , num2) => num1 + num2;   // 12 without return function without {}

console.log(addTwo1(6, 15)); 















