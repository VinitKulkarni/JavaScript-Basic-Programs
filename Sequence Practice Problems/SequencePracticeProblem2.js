//2.Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
let randomNumber1 = Math.floor(Math.random() * 99) + 10;
console.log("Two digit randomNumber1:",randomNumber1);
let randomNumber2 = Math.floor(Math.random() * 99) + 10;
console.log("Two digit randomNumber2:",randomNumber2);
let sumValue = randomNumber1 + randomNumber2;
console.log("sum = ",sumValue);
let averageValue = sumValue / 2;
console.log("Average = ",averageValue);