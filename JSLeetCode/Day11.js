/**
 * Promise : a promise is an object in js, that represents event completion or failure of asynchronous function and its resulting value.
 * A promise has three state : 
 * 1. Pending state: the initial state of promise in which async function is running. it is neither fullfilled nor reject.
 * 2. Fulfilled state: the state at which the async function is completed successfully.
 * 3. Rejected state: the state at which the async function encounters an error.
 * @param {number} millis
 */

let t = Date.now();
async function sleep(millis) {
    const times = new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, millis)
    });
    return times;
}

sleep(1000);
console.log(Date.now() - t);

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */