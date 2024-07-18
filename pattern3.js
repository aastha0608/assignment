// A 
// B C
// D E F
// G H I J
// K L M N O

let n = 5; //rows=5    
let char = "A";
for(let i=0;i<=n;i++){
    pattern= "";

    for(let j=0;j<=i;j++){
        char = nextChar(char);
    }
    console.log(char);
}