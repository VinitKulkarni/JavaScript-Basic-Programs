//5. Write a program that computes a factorial of a number taken as input.
//5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
let data = 4;
var fact = 1;
for(let k=data; k>0; k--){
    fact = fact * k;
}
console.log(data,"!=",fact);