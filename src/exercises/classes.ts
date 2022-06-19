const classesMain = (): void => {
    const people: (
        | PublicPersonWithName
        | PrivatePersonWithName
        | PublicPersonWithNameAndAge
    )[] = [];

    const publicPerson = new PublicPersonWithName("Ole");
    publicPerson.name = "Jesper";
    people.push(publicPerson);

    const privatePerson = new PrivatePersonWithName("Knut");
    people.push(privatePerson);

    const publicPersonWithNameAndAge = new PublicPersonWithNameAndAge(
        "Ole",
        26
    );
    people.push(publicPersonWithNameAndAge);

    const publicPersonWithNameAndSurname = new PublicPersonWithNameAndSurname(
        "Ole",
        "Walberg"
    );
    console.log(publicPersonWithNameAndSurname.toString());
    people.push(publicPersonWithNameAndSurname);

    // console.log(people);
};

interface Name {
    getName: () => string;
    setName?: (name: string) => void;
    toString: () => string;
}

interface Surname {
    getSurname: () => string;
    setSurname?: (surname: string) => void;
    toString: () => string;
}

interface Age {
    getAge: () => number;
    setAge: (age: number) => void;
    toString: () => string;
}

//Gives access to name and make it changeable
class PublicPersonWithName implements Name {
    constructor(public name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public toString(): string {
        return `${this.name}`;
    }
}

//Denies access to name and make it unchangeable
class PrivatePersonWithName implements Name {
    constructor(private readonly name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

//Gives access to name, age and make both changeable
class PublicPersonWithNameAndAge
    extends PublicPersonWithName
    implements Name, Age
{
    constructor(name: string, public age: number) {
        super(name);
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public toString(): string {
        return `Name:${this.name} Age:${this.age}`;
    }
}

//Gives access to name, surname and make both changeable
//Overrides PublicPersonWithName toString method
class PublicPersonWithNameAndSurname
    extends PublicPersonWithName
    implements Name, Surname
{
    constructor(public name: string, public surname: string) {
        super(name);
        this.surname = surname;
    }

    public setSurname(surname: string): void {
        this.surname = surname;
    }

    public getSurname(): string {
        return this.surname;
    }

    public override toString(): string {
        return `${this.name} ${this.surname}`;
    }
}

export default classesMain;
