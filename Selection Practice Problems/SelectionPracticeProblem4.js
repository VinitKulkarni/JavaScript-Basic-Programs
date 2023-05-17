//switch case program

//3. Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let data = 100;
switch(data){
    case 1:
        console.log("unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    default:
        console.log("invalid option");
        break;
}