/**
 * @param {any} object
 * @return {string}
 */

// 2623

var jsonStringify = function(object) {
    return JSON.parse(object);
};

let obj = {
    name: "ali",
    age: 20
};

console.log(JSON.stringify(obj));