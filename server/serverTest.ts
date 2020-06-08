interface Person {
    name: string,
    age: number
}

interface Animal {
    name: string,
    age: number,
    type: 'dog' | 'cat'
}

interface Dog extends Animal {
    type: 'dog'
}

interface Cat extends Animal {
    type: 'cat',
    color: string
}

let bob = {
    name: 'Bob',
    age: 27
}

function print(person: Person) {
    console.log(person)
}

print(bob)

function typeChecker<T>(num: T): T {
    return num
}

typeChecker<string>('hello')

type Thing = Dog | Cat


function speak (thing: Thing): void {
    if (thing.type === 'cat') {
        console.log(thing.color)
    }
    console.log('Im an animal')
}