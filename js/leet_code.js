/* LEET CODE TWO SUM
https://leetcode.com/problems/two-sum/
GIVEN ARRAY OF INTEGERS AND A TARGET NUMBER RETURN THE INDICES OF THE TWO NUMS INSIDE OF ARRAY THAT ADD UP TO
VALUE OF TARGET NUMBER  [1,3,5]  TN = 4  RETURN [0,1]
 */

const twoSums = (numArr, target) => {
    for (let i = 0; i < numArr.length; i++) {
        for (let j = numArr.length; j >= 0 ; j--) {
            if(numArr[i] + numArr[j] === target){
                return [i,j];
            }
        }
    }
}
console.log(twoSums([1,3,5], 4));

/* [a < b > c]  [a > b < c] */

let numbers = [1,2,1,3,4]  //expected [1,1,0]
let newNums = [1,2,3,4];   //expected [0,0]
let oldNums = [1000000000,1000000000,1000000000]; //expected [0]
const isZigZag = (n) => {
    let outputArr = [];
    for (let i = 0; i < n.length-2; i++) {
        if((n[i] < n[i+1]  && n[i+1] > n[i+2]) || (n[i] > n[i+1] && n[i+1] < n[i+2])){
            outputArr.push(1);
        }else{
            outputArr.push(0);
        }
    }
    return outputArr;
}
// console.log(isZigZag(numbers));
// console.log(isZigZag(newNums));
// console.log(isZigZag(oldNums));

function solution(year){
    var century;
    var decade;
    var strYear = year.toString();

    if(year <= 100){
        century = 1;
    }else if(year > 100 && year <= 999){
        century = parseInt(strYear.slice(0,1));
        decade = parseInt(strYear.slice(1));
        if(decade > 0){
            century++;
        }
    }else{
        century = parseInt(strYear.slice(0,2));
        decade = parseInt(strYear.slice(2));
        if(decade > 0){
            century++;
        }
    }
return century;
}

console.log(solution(375));

function countPairsDivisibleByK (A,n,K){
    let freqArr = Array(K).fill(0);

    let count = 0;
    for (let i = 0; i < n; i++) {
        var remainder = A[i] % K;
        count += freqArr[(K - remainder) % K];
        freqArr[remainder]++;
    }
    return count;
}

var A = [2,2,1,7,5,3];
var n = A.length;
var K = 4;


var a = [25,2,3,57,38,41];
let singlesArray = (a.join('').split(''));

function findTheFreq(arr){
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        if(freq[arr[i]]){
            freq[[arr[i]]] += 1;
        }else{
            freq[arr[i]] = 1;
        }
    }
    return freq;
}

console.log(findTheFreq(singlesArray));

var arrayRankTransform = function(arr) {
    let position = [];
    const sortedCopyArr =  arr.slice(0).sort((a,b) => a-b);
    const uniqSortArr = [...new Set(sortedCopyArr)];
    console.log(arr);
    console.log(uniqSortArr);
    for(let i=0;i<sortedCopyArr.length;i++){
        position.push(uniqSortArr.indexOf(arr[i]) +1);
    }
    return position;
};

var outlayer = [37,12,28,9,100,56,80,5,12];

console.log(arrayRankTransform(outlayer));

var removeDuplicates = function(nums) {
    return [...new Set(nums)];
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));