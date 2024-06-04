// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let Even = (num) => {
    if(num%2 === 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}

Even(65);
Even(2);
