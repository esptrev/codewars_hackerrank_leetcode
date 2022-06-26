'use strict';

/* SPARSE ARRAYS HACKER-RANK
  https://www.hackerrank.com/challenges/three-month-preparation-kit-sparse-arrays/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-one

*/

/// COLLECTION OF INPUT STRING AND COLLECTION OF QUERY STRINGS, FOR EACH QUERY STRING
/// DETERMINE # OF TIMES QS OCCURS IN INPUT STRINGS  RETURN ARRAY OF INTEGER RESULTS


let inputStringOne = ['aba', 'baba', 'aba', 'xzxb'];
let queryStringOne = ['aba', 'xzxb', 'ab'];

const findNumberOfOccurrences = (iString, qString) => {
    let occurrenceArray = [];
    for (let i = 0; i < qString.length; i++) {
        let occurrences = 0;
        for (let j = 0; j < iString.length; j++) {
            if (iString[j] === qString[i])
                occurrences++;
        }
        occurrenceArray.push(occurrences);
    }
    return occurrenceArray;
}
console.log(findNumberOfOccurrences(inputStringOne, queryStringOne));
/// PASSED ALL TEST CASES, SUBMITTED

/// FIND MEDIAN OF ARRAY

const findMedian = (input) => {
    const sortedInputArray = input.sort((a,b) => a-b);
    const middleNum = Math.floor(input.length / 2);

    if(input.length % 2 !== 0){
        return sortedInputArray[middleNum];
    }else {
        return(sortedInputArray[middleNum - 1] + sortedInputArray[middleNum]) /2;
    }
}
console.log(findMedian([1,2,3,4,5,6,7,8,9,10]))

const findMedianOfOddLengthArray = (input) => {
    let length = input.length;
    input.sort((a,b) => a-b);
    return input[(length -1) /2];
}

console.log(findMedianOfOddLengthArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

/* LONELY INTEGER
    https://www.hackerrank.com/challenges/three-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two
 */

// FIND THE ONE UNIQUE NUMBER, ALL NUMS BUT ONE OCCUR TWICE

const findUniqueNum = (intArr) => {
    let unique = intArr.find((a) => intArr.indexOf(a) === intArr.lastIndexOf(a));
    return unique;
}

console.log(findUniqueNum([1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6]));

/* GRADING STUDENTS
    https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two&h_r=next-challenge&h_v=zen

 */

/// IF GRADE IS LESS THAN 3 PTS FROM NEXT GRADE DIVISIBLE BY 5 ROUND UP, LESS THAN 40 NO ROUNDING, 3 OR MORE POINTS FROM NEXT LEVEL NO ROUNDING

const roundingStudentGrades = (grade) => {
    let difference = grade - (grade % 5);
    console.log(difference);
    if(difference < 3 && grade >= 38){
       return (parseInt(grade + difference));
    }else{
        return grade;
    }
}
console.log(roundingStudentGrades(38));

/* COUNTING SORT
https://www.hackerrank.com/challenges/three-month-preparation-kit-countingsort1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two

RETURN ARRAY WITH THE COUNT OF THE NUMBER OF OCCURENCES OF EACH VALUE IN THE NUMBER ARRAY RETURN
VALUES UP TO 100
 */

const countTheOccurrences = (arr) => {
    let frequencyArray = new Array(100).fill(0);
    for (let num of arr) {
        frequencyArray[num]++
    }
    return frequencyArray;
}
console.log(countTheOccurrences([1,1,1,2,3,3,4,5,6]))

/* PANGRAM
https://www.hackerrank.com/challenges/three-month-preparation-kit-pangrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two
DOES THE ARG STRING CONTAIN ALL LETTERS OF ENGLISH ALPHABET
 */

const isItAPangram = (string) => {
    let lowerCase = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < alphabet.length; i++) {
        if(lowerCase.indexOf(alphabet[i]) < 0){
            return 'not pangram';
        }
    }
    return 'pangram';
}

console.log(isItAPangram('abcdefghinopqrstuvwxyz'));