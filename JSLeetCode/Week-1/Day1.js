// 2667 leetcode problem

/** 
 * @returns {function}
 * this is concept of closure is special js fuction which run even after execution of its parent fuction and takes varialbe from its parent scope.
*/

var createHello = function() {
    return function(...args){
        return "Hello World";
    }
}

const f = createHello();
console.log(f());
