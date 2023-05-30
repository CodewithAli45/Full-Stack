// a promise is an javascript object use to handle asynchronous functions
// a promise takes a callback function as an arguments which takes another two function resolve and reject as an arguments.
// and the Promise returns another promise object after passing below three states
// 1. pending
// 2. fulfilled
// 3. reject
// since it handles asynchrounous function it will only executes after synchronous function unless its follow the states.

// create promise
// let count = 0;
// const promise = new Promise((resolve, reject) => {
//     if(count > 1){
//         resolve(785);
//     }
//     else {
//         reject();
//     }
// });

// promise.then((value) => {
//     console.log("hey there you are resolve", value);
// }).catch((err) => {
//     console.log(err);
// });

// different promise method
// 1. Promise.race()
// 2. Promise.all()
// 3. Promise.any()

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(' -> promise one');
    }, 2000);
});

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('-> promise two');
    }, 1000);
});

Promise.race([promise1, promise2]).then((value) => {
    console.log("promise.race resolve at ", value);
}).catch((err) => {
    console.log("promise.race rejected ",);
})