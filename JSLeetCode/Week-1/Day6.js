/** 
 * @param {number[]} nums
 * @param {number} init
 * @param {function}
 * @return {number}
*/

const reduce = function(arr, fn, init){
    let result = init;
    for(let i = 0; i < arr.length; i++){
        result = fn(result, arr[i] );
    }
    return result;
}

const arr = [1,2,3,4];
const fn = function(acc, curr){
    return 0;
}

const init = 25;

const newReduce = reduce(arr, fn, init);
console.log(newReduce);