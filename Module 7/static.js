class person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }

    static staticOutsideConstructor = 'Default static'
    nonStaticOutsideConstructor = 'Default nonStatic'

    intro() {
        console.log(`${this.name} says hello aged ${this.age} to ${person.staticOutsideConstructor} and ${this.nonStaticOutsideConstructor}`)
    }
}

let person1 = new person('Adam', 30)
let person2 = new person('Steve', 25)

console.log(`Person Class Static: ${person.staticOutsideConstructor}`)
console.log(`Person1 non static: ${person1.nonStaticOutsideConstructor}`)
console.log(`Person2 non static: ${person2.nonStaticOutsideConstructor}`)

person1.intro()
person2.intro()

person.staticOutsideConstructor = 'Updated static'
person1.nonStaticOutsideConstructor = 'Updated nonStatic'
console.log('==============================================After Updating==============================================')

console.log(`Person Class Static: ${person.staticOutsideConstructor}`)
console.log(`Person1 non static: ${person1.nonStaticOutsideConstructor}`)
console.log(`Person2 non static: ${person2.nonStaticOutsideConstructor}`)

person1.intro()
person2.intro()