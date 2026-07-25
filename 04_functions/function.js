
const jsUser = {
    name: "Sudhir kr.",
    age: 34,
    location: "Greater Noida",
    email: "sudhir@xyz1.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Faturday"]
}


jsUser.greeting =function () {
    console.log("Hello bro");                         // gives => Hello bro 
}
jsUser.greetingOne =function () {
    console.log(`Hello bro, ${this.name}`);
}
console.log(jsUser.greeting());                       // gives => Hello bro, Undefined (don't know why)
console.log(jsUser.greetingOne());                    // gives => Hello bro, Sudhir kr.