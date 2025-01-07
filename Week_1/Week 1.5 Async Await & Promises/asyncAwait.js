function read() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("hi there");
        }, 2000);
    });
}
async function onDone() {
    let x = await read();
    console.log(x);
}
onDone();