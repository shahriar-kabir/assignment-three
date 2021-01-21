
//****GigHub Link*****//

// https://github.com/shahriar-kabir/assignment-three


//****Kilometer to Meter calculation****//

function kilometerToMeter(number){
    var element = number;
    if(element < 0){
        console.log("Enter your correct value");
    }
    else{
        var calculation  = element * 1000;
    }
    return calculation;
}
var total = kilometerToMeter(20);
// console.log(total);



//****Budget Calculator****//

function budgetCalculator(watch,phone,laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
        console.log("Enter your correct value of each element");
    }
    else{
        var totalWatch      = watch;
        var totalAmount1    = totalWatch * 50;
        var totalPhone      = phone;
        var totalAmount2    = totalPhone * 100;
        var totalLaptop     = laptop;
        var totalAmount3    = totalLaptop * 500;
        var totalAmount     = totalAmount1 + totalAmount2 + totalAmount3;
    }
    return totalAmount;
}
var totalMoney = budgetCalculator(10,10,15);
// console.log (totalMoney);



//****Hotel Cost Calculation*****//

function hotelCost(night){
    if(night >= 0){
        var amount = 0;
        if(night <= 10){
            amount          = night * 100;
        }
        else if(night <= 20){
            var firstPart   = 10*100;
            var remaining   = night-10;
            var secondPart  = remaining * 80;
            amount          = firstPart + secondPart;
        }
        else{
            var firstPart   = 10*100;
            var secondPart  = 10*80;
            var remaining   = night - 20;
            var thirdpart   = remaining * 50;
            amount          = firstPart + secondPart + thirdpart;
        }
    }
    else{
        console.log("Enter your correct night number")
    }
    return amount;
}
var totalAmount = hotelCost(71);
// console.log(totalAmount);



//****Longest Friend Name search****//

function megaFriend(name){
   var max = name[0];
   for(var i = 1; i < name.length; i++){
      if(name[i].length > max.length){
         max = name[i];
      };
   };
   return [max];
};
var largestFriendName = megaFriend(['shahriar','kabir','joy','tuhin','riazul','bulbulian']);
console.log(largestFriendName);