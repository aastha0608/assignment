// 1
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 

let n = 5;
a = 1;
for(i=0;i<n;i++){
    let row = "";
    for(j=0;j<=i;j++){
        row = row + a + " ";
        a++;
    }
    console.log(row);
}