//async
const simpleFunc = async() => {
    //throw new Error('Oh no!');
    return 12345;
};

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//async + await
const asyncTimer = () => new Promise((resolve, rejetc) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc1 = async() => {
    const data = await asyncTimer();

    return data;
};

simpleFunc1()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });