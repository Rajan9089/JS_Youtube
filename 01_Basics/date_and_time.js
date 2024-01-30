// Date and Time
let completeDateAndTime = new Date();          // Tue Jan 30 2024 22:56:52 GMT+0530 (India Standard Time)
console.log(completeDateAndTime);


//Get Full year
console.log(completeDateAndTime.getFullYear());

//Get Month
console.log(completeDateAndTime.getMonth());      // 0 to 11

//get Week Day
console.log(completeDateAndTime.getDay());     // 0 to 6
// 0 - sunday, 1- Monday and so on...

//Month Day
console.log(completeDateAndTime.getDate());

// console.log(completeDateAndTime.getHours());

// console.log(completeDateAndTime.getMinutes());

// console.log(completeDateAndTime.getSeconds());

// console.log(completeDateAndTime.getMilliseconds());






//date Object always carry both "Date" and "Time"


//using date method

// let currentDate = new Date();   // yyyy-mm-dd   // 0 to 11 (Months)
//  //Wed Jan 02 1924 00:00:00 GMT+0530 (India Standard Time)
// let currentDate = new Date(2024,0,30);  //Tue Jan 30 2024 00:00:00 GMT+0530 (India Standard Time)
// let currentDate = new Date(15 , 7 , 2 , 11 , 54 , 32)    //Mon Aug 02 1915 11:54:32 GMT+0530 (India Standard Time)
// console.log(currentDate);

//using timestamp (integer number represent in "ms" from 1-1-1970)

// let currentDate = new Date(0);       // 0 is time in ms
// 1 day = 24 * 60 * 60 = 86400000 ms
// let newcurrentDate = new Date(86400000);
// console.log(currentDate ,"\n", newcurrentDate);  //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)


//To get time in "ms"

// let currentDate = new Date().getTime();

// console.log(currentDate);      // 1706635397436  total time in ms


