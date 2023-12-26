function newFun(constructor) {
    return function () {
        const newInstance = {}
        if (typeof constructor.prototype === 'object') {
            newInstance.__proto__ = constructor.prototype
        }
        const result = constructor.apply(newInstance, arguments)
        console.log(result)
        return typeof result === 'object' ? result : newInstance
    }
}

function Person(name, age) {
    this.name = name
    this.age = age
}

const person = newFun(Person)('TateYang', 22)
const person1 = new Person('TateYang', 22)
console.log(person, person.name, person.age)
console.log(person1, person1.name, person1.age)

function Car(name) {
    this.name = name
    return {a:2}
}

const car = newFun(Car)('byd')
const car1 = new Car('byd')
console.log(car, car.name)
console.log(car, car1.name)
