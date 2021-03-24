const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 500)
})

//IIFE
(async function() {
    console.log('Begin')

    const text = await promise
    console.log(text)

    //or
    promise.then(console.log) // console.log(await promise)

    try {
        const res = await promise
        const result = await promise
        setTimeout(() => console.log(res), 5000)
    } catch (rej) {
        console.error(rej)
    }

})()