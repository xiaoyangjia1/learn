function newFun(constructor) {
    return function () {
        const obj = {
            __proto__: constructor.prototype
        }
        const result = constructor.apply(obj, arguments)
        return typeof result === 'object' ? result : obj
    }
}

function Person(name, age) {
    this.name = name
    this.age = age
}

const person = newFun(Person)('yqx', 22)
const person1 = new Person('yqx', 22)
console.log(person, person.name, person.age)
console.log(person1, person1.name, person1.age)
