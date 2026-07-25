// singleton

Object.create  //constructor mrthod 

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Sudhir",
    "Full Name": "Sudhir Kumar Sharma",
    [mySym]: "mykey1",
    age: 18,
    location: "Noida",
    email: "sudhir@xyz.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email);                       // gives output => sudhir@xyz.com 
// console.log(jsUser["email"]);                    // gives output => sudhir@xyz.com  (sometimes you only access through array)
// console.log(jsUser["Full Name"]);                // gives output => Sudhir Kumar Sharma
// console.log(jsUser.Full Name);                   // gives output => error because Full Nam is String
// console.log(jsUser[mySym]);                      // gives output => mykey1

// jsUser.email = "sharma@xyz.com"                  // gives output => sharma@xyz.com
// Object.freeze(jsUser)                            // gives output => (freeze that email)
// jsUser.email = "sharma@xyzabc.com"               // gives output => no output because we freeze last email
console.log([jsUser]);     

// Function






