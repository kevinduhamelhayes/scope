const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if (Math.random() < 0.5) {
            resolve('hello world');
        } else {
            reject(new Error('hello error'));
        }
    }, 2000);
});
const cows = 15;
const countCows = new Promise(function(resolve, reject) {
    if (cows === 15) {
        resolve('correcto');
    } else {
        reject(new Error('incorrecto'));
    }
});
countCows.then((result) => {
    console.log(result);
}   ).catch((err) => {
    console.error(err);
}
).finally(() => {
    console.log('finalizo');
});