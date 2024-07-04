//Vowel or Not 
// let char = "b";
// if(char==="a" || char==="e" || char==="i"|| char==="o" || char==="u" || char==="A" || char==="E" || char==="I"|| char==="O" || char==="U"){
//     console.log(`${char} is a vowel`);
// }
// else{
//     console.log(`${char} is not a vowel`);
// }

//Using switch case
let char = 'f';
switch(char){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(char + " is a vowel");
        break;

    default:
        console.log(char + " is a consonant");
        
}
