// 2635

/** 
 * @param [number]
 * @param {function}
 * @return [number]
 */

const map = function(arr, fn) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result[i] = fn(arr[i]);
    }

    return result;
}

let arr = [1,2,13];
const fn = function (n){
    return n*4895;
}
const newMap = map(arr, fn);
console.log(newMap);