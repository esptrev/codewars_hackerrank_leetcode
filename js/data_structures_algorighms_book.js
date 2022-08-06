/// SIMPLE WHILE LOOP ///
var number = 1;
var sum = 0;
while (number < 11) {
    sum += number;
    ++number;
}
console.log(sum);

/// JS OBJECT VERY SIMILAR TO JAVA  ///
function Checking(amount) {
    this.toString = toString;
    this.balance = amount;
    this.withdraw = withdraw;
    this.deposit = deposit;

}

function withdraw(amount) {
    if (amount > this.balance) {
        console.log("insufficient funds");
    } else {
        this.balance -= amount;
    }
}

function deposit(amount) {
    this.balance += amount;
}

function toString() {
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
var numbersII = [1, 2, 3, 4, 5]
/// delcaration below builds empty array of length 10 ///
var numbersIII = new Array(10);
var numbersIIIIV = new Array(10).fill(0)
console.log(numbersIII)
/// verify array is an array ///
console.log(Array.isArray(numbers)); /// true
console.log(typeof numbers);  /// returns object not array

/// SHALLOW COPY OF AN ARRAY ///  ASSIGNS REFERENCE SO NEW ARRAY SIMPLY POINTS TO OLD ARRAY AND WILL CARRY ALL VALUES FROM OLD ARRAY ///
let old = [1, 2, 3, 4];
let _old = old;
console.log(_old);
old [0] = 8;
console.log(_old);

/// DEEP COPY /// WILL CREATE A DUPLICATE ARRAY WITH OWN REFERENCE /// WILL NOT BE AFFECTED BY MUTATION OF ORIGINAL ARRAY ///

var thisArr = [9, 8, 7, 6, 5]
var thatArr = [];

function copyArr(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        arr2[i] = arr1[i];
    }
}

copyArr(thisArr, thatArr);

_old = [...old]; /// SPREAD OPERATOR  /// CAN ALSO BE USED TO CONCATENATE MULTIPLE ARRAYS [...OLD, ...NEW]
old[0] = 7
console.log(_old);
console.log(old);

/// STRINGS FROM ARRAY ///
var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var namestr = names.join();
console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
namestr = names.toString();
console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer

/// CREATING A NEW ARRAY FROM EXISTING ARRAYS ///
/// CONCAT() COMBINES  SPLICE() RETURNS NEW ARRAY THAT IS SUBSET OF ORIGINAL ///  SPLICE() CAN ALSO BE USED TO ADD ELEMENT TO ARRAY AT ANY INDEX PASS 3 ARGUMENTS
var cis = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmp = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cis.concat(dmp);
console.log((itDiv));
itDiv = dmp.concat(cis);
console.log(itDiv);
let addOn = ['trevor', 'kristin']
// console.log(itDiv.splice(2)); /// REMOVES FIRST TWO VALUES OFF OF THE ARRAY AND RETURNS REST
// console.log(itDiv.splice(2,2)); /// REMOVES THE FIRST TWO, RETURNS TWO AND DELETES REST
console.log(itDiv.splice(1, 0, addOn)); /// INSERTS ADDON ARRAY AT INDEX 1
console.log(itDiv.flat())
/// REMOVING FIRST-LAST ELEMENT OF ARRAY SHIFT() POP() ///  BOTH RETURN ELEMENT REMOVED FOR STORAGE

/// SORT() AND REVERSE() /// SORT() SORTS LEXOGRAPHICALLY SO WORKS ON STRINGS BUT NOT NUMBERS  NEED TO PASS A FUNCTION TO ORDER THE ELEMENTS NUMERICALLY ///

/// WILL SORT NUMERICALLY VS LEXOGRAPHICALLY ///
let arrToSort = [1, 5, 3, 8, 6, 9, 0, 7];
console.log(arrToSort.sort((a, b) => a - b));

function compare(a, b) {
    return a - b;
}

console.log(arrToSort.sort(compare));

/// ITERATOR FUNCTIONS /// FOREACH()  TAKES A FUNCTION AND APPLIES TO EACH ELEMENT OF THE ARRAY
let numsToSq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function square(num) {
    console.log(num * num);
}

numsToSq.forEach(square)

/// EVERY() ///  APPLIES BOOLEAN FUNCTION TO EVERY ELEMENT /// EVERY ELEMENT MUST MEET BOOLEAN FOR TRUE/FALSE SIMILAR TO  && LOGICAL

/// SOME() /// TAKES BOOLEAN AND RETURNS TRUE IF ONE ELEMENT MEETS CRITERIA  SIMILAR TO LOGICAL  ||

function isEven(num) {
    return (num % 2 === 0);
}

console.log(numsToSq.every(isEven)); /// FALSE
console.log(numsToSq.some(isEven)); /// TRUE

/// REDUCE() APPLIES AN ACCUMULATOR , YIELDING A SINGLE VALUE CAN BE USED ON NUMBERS AND STRINGS ALIKE
let addNums = [1,2,3,4,5,6];
function addition (runningTotal, currentValue){
    return runningTotal + currentValue;
}
var sum = addNums.reduce(addition);
console.log(sum) /// 21

let strArr = ["the ", "quick ","brown ", "fox "]
function conCat(accStr, currStr){
    return accStr + currStr;
}
console.log(strArr.reduce(conCat));
console.log(strArr.reduceRight(conCat));
/// REDUCERIGHT() WORKS FROM RIGHT TO LEFT, ESSENTIALLY REVERSING THE ARRAY










