function generate(){
    let res;
    for(let i = 1; i < 7; i++){
        const id = setTimeout(() => {
            res = Math.random().toFixed(2);
            console.log(res);
        }, 1000);
    }
}

generate();