"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classesMain = () => {
    const people = [];
    const publicPerson = new PublicPersonWithName("Ole");
    publicPerson.name = "Jesper";
    people.push(publicPerson);
    const privatePerson = new PrivatePersonWithName("Knut");
    people.push(privatePerson);
    const publicPersonWithNameAndAge = new PublicPersonWithNameAndAge("Ole", 26);
    people.push(publicPersonWithNameAndAge);
    const publicPersonWithNameAndSurname = new PublicPersonWithNameAndSurname("Ole", "Walberg");
    console.log(publicPersonWithNameAndSurname.toString());
    people.push(publicPersonWithNameAndSurname);
    // console.log(people);
};
//Gives access to name and make it changeable
class PublicPersonWithName {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    toString() {
        return `${this.name}`;
    }
}
//Denies access to name and make it unchangeable
class PrivatePersonWithName {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
//Gives access to name, age and make both changeable
class PublicPersonWithNameAndAge extends PublicPersonWithName {
    constructor(name, age) {
        super(name);
        this.age = age;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    toString() {
        return `Name:${this.name} Age:${this.age}`;
    }
}
class PublicPersonWithNameAndSurname extends PublicPersonWithName {
    constructor(name, surname) {
        super(name);
        this.name = name;
        this.surname = surname;
        this.surname = surname;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    getSurname() {
        return this.surname;
    }
    toString() {
        return `${this.name} ${this.surname}`;
    }
}
exports.default = classesMain;
