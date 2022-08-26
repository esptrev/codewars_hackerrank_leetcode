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

function printAllPairs(n){
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
             console.log(i + ',' + j);
        }
    }
}
printAllPairs(5);