// type 1 
// function doubleIt (num){
//     return num * 2;
// } 

// type 2
// const doubleIt = function myFuntion(num){
//     return num * 2;
// }
// type 3. es6 advanced
const doubleIt = num => num *2;
// big function
const doMath = (x, y) =>{
    const add = x + y;
    const difference = x - y;
    const math = add * difference;
    return math;
}

const result = doubleIt(20);
console.log(result);
const result2 = doMath(60, 40);
console.log(result2);

