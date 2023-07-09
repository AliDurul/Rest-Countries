
/* class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi, I am ${this.name}. `
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }

}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }

        return description
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if (this.homeLocation) {
            greeting += `I am visiting from ${this.homeLocation}`

        }
        return greeting

    }
}

const me = new Student('ali durul', 25, "computer science");
const other = new Traveller('maral durul', 26, "england");
console.log(me);
console.log(me.hasMajor());
console.log(other.getGreeting());

console.log(me.getGreeting());
console.log(me.getDescription()); */

const Es6Classes1 = () => {
    return (
        <div></div>
    )
}

export default Es6Classes1