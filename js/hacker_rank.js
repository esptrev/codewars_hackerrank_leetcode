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
// console.log(findNumberOfOccurrences(inputStringOne, queryStringOne));
/// PASSED ALL TEST CASES, SUBMITTED

/// FIND MEDIAN OF ARRAY

const findMedian = (input) => {
    const sortedInputArray = input.sort((a, b) => a - b);
    const middleNum = Math.floor(input.length / 2);

    if (input.length % 2 !== 0) {
        return sortedInputArray[middleNum];
    } else {
        return (sortedInputArray[middleNum - 1] + sortedInputArray[middleNum]) / 2;
    }
}
// console.log(findMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

const findMedianOfOddLengthArray = (input) => {
    let length = input.length;
    input.sort((a, b) => a - b);
    return input[(length - 1) / 2];
}

// console.log(findMedianOfOddLengthArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

/* LONELY INTEGER
    https://www.hackerrank.com/challenges/three-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two
 */

// FIND THE ONE UNIQUE NUMBER, ALL NUMS BUT ONE OCCUR TWICE

const findUniqueNum = (intArr) => {
    let unique = intArr.find((a) => intArr.indexOf(a) === intArr.lastIndexOf(a));
    return unique;
}

// console.log(findUniqueNum([1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6]));

/* GRADING STUDENTS
    https://www.hackerrank.com/challenges/three-month-preparation-kit-grading/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two&h_r=next-challenge&h_v=zen

 */

/// IF GRADE IS LESS THAN 3 PTS FROM NEXT GRADE DIVISIBLE BY 5 ROUND UP, LESS THAN 40 NO ROUNDING, 3 OR MORE POINTS FROM NEXT LEVEL NO ROUNDING

const roundingStudentGrades = (grade) => {
    let difference = grade - (grade % 5);
    console.log(difference);
    if (difference < 3 && grade >= 38) {
        return (parseInt(grade + difference));
    } else {
        return grade;
    }
}
// console.log(roundingStudentGrades(38));

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
// console.log(countTheOccurrences([1, 1, 1, 2, 3, 3, 4, 5, 6]))

/* PANGRAM
https://www.hackerrank.com/challenges/three-month-preparation-kit-pangrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two
DOES THE ARG STRING CONTAIN ALL LETTERS OF ENGLISH ALPHABET
 */

const isItAPangram = (string) => {
    let lowerCase = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < alphabet.length; i++) {
        if (lowerCase.indexOf(alphabet[i]) < 0) {
            return 'not pangram';
        }
    }
    return 'pangram';
}

// console.log(isItAPangram('abcdefghinopqrstuvwxyz'));


/* Make API Call and sort through all pages to find country code given as argument/return country name associated with
code will have to sort through multiple pages. to find code/name
*/

async function findCountry(code) {
    code = code.toUpperCase();
    let counter = 1;
    let countryFound = false;
    do {
        await
            fetch(`https://jsonmock.hackerrank.com/api/countries?page=${counter}`)
                .then(response => response.json())
                .then(countries => {
                    let countryArray = countries.data
                    // console.log(countryArray);
                    for (let i = 0; i < countryArray.length; i++) {
                        let countryCode = (countryArray[i].alpha2Code);
                        // console.log(countryCode);
                        if (countryCode === code) {
                            console.log(countryArray[i].name);
                            countryFound = true;
                            break;
                        }
                    }
                })
        counter++
    } while (!countryFound);
}

/*SUM THE NUMBER OF POS-NEG-ZERO INTEGERS AND DIVIDE BY LENGTH OF NUMBER ARRAY - RETURN RATIO OF EACH INTEGER TYPE */


function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
    let negCount = 0;
    let posCount = 0;
    let zeroCount = 0;
    for (let i = 0; i <= n; i++) {
        if (arr[i] > 0) {
            posCount++;

        } else if (arr[i] < 0) {
            negCount++;

        } else if (arr[i] === 0) {
            zeroCount++;

        }
    }
    let posRatio = posCount / n;
    let negRatio = negCount / n;
    let zeroRatio = zeroCount / n;
    console.log(posRatio.toFixed(6));
    console.log(negRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}


/* GIVEN A NUNBER ARRAY FIND THE MINIMUM SUM AND MAXIMUM SUM USING EXACTLY 4 OF THE INTEGERS IN THE ARRAY */

function minSumMaxSum(arr){
    const sorted = arr.sort((a,b) => a-b);
    let lowSum = 0;
    let highSum = 0;
    for (let i = 0; i < (sorted.length -1); i++) {
        lowSum += sorted[i];
    }
    const reversed = arr.sort((a,b) => b-a);
    for (let i = 0; i < (reversed.length - 1); i++) {
        highSum += reversed[i];
    }
    console.log(highSum + ' ' + lowSum);
}
minSumMaxSum([3,2,5,1,4]);