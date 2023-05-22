
/** 
 * @param [number]
 * @param {function}
 * @return [number]
*/

const filter = function(arr, fn){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            result.push(arr[i])
        }
    }

    return result;
}

let arr = [1,2,3,4,5,6,8];
const fn = function(n){
    return n >= 5;
}
const newFilter = filter(arr, fn);
console.log(newFilter);