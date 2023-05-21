// Lexical scope -> when inner function has access to variable of outer function, this is called lexical scope.
function out(){
    const name = "Closures";
    function inn(){
        console.log(name);
    }
    inn();
}
out();
function f1(){
    let x = 25;
}
// console.log(x);


// A closure in js is a function that has access to variable outside the scope of function declared.

function outer(){
    const name = "Ali Murtaza";
    function inner(){
        console.log(name);
    }
    return inner;
}

// outer();

// order count 
let generateOrder = function(starting){
    let count = 0;
    return function (){
        return ("Total orders = " + ++count);
    }
   
    
}
const init = generateOrder(6);
// console.log(init());
// console.log(init());
// console.log(init());


// closure count

function countBy(initial){
    this.value = initial;

    return (num) => {
        this.value += num;
        return this.value;
    }

}

const count = countBy(4);
// console.log(count(2));
// console.log(count(-4));
// console.log(count(2));




function mul(x){
    return function(y){
        return function(z){
          console.log(x*y*z);  
        }
        
    }
}

// mul(2)(5)();

// counter increasing
function counter(n){
    return () => {
        n++;
        return n;
    }
}

const num = counter(10);
console.log(num());
console.log(num());
console.log(num());