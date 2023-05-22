/** 
 * @param {function} fn
 * @returns {function}
*/

const once = function(fn){
    let result = false;
    return function(...agrs){
        if(!result){
            result = true;
            return fn(...agrs)
        }
    }
}

let fn = (a,b,c) => a+b+c;
let onceFn = once(fn);

console.log(onceFn(1,2,3));
console.log(onceFn(1,2,3));