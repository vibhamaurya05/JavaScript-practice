// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let date = new Date();
console.log(date.getYear());
console.log(date.toISOString());
console.log(date.toLocaleString());