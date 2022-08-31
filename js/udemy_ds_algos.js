///BIG O NOTATION///
function addUpToFirst(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i
    }
    return total;
}

// var time1= performance.now();
// console.log(addUpToFirst(1000000000));
// var time2=performance.now();
// console.log(`Elapsed time: ${(time2 - time1) / 1000}`);

function addUpToSecond(n) {
    return n * (n + 1) / 2;
}

// var time3= performance.now();
// console.log(addUpToSecond(1000000000));
// var time4= performance.now();
// console.log(`Elapsed time: ${(time4 - time3) / 1000}`);


//quadratic O(n2) grows exponential with the nested loops
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i + ',' + j);
        }
    }
}

printAllPairs(5);


// Big O(n)  based on n being bigger than 5, big o deals with worst case
function logAtLeastFive(n) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}


///Big O(1) pretty much constant here, as regardless of n we're only going to 5
function logatMostFive(n) {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}


///SPACE COMPLEXITY INTRO
/// primitive values are constant space  arrays & objects are O(n) space complexity

// Big O(1)  input arr size doesn't matter  we're creating a single variable from that array in total so its constant
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

/// Big O(n)  the new array grows directly in proportion to the input array
function double(arr) {
    let nArr = [];
    for (let i = 0; i < arr.length; i++) {
        nArr.push(2 * arr[i]);
    }
    return nArr;
}

///BIG O FOR OBJECTS  INSERTION O(1) REMOVAL O(1) SEARCH O(N) ACCESS O(1)  OBJECTS ARE GREAT WHEN YOU DON'T NEED ORDER  SEARCH IS O(N) BECAUSE AS THE LENGTH OF THE OBJECT GROWS ATTRIBRUTES/PROPS IT TAKES LONGER TO SEARCH THE VALUES OF EACH KEY

///BUILT IN OBJECT.KEYS O(N) OBJECT.VALUES O(N) OBJECT.ENTRIES O(N)  HASOWNPROPERTY O(1) SAME AS ACCESS O(1)
let instructor = {
    firstName: 'kelly',
    isInstructor: true,
    favoritNums: [1, 2, 3, 4]
}

////BIG O ARRAYS ORDERED LISTS  THE ORDER OF AN ARRAY COMES AT A COST IN BIGO  SEARCHING O(N) ACCESS O(1) INSERTION AND REMOVAL DEPENDS....PUSH/POP= O(1) simple  SHIFT/UNSHIFT= O(N)
let names = ['mike', 'trevor', 'kristin', 'andrea'];
let values = [true, {}, [], 2, 'awesome'];

/*
PUSH O-1 POP O-1 SHIFT O-N UNSHIFT O-N CONCAT 0-N SLICE O-N SPLICE 0-N SORT O(N*LOGN) FOREACH,MAP,FILTER,REDUCE,ETC O-N
 */
///START OF ALGORITHMS  BREAKING IT DOWN DETERMINING INPUTS OUTPUTS

////WRITE A FUNCTION THAT TAKES INTO A STRING AND RETURN THE COUNTS OF EACH CHARACTER IN THE STRING
// charCount('aaaa'); should return a:4
// charCount('hello'); should return h:1, e:1, l:2, o:1

function charCount(str) {
    //do something
    //create object at start
    var freqObj = {};
    //return an objec with keys that are lowercase alaphanumberic char in the string
    // iterate over input string for each character
    for (let i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase(); // in this problem casing is irrelevant
        if (freqObj[char] > 0) {
            // if the char is a key in object add 1 to value
            freqObj[char]++;
        } else {
            // if the char isn't in object , add to object and set value to 1
            freqObj[char] = 1;
        }
    }
    // if char is something else, ignore  ---- then return object at end
    return freqObj;
}

console.log(charCount('trevor'));

//If you get stuck and cannot solve, SIMPLIFY
//WHEN YOU HAVE SOMETHING THAT WORKS, GO BACK AND REFACTOR IF POSSIBLE
//CAN YOU CHECK RESULTS
//CAN YOU DERIVE RESULTS DIFFERENTLY
// CAN YOU UNDERSTAND CODE AT A GLANCE --- IMPORTANT FOR FUTURE AND FOR TEAM MATES COMPANY GUIDELINES
// CAN YOU USE RESULT OR METHOD FOR SOME OTHER PROBLEM
// CAN YOU IMPROVE PERFORMANCE?  REDUCE TIME/SPACE  NESTED LOOPS ARE QUADRATIC
//LOOK AT OTHERS WORK, SIMILAR BUT DIFFERENT PROBLEMS


// function charCountTwo(str){
//     var charArr = {};
//     for (let i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if(/[a-z0-9]/.test(char)){  //[a-z\d] intellij rec notation for all integers  will 'weed out' anything not a char or int
//             if(charArr[char] > 0){
//                 charArr[char]++;
//             }else{
//                 charArr[char] = 1;
//             }
//         }
//     }
//     return charArr;
// }

//SECOND REFACTOR BELOW ELMINATES FOR LOOP AND USE FOR OF  TIME COMPLEXITY STILL O(N) BUT LOOKS CLEANER AND ELIMINATES I
function charCountTwo(str) {
    var charArr = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (isAlphaNum(char)) {  // we ditch regex (they're slow)  and call a sep function to handle the verification
            charArr[char] = ++charArr[char] || 1;  // two if else blocks can be condensed to this, ternary?
        }
    }
    return charArr;
}

