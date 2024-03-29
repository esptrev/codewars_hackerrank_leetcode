/* LEET CODE TWO SUM
https://leetcode.com/problems/two-sum/
GIVEN ARRAY OF INTEGERS AND A TARGET NUMBER RETURN THE INDICES OF THE TWO NUMS INSIDE OF ARRAY THAT ADD UP TO
VALUE OF TARGET NUMBER  [1,3,5]  TN = 4  RETURN [0,1]
 */

const twoSums = (numArr, target) => {
    for (let i = 0; i < numArr.length; i++) {
        for (let j = numArr.length; j >= 0; j--) {
            if (numArr[i] + numArr[j] === target) {
                return [i, j];
            }
        }
    }
}
console.log(twoSums([1, 3, 5], 4));

/* [a < b > c]  [a > b < c] */

let numbers = [1, 2, 1, 3, 4]  //expected [1,1,0]
let newNums = [1, 2, 3, 4];   //expected [0,0]
let oldNums = [1000000000, 1000000000, 1000000000]; //expected [0]
const isZigZag = (n) => {
    let outputArr = [];
    for (let i = 0; i < n.length - 2; i++) {
        if ((n[i] < n[i + 1] && n[i + 1] > n[i + 2]) || (n[i] > n[i + 1] && n[i + 1] < n[i + 2])) {
            outputArr.push(1);
        } else {
            outputArr.push(0);
        }
    }
    return outputArr;
}
// console.log(isZigZag(numbers));
// console.log(isZigZag(newNums));
// console.log(isZigZag(oldNums));

function solution(year) {
    var century;
    var decade;
    var strYear = year.toString();

    if (year <= 100) {
        century = 1;
    } else if (year > 100 && year <= 999) {
        century = parseInt(strYear.slice(0, 1));
        decade = parseInt(strYear.slice(1));
        if (decade > 0) {
            century++;
        }
    } else {
        century = parseInt(strYear.slice(0, 2));
        decade = parseInt(strYear.slice(2));
        if (decade > 0) {
            century++;
        }
    }
    return century;
}

console.log(solution(375));

function countPairsDivisibleByK(A, n, K) {
    let freqArr = Array(K).fill(0);

    let count = 0;
    for (let i = 0; i < n; i++) {
        var remainder = A[i] % K;
        count += freqArr[(K - remainder) % K];
        freqArr[remainder]++;
    }
    return count;
}

var A = [2, 2, 1, 7, 5, 3];
var n = A.length;
var K = 4;


var a = [25, 2, 3, 57, 38, 41];
let singlesArray = (a.join('').split(''));

function findTheFreq(arr) {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
            freq[[arr[i]]] += 1;
        } else {
            freq[arr[i]] = 1;
        }
    }
    return freq;
}

console.log(findTheFreq(singlesArray));

var arrayRankTransform = function (arr) {
    let position = [];
    const sortedCopyArr = arr.slice(0).sort((a, b) => a - b);
    const uniqSortArr = [...new Set(sortedCopyArr)];
    console.log(arr);
    console.log(uniqSortArr);
    for (let i = 0; i < sortedCopyArr.length; i++) {
        position.push(uniqSortArr.indexOf(arr[i]) + 1);
    }
    return position;
};

var outlayer = [37, 12, 28, 9, 100, 56, 80, 5, 12];

console.log(arrayRankTransform(outlayer));

var removeDuplicates = function (nums) {
    return [...new Set(nums)];
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

var scope = "js scope";

function checkScope() {
    var scope = "javascript scope";

    function f() {
        return scope;
    }

    return f;
}

console.log(checkScope());

///palindrome is a dataset that is the same forward and backwords
var isPalindrome = (x) => {
    let reversed = parseInt(x.toString().split('').reverse().join(''));
    if (x < 0) {
        return false
    } else if (x === reversed) {
        return true;
    }
    return false;
}

console.log(isPalindrome(-11011));

var minimumTotal = function (triangle) {
    // Start from the 2nd to the bottom of the triangle
    for (let i = triangle.length - 2; i >= 0; i--)
        // Add previous row cells to current cells and set the sum that is the smallest
        for (let j = 0; j < triangle[i].length; j++)
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
    // The cell at the top of the triangle will be the smallest sum of the path that goes from the bottom to the top
    return triangle[0][0]
}
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));


