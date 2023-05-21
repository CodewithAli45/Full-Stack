// shallow copy -> A shallow copy is a type of copy that creates new array and copies references of the array too. It means that if any changes takes place to copied array, shall also reflect in the original array.
// In JavaScript, all standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()) create shallow copies rather than deep copies.
// in shallow copy two array or object are not same
// json.stringify converts js objects into json String
// json.parse() converts json string into new Object

// const arr = [1,2,3,4,5];

// const copy = [...arr];
// // console.log(copy);
// // console.log(arr === copy);

// const ingredient = ["tea", {items : ["water", "leaves", "sugar"]}];
// // console.log("original -> ",JSON.stringify(ingredient));

// const copy_ingredient = Array.from(ingredient);
// copy_ingredient[1].items = "Milk";
// console.log("copied   -> ", JSON.stringify(copy_ingredient));
// console.log("original -> ",JSON.stringify(ingredient));


// deep copy -> copy the object into new object which has no affect on original object if changing the copied object
// using json.parse() deep copy can be achieved.

const original_Array = [1,2 , {name: "John", age: 26}];

const copiedArray = JSON.parse(JSON.stringify(original_Array));
// console.log("original array", JSON.stringify(original_Array));
copiedArray[2].name = "ali murtaza";
// console.log("copied array ", JSON.stringify(copiedArray));




// MAP
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const arr = [1.2,6,7,9.25, 60];
const mapped = arr.map((index) => {
    return parseInt(index);
});
// console.log(mapped);

const mappedTwo = arr.map((num, index) => {
    if(index < 2){
        return num;
    }
});

// console.log(mappedTwo);

const strings = ['10', 1, '10'];
// console.log(strings.map(parseInt));



// Filter

const filteredArray = arr.filter((num) => {
    return num % 2 === 0;
});

// console.log(filteredArray);
const fruits = ['apple', 'oranges', 'banana', 'mango'];

function filterFruits(arr, query){
    const fruitSearched = arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
    return fruitSearched;
};

// console.log(filterFruits(fruits, 'an'));



// slice
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'tiger'];
// console.log(animals.slice()); // return all animals
// console.log(animals.slice(2)); // return animal from index 2 till last as end is not provided
// console.log(animals.slice(1, 3)); // return animals from index 1 till 2 as 3 is exclusive
// console.log(animals.slice(-2)); // return animals from end side : last is -1 and so on..



// SPLICE

// splice : use to alter original array 0-index followed
// it deletes the element at specific index and insert the element 

const months = ['Jan', 'Apr', 'May', 'Dec'];
// months.splice(1,0, 'Feb');
// months.splice(1,0, 'Feb', 'Mar');
// months.splice(5, 0, 'June', 'Aug', 'Sep', 'Oct', 'Nov');
// months.splice(7,0, 'July')
// console.log(months);
// months.splice(3, 3);
// console.log(months);


// FLAT
// flat method flaten the array or contenate into single array maximum upto three level depth
// const nums = [1,2,[3,4]];
// console.log(nums.flat());

// const numsTwo = [1,2,3,[4,5,[6,7,[8,9,10,[11,12,[15,16]]]]]];
// console.log(numsTwo.flat(2));
// console.log(numsTwo.flat(Infinity));

// console.log(numsTwo.flat(Infinity).indexOf(6));
// console.log(Array.isArray(nums));


// REDUCE
// use to make sum of all the elements given with initial value

// const number = [1,2,3,4,5];
// const sum = number.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);
// // console.log(sum);
// const object = [{x: 1}, {x:2},{x:3}];
// const sumObject = object.reduce((acc, curr) => {
//     return acc + curr.x;
// },0);

// console.log(sumObject);

// coutning instances of values in object
const names = ["Ali", "Preity", 'Jyoti', 'Babita', 'Prerna', "Priety", 'Neelam', 'Jyoti'];
const countedNames = names.reduce((allNames, name) => {
    const count = allNames[name] ?? 0;
    return {
        ...allNames,
        [name]: count + 1,
    }
}, {});
// console.log(countedNames);

// Groupping object by property
const people = [
    {name: "Ali", age: 20},
    {name: "Jyoti", age: 21},
    {name: "Babita", age: 20},
    {name: 'Prerna', age: 21}
];

function groupBy(object, property){
    const groupedObject = object.reduce((acc, curr) => {
        const key = curr[property];
        const currGroup = acc[key] ?? [];

        return {
            ...acc, [key]: [...currGroup, curr]
        }
    }, {})

    return JSON.stringify(groupedObject);
}

const grupedPeople = groupBy(people, "age");
console.log(grupedPeople);
