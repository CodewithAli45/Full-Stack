function greet(message){
    console.log(`${message} ${this.name}`);
    return `${message} ${this.name}`
}

let person1 = {
    name: "Harray Potter"
}
let person2 = {
    name: "Ross Geller"
}

const out = document.getElementById('output');

document.getElementById('btn').addEventListener('click', () => {
    out.textContent = greet.call(person1, 'Hello');

});
