// //Convert Decimal to Binary then add, output should be string
// //Converts to Binary
// function decimalToBinary(decimal){
//     return (decimal >>> 0).toString(2);
// }
// console.log(decimalToBinary());
// //Adds binary
// function addBinary(a,b) {
//     return decimalToBinary(a+b);
// }
// console.log(addBinary(1,2));
// console.log(typeof addBinary());
//
// //Split the Digits then Square then and concatenate, return integer
//
// function squareDigits(num){
//     var array = num.toString().split('').map( function(int) {
//         var i = parseInt(int);
//         return i * i;
//     });
//
//     return parseInt(array.join(""));
// }
//
// //Accumulating characters Code should print out characters based on position in the string.
// // accum("abcd") -> "A-Bb-Ccc-Dddd"
// // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// // accum("cwAt") -> "C-Ww-Aaa-Tttt"
// function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
// console.log(accum('kdjdj'));
//
// function accum(str) {
//     var res = [];
//     for(var i = 0; i < str.length; i++) {
//         var row = '';
//         for(var j = 0; j < i + 1; j++) {
//             row += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();
//         }
//         res.push(row);
//     }
//     return res.join('-');
// }
// console.log(accum('fgtyh'));
//
// //Code from Raymond on objects
// // for (const [key, value] of Object.entries(object1)) {
// //     console.log(`${key}: ${value}`);
// // }
// // Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables: start, finish, and step. The sequence begins at start, ends at finish, and goes up by step until it reaches finish or a number that when increased by step would go past finish.
//
// // Input: start: 1 finish: 4 step: 1 | Output: 10
// // Input: start: 4 finish: 10 step: | Output: 13
//
// function sum(sequence){
//     let total = 0;
//     for (let i = 0; i < sequence.length; i++) {
//         total += sequence[i];
//     }
//     console.log(total);
// }
// sum([1,2,3,4]);
//
// /* Given a string of any length with any characters in it, write a function to determine whether or not the string contains the whole word "english". The order of characters/spelling is important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return false. Upper and lower case does not matter. Return values should be booleans (true/false).
// */
//
// function findSubString(string){
//     let partial = 'english';
//    return !!string.toLowerCase().includes(partial);
//
// }
// console.log(findSubString("SMFENgliSHasnD"));
// // findSubString("");
// let scores =[10,5,20,20,4,5,2,25,1]
// function breakingRecords(scores) {
//     let maxCount = 0;
//     let minCount = 0;
//     let maxScore = scores[0]
//     let minScore = scores[0];
//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i] < minScore) {
//             minScore = scores[i];
//             minCount++;
//         } else if(maxScore < scores[i]) {
//             maxScore = scores[i];
//             maxCount++;
//         }
//     }
//     return [maxCount,minCount];
//
// }
// console.log(breakingRecords(scores));
//
//
// // Remove all ! from string then add one to end
// function remove (string) {
//     let strArr = string.split('')
//     const vToRemove = '!';
//     const results = strArr.filter(function (x){
//         return  x !== vToRemove;
//     })
//     let finished = results.join('') + '!';
//     console.log(finished);
// }
// remove('!!!hi!!');
//
// // Take full name and return just initials
//
// function abbreviate (string){
//     let strRay = string.split('')
//     let initials = []
//     initials.push(strRay[0]);
//     let indSpace = strRay[strRay.indexOf(' ') + 1];
//     initials.push(indSpace);
//     let final = initials.join('');
//     return (final.toUpperCase());
//
// }
// abbreviate('trevo esparza')
//
// //Function to return Boolean if number is prime
// function isPrime(num){
//     if(num < 2){
//         return false;
//     }
//     if(num === 2){
//         return true;
//     }
//     if(num % 2 === 0){
//         return false;
//     }
// }
//
//
//
//
//
//
// // Function loneRanger, remove the element that occurs only once in the array
// let array = [12,1,12,3,12,1,1,2,3,3];
// function loneRanger(input){
//     for (let i = 0; i < input.length; i++) {
//         if(input.indexOf(input[i]) === input.lastIndexOf(input[i])){
//             return input[i];
//         }
//
//     }
// }
// console.log(loneRanger(array));
//
//
//
// // Find integers divisors
// function divisors(integer) {
//     let divArr = [];
//     for(let i = 2; i < integer; i++){
//         if(integer % i === 0){
//             divArr.push(i);
//         }
//
//     }
//     if(divArr.length === 0){
//         return integer + " is prime";
//     }
//     return divArr;
// }
// console.log(divisors(15));    /*   [3, 5]  */
// console.log(divisors(12));      /* [2, 3, 4, 6]*/
// console.log(divisors(13));     /*  ( "13 is prime")*/
//
// //Remove the last !
// function remove (string) {
//     if(string.charAt(string.length -1) === '!'){
//         return string.slice(0,-1);
//     }
//     return string;
// }
// console.log(remove("Hi!"));
// console.log(remove("Hi!!!"));
// console.log(remove("!Hi!"));
// console.log(remove("Hi"));
// console.log(remove("Hi! Hi!"));
// console.log(remove("!Hi"));
//
// // doTest("Hi!!!", "Hi!!");
// // doTest("!Hi", "!Hi");
// // doTest("!Hi!", "!Hi");
// // doTest("Hi! Hi!", "Hi! Hi");
// // doTest("Hi", "Hi");
//
// //Find sum of divisors 3/5
// function solution(number){
//     let sumOfDivisors = 0;
//     if(number < 0){
//         return 0;
//     }else{
//         for(i=3;i<number;i++){
//             if(i % 3 === 0 || i % 5 === 0){
//                 sumOfDivisors += i;
//             }
//         }
//         return sumOfDivisors;
//     }
// }
//
// console.log(solution(15));
//
// //given two arrays, merge and find the median for the merged array
//
// let firstArray = [1,3,5,7,9,11,13];
// let secondArray = [2,4,6,8,10,12,14];
//
// function findMergedMedian(inputA, inputB){
//     for (let i = 0; i < inputA.length; i++) {
//         secondArray.push(inputA[i]);
//     }
//     let sortedArray = secondArray.sort((a,b) => a - b);
//     const middle = Math.floor(sortedArray.length / 2);
//     if(sortedArray.length % 2 === 0){
//         return((sortedArray[middle - 1] + sortedArray[middle]) / 2);
//     }
//     return sortedArray[middle];
// }
// console.log(findMergedMedian(firstArray,secondArray));
//
// // does first string contain all the letters of the second string
// // this one doesn't work
// function isItThere(inputA,inputB){
//     for (let i = 0; i < inputA.length; i++) {
//         if (inputB.indexOf(inputA[i]) <= -1) return false;
//     }
//     for (let i = 0; i < inputB.length; i++) {
//         if (inputA.indexOf(inputB[i]) <= -1) return false;
//     }
//     return true;
// }
// console.log(isItThere('trlevlor','rovert'))
//
// // iterate through the array adding every index to every index and then divide by k
// function divisibleSumPairs(n,k,array) {
//     var counter = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             console.log(array[i]);
//             let sum = array[i] + array[j];
//             console.log(array[j]);
//             if(sum % k === 0){
//                 counter++
//             }
//         }
//     }
//     return (counter);
// }
// divisibleSumPairs(5,3,[1,2,3,4,5]);
//
//
// /////////// Given a number array move all zeroes to end of array  ////////////////
//
// let originalArray = [0,1,0,2,0,3,0,4,0,5];
//
// originalArray.forEach(function (num){
//     if(num === 0){
//         originalArray.push(originalArray.splice(originalArray.indexOf(0), 1)[0]);
//     }
//     console.log(originalArray);
// })
//




// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);
//
// if (true) {
//     let x = 5;
// }
// console.log(typeof x);

// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }

// console.log(sayHello('trevor'));
//
// const house = {
//     bedrooms: 2,
//     bathrooms: 2,
//     sqft: 1234
// }
// for (prop in house){
//     console.log(prop,house[prop]);
// }
//
// let numb = 123;
// console.log(numb.toString().split('').reverse().join(''));
//
//
//
// function countDuplicates (string){
//     const duplicates = {};
//     let splitDuplicates = string.split('');
//     console.log(splitDuplicates);
//     splitDuplicates.forEach((char) => {
//         duplicates[char] = (duplicates [char] || 0) + 1;
//     });
//     console.log(duplicates);
// }
// countDuplicates("adsjfdsfsfjsdjfhacabcsbajda")
//
// function countWords(sentence) {
//     const words = sentence.split(' '); // transform a sentence into an array of words
//     const wordCountObject = words.reduce((wordCounts, word) => {
//         if (typeof wordCounts[word] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             wordCounts[word] = 1;
//         } else {
//             // otherwise increment the existing count
//             wordCounts[word] += 1;
//         }
//         return wordCounts;
//     }, {}); // start with an empty object
//     return wordCountObject;
// }
//
// countWords('Mary had a little lamb little lamb little lamb');
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}

