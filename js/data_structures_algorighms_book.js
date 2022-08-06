
/// SIMPLE WHILE LOOP ///
var number = 1;
var sum = 0;
while(number < 11){
    sum += number;
    ++number;
}
console.log(sum);

/// JS OBJECT VERY SIMILAR TO JAVA  ///
function Checking (amount) {
    this.toString = toString;
    this.balance = amount;
    this.withdraw = withdraw;
    this.deposit = deposit;

}

function withdraw(amount){
    if(amount > this.balance){
        console.log("insufficient funds");
    }else{
        this.balance -= amount;
    }
}

function deposit (amount){
    this.balance += amount;
}

function toString(){
    return ('Balance: ' + this.balance);
}
var account = new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(750);
console.log(account.toString());
account.withdraw(800);
console.log(account.toString());

/// WAYS TO DECLARE AN ARRAY ///
var numbers = []; /// Best practice,,,more efficient that constructor
var numbersII = [1,2,3,4,5]
/// delcaration below builds empty array of length 10 ///
var numbersIII = new Array(10);
var numbersIIIIV = new Array(10).fill(0)
console.log(numbersIII)
/// verify array is an array ///
console.log(Array.isArray(numbers)); /// true
console.log(typeof numbers);  /// returns object not array

/// SHALLOW COPY OF AN ARRAY ///  ASSIGNS REFERENCE SO NEW ARRAY SIMPLY POINTS TO OLD ARRAY AND WILL CARRY ALL VALUES FROM OLD ARRAY ///
let old = [1,2,3,4];
let _old = old;
console.log(_old);
old [0]= 8;
console.log(_old);

/// DEEP COPY /// WILL CREATE A DUPLICATE ARRAY WITH OWN REFERENCE /// WILL NOT BE AFFECTED BY MUTATION OF ORIGINAL ARRAY ///

var thisArr = [9,8,7,6,5]
var thatArr = [];

function copyArr (arr1,arr2){
    for (let i = 0; i < arr1.log(); i++) {
        arr2[i] = arr1[i];
    }
}
copyArr(thisArr,thatArr);

_old = [...old]; /// SPREAD OPERATOR  /// CAN ALSO BE USED TO CONCATENATE MULTIPLE ARRAYS [...OLD, ...NEW]
old[0]= 7
console.log(_old);
console.log(old);
