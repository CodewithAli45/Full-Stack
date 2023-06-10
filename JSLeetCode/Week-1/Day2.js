// 2620
/** ..
 * @param {number} n
 * @returns {function} counter
 */

const createCounter = function(n) {
    return function() {
        n++;
        return n-1;
    }
}

const counter = createCounter(5);
console.log(counter());
console.log(counter());