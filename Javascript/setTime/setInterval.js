// The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

// This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().
let i = 0;
let id;
(function f1(){
    id = setInterval(() => {
        i++;
        console.log("You called - ", i);
    }, 1500);
})();

// clearInterval(id);
// id = null;