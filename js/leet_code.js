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
console.log(twoSums([1,2,3,4,5,6], 11));
