//switch case program

//2. Read a Number and Display the week day (Sunday, Monday,...) using switchcase
let dayValue = Math.floor(Math.random() * 7) + 1;
console.log(dayValue);

switch(dayValue){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid option");
        break;
}