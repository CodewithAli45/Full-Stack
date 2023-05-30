function delay(user) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`sent to -> ${user}`);
        })
    })
};

let users = [
    'ali', 'ross','green', 'rachel', 'dragon'
]

async function test(){
    for(let user of users){
        const mailed = await delay(user);
        console.log(mailed);
    }

    console.log("All mail sent successfully");
}
test();