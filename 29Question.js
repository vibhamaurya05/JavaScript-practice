// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let odd=0;
let even=0;
for (let m=0; m<=20; m++){
    if(m%2==0)
        even+=m;

    else
        odd+=m;
}

console.log(`Sum of all even no. : ${even}`);
console.log(`Sum of all odd no. : ${odd}`);