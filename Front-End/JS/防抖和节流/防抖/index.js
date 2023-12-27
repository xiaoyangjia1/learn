function debounce(func, delay) {
    let timeoutID
    return function () {
        const _this = this
        const args = [...arguments]
        if (timeoutID) {
            clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(() => {
            func.apply(_this, args)
        }, delay)
        console.log(timeoutID)
    }
}

function log(index) {
    console.log("index:", index)
}
const logFun = debounce(log, 2000)
for (let i = 0; i < 100; i++) {
    logFun(i)
}

function changeframeNum(frameNum) {
    this.frameNum = frameNum
}
const car = {
    name: 'byd',
    frameNum: '22112',
    changeframeNum: debounce(changeframeNum, 2000)
}

for (let i = 0; i < 100; i++) {
    car.changeframeNum('2023' + i)
}
console.log(car)
setTimeout(() => {
    console.log(car)
}, 3000)