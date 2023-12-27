function throttle(func, interval) {
    let timeout
    return function () {
        const _this = this
        const args = [...arguments]
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                func.apply(_this, args)
            }, interval)
        }
    }
}

function log(index) {
    console.log('index: ', index)
}
const logT = throttle(log, 1000)
let num = 0
setInterval(() => {
    logT(num++)
}, 100)
