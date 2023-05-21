// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires. The setTimeout() method returns a unique identifier for the timer. This identifier can be used to cancel the timer using the clearTimeout() method.

const start = Date.now();
function f1(){
    const id = setTimeout(() => {
        const timeElapsed = Date.now() - start;
        console.log("lapsed timed - first f1", Math.floor(timeElapsed/1000), "sec");
    }, 1000);

    setTimeout(() => {
        const timeElapsed = Date.now() - start;
        console.log("lapsed timed - second f1", Math.floor(timeElapsed/1000), "sec");
    }, 2000);

    setTimeout(() => {
        const timeElapsed = Date.now() - start;
        console.log("lapsed timed - third f1", Math.floor(timeElapsed/1000), "sec");
    }, 3000);
    clearTimeout(id);
}

function f2(){
    setTimeout(() => {
        const timeElapsed = Date.now() - start;
        console.log("lapsed timed - first f2", Math.floor(timeElapsed/1000), "sec");
    }, 3000);

    setTimeout(() => {
        const timeElapsed = Date.now() - start;
        console.log("lapsed timed - second f2", Math.floor(timeElapsed/1000), "sec");
    }, 2000);

    setTimeout(() => {
        const timeElapsed = Date.now() - start;
        console.log("lapsed timed - third f2", Math.floor(timeElapsed/1000), "sec");
    }, 1000);
}

f1(); 

f2();