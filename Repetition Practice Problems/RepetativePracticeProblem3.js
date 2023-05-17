//while loop
//3. Extend the Flip Coin problem till either Heads or Tails wins 11 times.
var headCount = 0;
var tailCount = 0;
while(headCount < 12 && tailCount < 12){
    let coinValue = Math.round(Math.random());
    if(coinValue == 0){
        headCount++;
    }else{
        tailCount++;
    }
}
if(headCount > tailCount){
    console.log("headcount won",headCount);
    console.log("tailcount lost",tailCount);
}else{
    console.log("tailcount won",tailCount);
    console.log("headcount lost",headCount);
}
