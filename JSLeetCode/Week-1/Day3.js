/** 2665
 * @param {number} init
 * @returns {increment: function, decrement: function, reset: function}
 */

const createCounter = function(n){
    let count = n;

    return {
        increment : function(){
            count++;
            return count;
        },
        decrement : function() {
            count--;
            return count;
        },
        reset : function(){
            count = n;
            return count;
        }
    }
}
const counter = createCounter(6);
console.log(counter.increment());