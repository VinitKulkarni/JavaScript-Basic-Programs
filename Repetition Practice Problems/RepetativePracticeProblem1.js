//for loop
//4. Extend the program to take a range of number as input and output the Prime Numbers in that range.
let number = 21;
let flag = false;
for(let i=2; i<number/2; i++){
    if(number%i == 0){
        flag = true;
        break;
    }
}
if(flag == false)
        console.log(number," is prime");
    else
        console.log(number," is not prime");