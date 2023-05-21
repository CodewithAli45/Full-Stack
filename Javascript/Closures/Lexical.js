// lexical means accessing variable from a function from its parent function.

var name = "closures";
function f1(){
    console.log(name);
}
f1(); // output is closures -> f1 function has been declared inside a parent function called window or object.

function f2(){
    var  a = 10;
    function f2New(){
        console.log("inside function is ", a + 10);
    }

    f2New();
}

//f2(); // f3 is child function of f2 so f3 has access to variables declared inside its parent function.

function f3(){
    let b = 20;
    function f3New(){
        console.log("Inside function F3 is ", a + 10);
    }

    f3New();
}
// f3(); // reference error becase child function has access to variable of its parent fun if the varible declared 
// using var keyword only. let and const are block scope.

function f4(){
    var a = 1;
    function f4Call(){
        console.log(a++);
        // return a++;
    }
    f4Call();
}
f4();
f4();
f4();
f4();