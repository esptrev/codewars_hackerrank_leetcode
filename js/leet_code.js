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
// console.log(twoSums([1,2,3,4,5,6], 11));

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
console.log(isZigZag(numbers));
console.log(isZigZag(newNums));
console.log(isZigZag(oldNums));



