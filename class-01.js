//console.log("Hello World");  

//var elachiQty = 100;

//elachiQty = elachiQty + 500;

//console.log(elachiQty)

//elachiQty = elachiQty-50;

/*var salary = 30000;

var newSalary = salary * 2;

//console.log(newSalary)

var siblings = 2;

var propossedMoney = 7000;

console.log(propossedMoney/siblings);

console.log(100 + (5*6)/5 - 10*2);

var amerTukra = 10;

var child = 3;

console.log(amerTukra % child)

var aqsa = 1000;

var child = 3;
console.log(aqsa % child)*/
/*var elachiQty = 100;



elachiQty = "1000gm";

console.log(typeof elachiQty)*/

//if else

//friday te shopner bazar

//offer 1: 550 Taka upore shopping e jodi bkash payment koren, 50 Taka cash back paben

//offer 2: 1010 Taka er shopping e Visa card diye payment koren, 100 Taka discount paben

//offer 3: 5500 Taka er shopping e Bkash/Nagad e pay korle 100 Taka cash back, Visa card diye payment korle 5% discount upto 500 Taka

//offer-1 : (offer 1 practice only)
/*var totalAmt = 555;
var paymentMethod = 'bkash';

if (totalAmt>= 550) {
    if(paymentMethod === 'bkash'){ //nested condition
        console.log('You got 50 Taka cashback for paying using bkash');
    }
    else {
        console.log('Oops! You got no discount!!!')
    }
    
} else {
    console.log('Oops! You got no discount(2)!!!')
}*/

//offer-2 : ( offer 1 + 0ffer 2) combine practice
/*var totalAmt = 1010;
var paymentMethod = 'bkash';

if (totalAmt>= 550) {
    if(paymentMethod === 'bkash'){ //nested condition
        console.log('You got 50 Taka cashback for paying using bkash');
    }
    else if (totalAmt >= 1010){
        if (paymentMethod === "visa") {
            console.log('You got 100 Taka discount for paying using visa card')
        }
        else {
            console.log('Oops! You got no discount!!!')
        }
        
    }
    
} else {
    console.log('Oops! You got no discount(2)!!!')
}*/


var totalAmt = 1010;
var paymentMethod = 'bkash';

if (totalAmt>= 550) {
    if(paymentMethod === 'bkash'){ //nested condition
        console.log('You got 50 Taka cashback for paying using bkash');
    }
    else if (totalAmt >= 1010){
        if (paymentMethod === "visa") {
            console.log('You got 100 Taka discount for paying using visa card')
        }
        else {
            console.log('Oops! You got no discount!!!')
        }
        
    }
    
} else {
    console.log('Oops! You got no discount(2)!!!')
}


