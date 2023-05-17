//if else program

//3. Write a program that takes a year as input and outputs the Year is a Leap Year or not
//a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
//divisible by 400.
let year = 2016; //leap years(2016, 2020, 2024, 2028, 2032)
var result;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            result = 1; // divisible by 400, so it's a leap year
        } else {
            result = -1; // divisible by 100 but not by 400, so it's not a leap year
        }
    } else {
        result = 1; // divisible by 4 but not by 100, so it's a leap year
    }
} else {
    result = -1; // not divisible by 4, so it's not a leap year
}

if(result == 1){
    console.log("leap year");
}else{
    console.log("not leap year");
}
