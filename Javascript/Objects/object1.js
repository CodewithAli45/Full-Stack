const obj1 = {
    a : 10,
    b : 20,
    c : 35,
    d : 45
}


const obj2 = {
    a : 10,
    b : 30,
    c : 375,
    d : 45
}

for(a in obj1){
    console.log(obj1[a]);
}

function printCommon(obj1, obj2){
    for(key1 in obj1){
        if(obj2.hasOwnProperty(key1) && obj1[key1] === obj2[key1]){
            console.log(key1 + " " + obj1[key1]);
        }
    }
};

// printCommon(obj1, obj2);