function Animal (name, energy) {
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy

    return animal;
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
}

Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy += length
}

const leo = Animal('Leo', 7);
const snoop = Animal('Snoop', 10);


// below is the same thing without using the prototype
// prototype is a property on a function that points to an object
//prototype can be used to share methods across all instances of a function (leo, snoop, etc.)

// const animalMethods = {
//     eat (amount) {
//         console.log(`${this.name} is eating.`)
//         this.energy += amount
//     },
//     sleep (length) {
//         console.log(`${this.name} is sleeping.`)
//         this.energy += length
//     },
//     play (length) {
//         console.log(`${this.name} is playing.`)
//         this.energy += length
//     }
// }

// function Animal (name, energy) {
//     let animal = Object.create(animalMethods)
//     animal.name = name
//     animal.energy = energy

//     return animal;
// }


const parent = {
    name: 'Stacey',
    age: 35,
    heritage: 'Irish'
}

const child = Object.create(parent)
child.name = 'Ryan'
child.age = 7

console.log(child.heritage);