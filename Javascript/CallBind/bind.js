// bind - is used to manipulate this keyword in a function
// but it returns a new function

function calculateMoment(){
    const ans = (this.mass * this.radius * this.radius).toFixed(3);
    console.log("Moment of Inertia is ", ans);
}

let arg1 = {
    mass: 10,
    radius: 15.36,
}

let arg2 = { 
    mass: 68.799,
    radius: 78.45,
}

const result = calculateMoment.bind(arg1);
result();
