//years into days and days into years
function yearstodays(years){
const totalDays = years * 365;
return totalDays;
}

function daystoyears(days){
const totalYears = Math.round(days/365);
return totalYears;
}

console.log("Years to Days:")
console.log(yearstodays(3));
console.log(yearstodays(4));

console.log("Days to Years:")
console.log(daystoyears(544));
console.log(daystoyears(600));