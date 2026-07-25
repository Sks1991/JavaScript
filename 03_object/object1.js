const tinderUser = new Object();                    // singleton
console.log(tinderUser);                            // given => {} (object because empty)

const tinderUser1 = {};                             // Non singleton
console.log(tinderUser1);                           // given => {} (object because empty)

const tinderUser2 = {};
tinderUser2.id = "abc123";
tinderUser2.name = "Sks";
tinderUser2.isLoggedIn = true;
console.log(tinderUser2);

const regularUser = {
  email: "sks@xy.com",
  fullName: {
    userFullName: {
      firstName: "Sudhir",
      lastName: "Sharma",
    },
  },
};
console.log(regularUser.fullName.userFullName.firstName);

// ******************* object merger **********************************

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}                            // given => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign(obj1, obj2)               // given => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const obj3 = Object.assign({}, obj1, obj2)           // given => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 = {...obj1, ...obj2}                         // given => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } (spread=best method )
console.log(obj3);


const tinderUser3 = {};
tinderUser3.id = "abc123";
tinderUser3.name = "Sks";
tinderUser3.isLoggedIn = true;

const users = [
  {
    id: 1,
    email: "sks@xyz.comm",
  },
  {
    id: 1,
    email: "sks@xyz.comm",
  },
  {
    id: 1,
    email: "sks@xyz.comm",
  },
  {
    id: 1,
    email: "sks@xyz.comm",
  },
];
users[1].email;                                      
console.log(tinderUser3);                               // given => { id: 'abc123', name: 'Sks', isLoggedIn: true }
console.log(Object.keys(tinderUser3));                  // given => [ 'id', 'name', 'isLoggedIn' ] (given keys result)
console.log(Object.values(tinderUser3));                // given => [ 'abc123', 'Sks', true ] (given value result)
console.log(Object.entries(tinderUser3));               // given => [ [ 'id', 'abc123' ], [ 'name', 'Sks' ], [ 'isLoggedIn', true ] ] (keys and balues both with array)
console.log(tinderUser3.hasOwnProperty('isLoggedIn'));  // given => true