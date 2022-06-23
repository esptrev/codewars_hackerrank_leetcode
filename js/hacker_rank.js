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

