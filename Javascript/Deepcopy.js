// Deep copy - call be value
// any changes to original or copied varialbes it only changes into original not in copied and vice versa.

// non primitve data types if uses assign operator - shallaw copy

// let inital = 10;
// let copied = inital;

// console.log(inital);
// console.log(copied);

// copied = 20;
// console.log(inital);
// console.log(copied);



// assign operator always use deep copy for primitive data types
// let inital = {
//     name: 'ali',
//     age: 20
// }
// let copied = inital;
// console.log(inital);
// console.log(copied);
// copied.name = 'Peter';
// console.log(inital);
// console.log(copied);



// using json.stringyfy will create deep copy in object

// let inital = {
//     name: 'ali',
//     age: 30
// }
// let copied = JSON.parse(JSON.stringify(inital));
// console.log(inital);
// console.log(copied);
// copied.name = "peter";
// console.log(inital);
// console.log(copied);


// using spread operator -> partial deep copy
let inital = {
    name: 'ali',
    age: 30,
    city: {
        first: 'bokaro',
        last: 'ranchi'
    }
}
let copied = {...inital};
console.log(inital);
console.log(copied);
copied.name = "peter"; copied.city.first = "mumbai";
console.log(inital);
console.log(copied);