//leetcode 804
var uniqueMorseRepresentations = function (words) {

    var seqArray = [];

    const morseAlpha = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    const engAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    words.forEach((word) => {
        var morseString = '';
        for (const letter of [...word]) {
            morseString += morseAlpha[engAlpha.indexOf(letter)];
            console.log(morseString);
        }
        if(!seqArray.includes(morseString)){
            seqArray.push(morseString);
        }
    })
    return seqArray.length;
};

console.log(uniqueMorseRepresentations(["gin","zen","gig","msg"]))

// leetcode 1338  input number array output is a number
var minSetSize = function(arr){
    return arr.reduce((acc, curr) => {
       acc[curr] = (acc[curr] ?? 0) + 1;
   });
}

// console.log(minSetSize([5, 5, 5, 2, 2, 2, 2, 2, 9, 4]));

//leetcode 1 two sum  given an array of int nums and int target return indices of two elements of nums that add up to target

var twoSum = function (nums,target){
    //should return obj of indices of length 2, so need to create answer obj
    var indices = {};
    //can only use nums element one time
    //assume exactly one solution to problem
    // iterate nums arr
    nums.forEach((int, index) => {
        indices[int] = index
    });
    for (let index = 0; index < nums.length; index++) {
        const difference = target - nums[index];
        if(indices[difference] !== undefined && indices[difference] !== index){
            return [index,indices[difference]]
        }
    }
    // so maybe forof loop  subtract element from target, save  second loop to check for difference
    // add index of matches to answer array
}


//leetcode 7 reverse integer
var reverse = function (num) {
    // Conver the number to a string, split it to an array, reverse it, and then re-join it
    const reversedNumber = parseInt(
        Math.abs(num).toString().split('').reverse().join('')
    );

    // Check for an invalid output
    if (reversedNumber > 2147483647) {
        return 0;
    }

    // Return the reversed number (negating it if the original number was negative)
    return num < 0 ? -Math.abs(reversedNumber) : reversedNumber;
};

///leetcode 29 divide two integers cannot use % * / must use  + - and binary bitwise operators << >> ~  left shift << is same as multiplying by 2  (4 << 1 = 8) right shift >> is same as dividing by two in binary ie no remainder 9/2=4 not 4.5 (9 >> 1 = 4) bitwise complement ~

var divide = function (dividend, divisor) {
   let isPositive = (divisor > 0 && dividend > 0) || (divisor < 0 && dividend < 0)
    let quotient = 0
    const maxValue = 2147483647
    const minValue = -2147483648

    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    if(divisor === 1){
        quotient = dividend
    }
    while(divisor !== 1 && dividend >= divisor){
        dividend -= divisor
        quotient++
    }
    quotient = isPositive ? quotient : -quotient;
    if(quotient > maxValue){
        return maxValue
    }
    if(quotient < minValue){
        return minValue;
    }
    return quotient;
};

console.log(divide(10,3));

/// leetcode 869 reordered power of 2
var reorderedPowerOf2 = function (n){
    const normalize = (str) => {
        return str.split('').sort().join('')
    }

  const maxValue = 10 ** 9;
  let base = 1;
  const powerOf2 = new Set();
  while(base <= maxValue){
        powerOf2.add(normalize(base.toString()))
      base *= 2
  }
  return powerOf2.has(normalize(n.toString()))
}

console.log(reorderedPowerOf2(25));

/// project euler #7 10001st prime number
function findThePrime (int){

}

/// leetcode 11 container with most water
var maxArea = function(height) {
    let ans = 0
    let i = 0
    let j = height.length-1
    while (i < j) {
        ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i))
        height[i] <= height[j] ? i++ : j--
    }
    return ans
};