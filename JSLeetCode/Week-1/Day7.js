/**
 * @param {Function[]} functions
 * @return {Function}
 */


let compose = function(functions) {
    if(functions.length === 0){
        return function(x){
            return x;
        };
    }

    return functions.reduceRight(function(prevFn, nextFun) {
        return function(x){
            return nextFun(prevFn(x));
        }
    })
	
};

const res = compose([x => x + 1, x => x * 2]);
console.log(res(4));