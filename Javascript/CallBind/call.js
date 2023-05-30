// call, bind and apply are used to manipulate 'this' value in the function

// call -> invoke function with specific this value and individual arguments

// apply -> it also invoke function the specific this value but its takes arrays an arugments.

let obj = {
    firstName: 'Harry',
    lastName : "Potter",
    age: 20,
    fullName:  function(city, profile){
        // console.log(this);
        console.log(`${this.firstName} ${this.lastName} and he lives in ${city} with profle ${profile}`);
    }
}

// function borrowing

let cust = {
    firstName: 'Ross',
    lastName : "Geller"
}

// obj.fullName.call(cust, 'delhi', 'teacher');
// obj.fullName.apply(cust, ['mumbai', 'actor']);


function calculateForce(mass, acc){
    console.log(`The force of given ${this.mass} and ${this.acc} is = `);
    return this.mass * this.acc;
}

let arg1 = {
    mass: 10,
    acc: 20,
}
let arg2 = {
    mass: 15.45,
    acc: 9.8141,
}
// console.log(calculateForce.apply(arg2));
const ans = calculateForce.apply(arg2);
// console.log(ans.toFixed(2));