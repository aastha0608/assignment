//Check Number Is Positive or Negative
function checkNum() {
    let num = prompt("Enter a num:");

    if(num>0){
        console.log(num + "is positive");
    }
    else if(num==0){
        console.log(num + " is zero");
    }
    else{
        console.log(num + " is negative")
    }
   
}
checkNum();