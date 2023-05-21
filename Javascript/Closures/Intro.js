/*

Closures: A closure is a combination of function and its lexcial environment within which function is declared.
The closure is created when a child functions to keep the environment of the parent’s scope even after the parent’s function has already executed. The Closure is a locally declared variable related to a function. The closure will provide better control over the code when using them.

*/

function test() { 
	let x = 1; 
	inner = () => { 
		return x++; 
	} 
	return inner; 
} 
// var get_func_inner = test();	

const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 1000);
}