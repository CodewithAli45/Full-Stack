function delay(i){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(i);
        }, i*500);
    })
}

async function test(){
    console.log('starting..');
    for(let i = 1; i < 6; i++){
        const res = await delay(i);
        console.log(res);
        // res.then((value) => {
        //     console.log(value);
        // })
    }
    console.log('ending');
}

test();