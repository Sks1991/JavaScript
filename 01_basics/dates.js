//********************************************* Dates **********************************************

let myDate = new Date()
console.log(myDate);                                       // given output is => 2026-07-22T10:52:41.675Z
console.log(myDate.toString());                            // given output is => Wed Jul 22 2026 16:29:34 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());                        // given output is => Wed Jul 22 2026
console.log(myDate.toISOString());                         // given output is => 2026-07-22T10:59:34.330Z
console.log(myDate.toJSON());                              // given output is => 2026-07-22T11:04:38.738Z
console.log(myDate.toLocaleDateString());                  // given output is => 22/7/2026
console.log(myDate.toLocaleString());                      // given output is => 22/7/2026, 4:35:55 pm
console.log(myDate.toLocaleTimeString());                  // given output is => 4:36:15 pm
console.log(myDate.toTimeString());                        // given output is => 16:36:35 GMT+0530 (India Standard Time
console.log(myDate.toUTCString());                         // given output is => Wed, 22 Jul 2026 11:06:54 GMT

console.log(typeof myDate);                                // given output is => object

let myCreatedDate = new Date(1991, 2, 10)
console.log(myCreatedDate.toDateString());                   // given output is => Sun Mar 10 1991

let myCreatedDate1 = new Date(1991, 2, 10, 5, 4)
console.log(myCreatedDate1.toLocaleString());                // given output is => 10/3/1991, 5:03:00 am

let myCreatedDate2 = new Date("1991-03-10")
console.log(myCreatedDate2.toLocaleString());                // given output is => 10/3/1991, 5:30:00 am

let myCreatedDate3 = new Date("10-03-1991")
console.log(myCreatedDate3.toLocaleString());                // given output is => 3/10/1991, 12:00:00 am


let myTimeStamp = Date.now()
console.log(myTimeStamp);                                    // given output is => 1784720350975 (in miliseconds)

let myTimeStamp1 = Date.now()
console.log(Math.floor(Date.now()/1000));                    // given output is => 1784720718

let myCreatedDate4 = new Date("10-03-1991")
console.log(myCreatedDate4.getTime());                       // given output is => 686428200000 (in miliseconds)

let newDate = new Date()                                        
console.log(newDate);                                            // given output is => 2026-07-22T11:53:44.712Z
console.log(newDate.getMonth());                                 // given output is => 6 (July count start from 0)
console.log(newDate.getMonth() + 1);                             // given output is => 7 
console.log(newDate.getDay());                                   // given output is => 3 (wednesday)

// `${newDate.getDay()}` and the time


let newDate1 = new Date();

console.log(                                                     
  newDate1.toLocaleString('default', {
        weekday: "long"                                            // given output is => Wednesday
  })
);