console.log(charCountTwo('trevor1976'));

function isAlphaNum(char) {
    var code = char.charCodeAt(0);
    return !(!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123));
}

////COMMON PROBLEM SOLVING PATTERNS
// FREQUENCY COUNTERS
/// WRITE A FUNCTION CALLED SAME WHICH TAKES TWO ARRAYS. RETURN TRUE IF EVERY VALUE IN FIRST ARRAY HAS ITS CORRESPONDING VALUE IN THE SECOND ARRAY SQUARED. FREQ MUST BE THE SAME
//SAME([1,2,3], [4,1,9])  RETURNS TRUE
//SAME([1,2,3],[1,9]) RETURNS FALSE
//SAME([1,2,1],[4,4,1]) RETURNS FALSE, MUST HAVE SAME FREQ
function same(arr1, arr2) {
    //check length first
    if (arr1.length !== arr2.length) {
        return false;
    }
    //iterate first array
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // checking second array for index of each element of first array squared
        if (correctIndex === -1) {
            return false;  // returns false if not present, -1 is js value when element isn't present
        }
        arr2.splice(correctIndex, 1); // shortening arr2 to remove firstindexof arr1 element, checks freq condition
    }
    return true;  // current syntax has a O(n^2) time complexity.  fori && indexOf both loop and are nested
}

console.log(same([1, 2, 3, 4], [1, 4, 9]));

///REFACTORED FUNCTION BELOW USING 3 SEPARATE LOOPS O(3N) --> O(N) VS O(N^2) WHICH IS TC FOR NESTED LOOPS
function sameTwo(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let freqCount1 = {}; // set up two sep freq objects
    let freqCount2 = {};
    for (var arr1Element of arr1) {
        freqCount1[arr1Element] = (freqCount1[arr1Element] || 0) + 1  // iterate first arr and populate freq obj
    }
    for (var arr2Element of arr2) {
        freqCount2[arr2Element] = (freqCount2[arr2Element] || 0) + 1  // iterate second arr and populate freq obj
    }
    for (let key in freqCount1) {
        if (!(key ** 2 in freqCount2)) {  // iterate second obj for presence of freq obj 1 element squared
            return false;
        }
        if (freqCount2[key ** 2] !== freqCount1[key]) {  // check again for freq of element from first obj  one loop two conditionals  if you have 2(2) you must have 2(4)
            return false;
        }
    }
    return true;
}

console.log(sameTwo([1, 2, 3, 4], [1, 4, 9]));

///anagram problem
function validAnagram(strA, strB) {
    if (strA.length !== strB.length) return false;
    //split string so I can iterate through the array
    let arrA = strA.split('')
    let arrB = strB.split('')
    //set up freq obj so we can compare counts of letters
    let freqA = {}
    let freqB = {}
    for (const arrBElement of arrB) {
        freqB[arrBElement] = (freqB[arrBElement] || 0) + 1
    }
    for (const arrAElement of arrA) {
        freqA[arrAElement] = (freqA[arrAElement] || 0) + 1
    }
    for (let key in freqA) {
        if (!(key in freqB)) {  // iterate second obj for presence of freq obj 1 element squared
            return false;
        }
        if (freqB[key] !== freqA[key]) {  // check again for freq of element from first obj  one loop two conditionals  if you have 2(2) you must have 2(4)
            return false;
        }
    }
    return true;
}
console.log(validAnagram('trevor', 'revort'));

function validAnagram2(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {};
    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}
validAnagram2('anagrams', 'nagaramm')

/// multiple pointers  write a function called sumZero which accepts an array sorted in non descending order. Find the first pair of arr elements where the sum = 0 return a new array of the two elements, or undefined if pair doesn't exist

function sumZero1(arr){
    //brute force way of doing it  O(n^2)--O(1) extremely slow when you have 1000 elements in the array
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0){
                return [arr[i],arr[j]];
            }
        }
    }
}
//O(n)--O(1) solution
function sumZero2(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left],arr[right]];
        }else if(sum > 0){
            right--
        }else{
            left++
        }
    }
}

// count unique values solution below is O(n)--O(n)
function countUniqueValues(arr){
    let freqObj = {}
    for (const arrElement of arr) {
        freqObj[arrElement] = (freqObj[arrElement] || 0) + 1
    }
    return Object.keys(freqObj).length;
}
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));

function countUniqueWithPointers(arr){
    if(arr.length === 0) return 0
    var i = 0;
    for (let j = 0; j < arr.length; j++) {
      if(arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j];
      }
    }
    return i + 1;
}
console.log(countUniqueWithPointers([1,1,2,3,3,4,5,6,6,7]))

/// sliding windows pattern can be an array or number from one position to another, useful for subsets of data in arr/string

// O(n^2)--O(n)  brute force
function maxSubarrSum(arr,n){
    if(n > arr.length) return null;
    var totalSum = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
       let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[i + j];
        }
        if(temp > totalSum) totalSum = temp;
    }
    return totalSum;
}
console.log(maxSubarrSum([1,2,5,2,8,1,5],2));

function maxSubArrSlider(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum;
}

///divide and conquer