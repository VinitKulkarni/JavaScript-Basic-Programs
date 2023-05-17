//function
//check for palindrom or not

var reversedData = 0;
function reverseANumber(num) {
    let original = num;

    while (num > 0) {
      let remainder = num % 10;
      reversedData = reversedData * 10 + remainder;
      num = Math.floor(num / 10);
    }
    return reversedData;
}

var number = 121;
var result = reverseANumber(number);
if(number == reversedData){
    console.log(number," palindrome");
}else{
    console.log(number," not palindrome");
}