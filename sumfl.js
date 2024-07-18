//summation of first and last Digit
let num = 1523;
let str = num.toString();
console.log(str);
let firstDigit = parseInt(str.charAt(0));
let lastDigit = parseInt(str.charAt(str.length - 1));
let sum = firstDigit + lastDigit;
console.log(sum);