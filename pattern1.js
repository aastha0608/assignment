//1 1 1 1 1 
// 2 1 2 4 8 
// 3 1 3 9 27 
// 4 1 4 16 64 
// 5 1 5 25 125 
let n = 5;
let i;
let p="";
let a;
for(i=1;i<=n;i++){
    p=i;
    
    for(let x=0;x<=3;x++){
        a= i**x;
        p=p+" "+a;
    }
    
console.log(p);
p='';
    
}
