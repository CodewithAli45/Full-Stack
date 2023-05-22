// function sum(a){
//     return function(b){
//         console.log("b is ", b);
//         return a + b;
//     }
// }

// const add5 = sum(2);
// const add = add5(3);
// console.log(sum(2)(5));

// Aboce concept is called currying
// Currying means - transforming a function with multiple arguments int sequeance of functions that takes single argument.


// 2623
/**
 * @param {Function} fn
 * @return {Function}
 */
let curry = function(fn) {
    return function curried(...arg) {
        if(arg.length >= fn.length){
            return fn(...arg);
        } else {
            return function(...arg2){
                return curried(...arg, ...arg2);
            }
        }
        
    };
};

let sum = function(a,b) {
    return a + b;
}

const csum = curry(sum);
console.log(csum(2)(5));