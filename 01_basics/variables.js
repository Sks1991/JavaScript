const accountId = 144553;
let accountEmail = "sudhir@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2  //not allowed with const (not change gives error)
// accountEmail = "sd@ds.com" //let can be change (only use let in JS)
// accountPassword = "453474589"  //var can be change (var is not used this time in JS)
// accountCity = "Bengaluru" // can be change without variables (bad method)
//accountState = //undefined when no value is passed

// prefer not to use var because of issue in block scope and functional scope

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]); //one console for many arguments but it showing in tabular form.
