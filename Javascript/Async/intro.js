// Async
// The async keyword is use to make function asynchronous and it return a promise.
// await keyword is use to wait the asynchronous operatoion to get executed.

let delay = new Promise((res, rej) => {
    setTimeout(() => {
        res();
    }, 1000);
});

function f1() {
    console.log('starting');
    let res = delay;
    res.then(() => console.log('resolved'));

    console.log('ending');
}
f1();