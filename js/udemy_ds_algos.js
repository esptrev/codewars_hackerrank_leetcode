///BIG O NOTATION///
function addUpToFirst(n){
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

function addUpToSecond(n){
    return n * (n+1) / 2;
}
// var time3= performance.now();
// console.log(addUpToSecond(1000000000));
// var time4= performance.now();
// console.log(`Elapsed time: ${(time4 - time3) / 1000}`);


//quadratic O(n2) grows exponential with the nested loops
function printAllPairs(n){
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
             console.log(i + ',' + j);
        }
    }
}
printAllPairs(5);


// Big O(n)  based on n being bigger than 5, big o deals with worst case
function logAtLeastFive(n){
    for (let i = 0; i <= Math.max(5,n); i++) {
        console.log(i);
    }
}


///Big O(1) pretty much constant here, as regardless of n we're only going to 5
function logatMostFive(n){
    for (let i = 0; i <= Math.min(5,n); i++) {
        console.log(i);
    }
}


///SPACE COMPLEXITY INTRO
/// primitive values are constant space  arrays & objects are O(n) space complexity

// Big O(1)  input arr size doesn't matter  we're creating a single variable from that array in total so its constant
function sum(arr){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}

/// Big O(n)  the new array grows directly in proportion to the input array
function double(arr){
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
    favoritNums: [1,2,3,4]
}

////BIG O ARRAYS ORDERED LISTS  THE ORDER OF AN ARRAY COMES AT A COST IN BIGO  SEARCHING O(N) ACCESS O(1) INSERTION AND REMOVAL DEPENDS....PUSH/POP= O(1) simple  SHIFT/UNSHIFT= O(N)
let names = ['mike','trevor','kristin','andrea'];
let values = [true,{},[],2,'awesome'];

/*
PUSH O-1 POP O-1 SHIFT O-N UNSHIFT O-N CONCAT 0-N SLICE O-N SPLICE 0-N SORT O(N*LOGN) FOREACH,MAP,FILTER,REDUCE,ETC O-N
 */
///START OF ALGORITHMS  BREAKING IT DOWN DETERMINING INPUTS OUTPUTS

////WRITE A FUNCTION THAT TAKES INTO A STRING AND RETURN THE COUNTS OF EACH CHARACTER IN THE STRING
// charCount('aaaa'); should return a:4
// charCount('hello'); should return h:1, e:1, l:2, o:1

function charCount(str){
    //do something
    //create object at start
    //return an objec with keys that are lowercase alaphanumberic char in the string
    // iterate over input string for each character
        // if the char is a key in object add 1 to value
        // if the char isn't in object , add to object and set value to 1
        // if char is something else, ignore
    // then return object at end
}