// Write a function called makePerson. It takes 2 arguments: personName and age.
//     personName must be at least 1 character long. age must be between 1 and 150.
// If either of the parameters is invalid, output an appropriate message to the console and return FALSE.
//     If both parameters are valid, return an object containing personName and age.
//     E.g.,
//     console.log(makePerson("Bob", 30)); // outputs {personName:"Bob", age:30}
// console.log(makePerson("", 30));
// // outputs:
// Person name cannot be blank
// false

//
// /// LITTLE JS WARMUP FROM DOC ROB ///
// function makePerson (pName,pAge){
//     if(pName.length === 0){
//         console.log("Name cannot be empty");
//         return false;
//     }
//     if(pAge < 1 || pAge > 150){
//         console.log("Not a valid age")
//         return false;
//     }
//     return {pName,pAge};
// }
//
// console.log(makePerson('trevor', 45));
//
// /// Little function from LinkedIn ///  What logs first start or end ///
// setTimeout(function (){
//     console.log("start")
// },0);
// console.log("end");
//
// //// COUPLE MERGE FUNCTIONS FROM LINKEDIN ////
//
// let numArray = [12,25,65,34,98,100,1,4,8,200,222,21,77];
// function sortArray (array){
//     console.log(numArray);
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if(array[j] > array[j + 1]){
//                 let temp = array[j+1];
//                 array[j+1] = array[j];
//                 array[j] = temp;
//             }
//
//         }
//
//     }
//     return numArray;
// }
//
// console.log(sortArray(numArray));
//
// const merge = (arr1, arr2) => {
//     let sorted = [];
//     while (arr1.length && arr2.length) {
//         if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
//         else sorted.push(arr2.shift());
//     };
//
//     return sorted.concat(arr1.slice().concat(arr2.slice()));
// };
// const mergeSort = arr => {
//     if (arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length / 2),
//         left = mergeSort(arr.slice(0, mid)),
//         right = mergeSort(arr.slice(mid));
//
//     return merge(left, right);
// };
// const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30,51,52,53,54, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
// console.log(mergeSort(unsortedArr));
//
// const greeting = "      Happy     Tuesday    !    ";
// console.log(greeting.trim());
//
//
// console.log([1,2,3,4,5].fill(0,1,3));
//
// console.log(parseFloat(7.5/10));
//
//
// console.log("trevor")
// console.log([] == ![]);
//
// console.log(typeof []);
// console.log(typeof [1]);
//
// let myArr = [];
// for (let i = 0; i < 5; i++) {
//     myArr.push(i)
// }
// console.log(myArr);
//
// let newArr = [];
// console.log(newArr)
// console.log([] == '');
// console.log([] == 0);
//
// let [a,b, ...e] = [1,2,3,4,5];
// console.log(e)
//
// const myPet = {
//     animal: "dog",
//     name: "Samwise"
// }
// //const {animal,name} = myPet;
// //console.log(`my ${animal} is named ${name}.`);
// console.log(myPet)
//
//
// let g= 1;
// let h=3;
// [g,h] = [h,g];
// console.log(g,h);
//
// const dog = new Map();
// dog.set('name','samwise');
// dog.set('breed','maltipoo');
//
// console.log(dog.get('name'));
//
// class Friend{
//     constructor(name) {
//     this.name = name;
//     this.getName = () => this.name;
//
//     }
// }
//
// const myFriend = new Friend('Trevor')
// const {getName} = myFriend;
// console.log(getName());
//
// let nums = [1,2,3,4,5,6,7,8,9];
//
// const sqOfNums = nums.map(num => num * num);
// console.log(sqOfNums)


// Write a function called removeVowels.
//     Takes a parameter called originalString.
//     Returns a string that is based on the originalString but with all of the vowels removed.
//     Do not modify originalString.
//
//     Provide a main or equivalent where you can test your function and output the result.
//
//     Examples
// removeVowels("aeiou") -> ""
// removeVowels("happy dog") -> "hppy dg"
// removeVowels("") -> ""

/// we want to identify vowels
/// input is a string
// return a new string
//be able to print results

//
// function removeVowels(originalString){
//     let strArr = originalString.split('');
//     for (let i = 0; i < strArr.length; i++) {
//         let char = strArr[i].toLowerCase();
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             strArr[i]= '';
//         }
//
//     }
//     console.log(strArr.join(''));
// }
// removeVowels('happy birthday');
//
// function disemvowel(str) {
//     var strArr = str.split('');
//     for (var x = 0; x < str.length; x++) {
//         var char = str[x].toLowerCase();
//         if (char === "a" || char ==="e" || char === "i" || char === "o" || char === "u") {
//             strArr[x] = '';
//         }
//     }
//     return strArr.join('');
// }
//
// console.log(disemvowel("happy birthday"));
//
// console.log(true + true);
// console.log('true' + 'true');
// console.log(true + 'true');
// console.log(false + false);
// console.log(false + 'false');
// console.log(true + false);
// console.log('true' + false);


/* https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
check to see if array is sorted ascending, descending or not at all
 */
function isSortedAndHow(array) {
    const strungOut = array.join('');
    console.log(strungOut);

    const sorted = array.sort((a,b) => a-b).join('');
    console.log(sorted);

    const reversed = array.sort((a,b) => b-a).join('');
    console.log(reversed);

    if(strungOut === sorted){
        return 'yes, ascending';
    }else if(strungOut === reversed){
        return 'yes, descending';
    }else{
        return 'no';
    }
}

// console.log("is sorted " + isSortedAndHow([9,8,7,6]));


/* CODE WARS ARRAY ARRAY ARRAY
https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript
 */

const explode = (x) => {
    let primary = x[0];
    let secondary = x[1];
    let results = 0;
    let resultsArray = [];
    if( !isNaN(primary) && !isNaN(secondary)){
        results += primary + secondary;
    }else if(!isNaN(primary) && isNaN(secondary)){
        results += primary;
    }else if(!isNaN(secondary) && isNaN(primary)){
        results += secondary;
    }else{
        return 'Void!';
    }
    for (let i = 0; i < results; i++) {
        resultsArray.push(x);
    }
    return resultsArray;
}

// console.log(explode([2,5]));



let unsortedArray = [8,1,2,9,7,12,13,11,10,5,3,4,6,14];
function quickSort (array){
  return array.sort((a,b) => a-b);
}



function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0){
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

// console.log(displayEvenNumbers()); // should return [2,4,6,8]

function testRepeat(numArr){
    let max = 1;
    let position = 0;
    let value = -1;

    let tempNumArr= numArr.reduce((acc,curr,index) =>{
        acc[curr] = acc[curr]
            ? {...acc[curr], amount: acc[curr]['amount'] + 1}
            :{amount: 1,index}
        let amount = acc[curr].amount;
        let place = acc[curr].index;
        if(amount > max || (amount === max && place <= position && amount > 1)){
            max = amount;
            value = curr;
            position = place;
        }
        return acc
    }, {});
return value;
}

console.log(testRepeat([5,2,1,2,5]));
console.log(testRepeat([6,5,5,10,10,10]));
console.log(testRepeat([3,4,1,6,10]));

///leetcode remove duplicates
var removeDuplicates = function(nums) {
    for(let i= nums.length-1;i>=0;i--){
        if(nums[i] === nums[i-1]){
            nums.splice(i,1);
        }
    }
    console.log(nums);
};

var merge = function(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;

    for (var i = m + n - 1; i >= 0; i--) {
        if (second < 0) {
            break;
        }

        if (first >= 0 && nums1[first] > nums2[second]) {
            nums1[i] = nums1[first];
            first--;
        } else {
            nums1[i] = nums2[second];
            second--;
        }
    }
};

//multiply strings without converting directly to int//
var multiply = function(num1, num2) {
    const product = Array(num1.length+num2.length).fill(0);
    for (let i = num1.length; i--; null) {
        let carry = 0;
        for (let j = num2.length; j--; null) {
            product[1+i+j] += carry + num1[i]*num2[j];
            carry = Math.floor(product[1+i+j] / 10);
            product[1+i+j] = product[1+i+j] % 10;
        }
        product[i] += carry;
    }
    return product.join("").replace(/^0*(\d)/, "$1");
};

///Leetcode #342
var isPowerOfFour = function(n) {
    if (n === 0) {
        return false;
    } else if (n === 1) {
        return true;
    } else if (!Number.isInteger(n/4)) {
        return false;
    } else {
        return isPowerOfFour(n/4)
    }
};
console.log(isPowerOfFour(1));

///Leetcode 343
const integerBreak = (n) => {
    if(n<=3) return n-1;
    if(n%3===0) return Math.pow(3, n/3);
    if(n%3===1) return 4*Math.pow(3, (n-4)/3);
    return 2*Math.pow(3,parseInt(n/3));
}
console.log(integerBreak(10));