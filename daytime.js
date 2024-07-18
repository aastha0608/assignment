let currentDate = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[currentDate.getDay()];

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let time = `${hours} : ${minutes} : ${seconds}`;
console.log(`Today is ${day} . Current time is ${time}`);
let date = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();
let crntDate = `${date} / ${month} / ${year}`;
console.log(`Today's date is ${crntDate}`); 