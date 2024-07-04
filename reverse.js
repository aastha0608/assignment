let num = 64728 ;
let str = "" + num;
let reverse=""

for(i=0;i<str.length;i++){
    let lnum=num%10;
    num=parseInt(num/10)
    reverse+=lnum;
}
console.log(reverse);