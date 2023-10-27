class Animal {

    sound() {
        console.log('Animals make different sounds')
    }
}

class Dog {

    sound() {
        console.log('Dog barks')
    }
}

class Cat {

    sound() {
        console.log('Cat mews')
    }
}

let Animal1 = new Animal()
let tommy = new Dog()
let percy = new Cat()

tommy.sound()
percy.sound()
Animal1.sound()