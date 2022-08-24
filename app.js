
const fakeRequest = (url) => {
    // create a promise and pass a function with resolve, reject parameters
    return new Promise((resolve, reject) => {
        // create random decimal
        const rand = Math.random();
        // after a second, if rand < 0.7 - call resolve
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            // otherwise
            reject('Request Error!');
        }, 1000)
    })
}

// call fake request
fakeRequest('/cake/1')
    // success
    .then((data) => {
        // when finishes 
        console.log('DONE WITH REQUEST!')
        console.log('data is:', data)
    })
    // failure 
    .catch((err) => {
        console.log('OH NO!', err)
    })