const genericsMain = (): void => {
    console.log(createPair<string, number>("hello", 23));
    console.log(createAnotherPair("world", 25));
    const value = new NamedValue<number>("myNumber");
    value.setValue(23);
    console.log(value.toString());

    const person = new Person<string>("myName");
    person.setName("Ole");
    console.log(person);
    console.log(person.toString());

    const wrappedValue: Wrapped<string> = { value: "test" };
    console.log(wrappedValue);

    const defaultValue = new DefaultNamedValue("myNumber");
    console.log(defaultValue.toString());
    defaultValue.setValue("myValue");
    console.log(defaultValue.toString());

    const defaultValue2 = new DefaultNamedValue("myString");
    console.log(defaultValue2.toString());
    defaultValue2.setValue("myValue");
    console.log(defaultValue2.toString());
};

//Functions
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}

const createAnotherPair = <S, T>(v1: S, v2: T): [S, T] => {
    return [v1, v2];
};

// Classes
class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T): void {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

class Person<T> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setName(value: T | undefined) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name} ${this._value}`;
    }
}

//Type Aliases
type Wrapped<T> = { value: T };

//Default Value
class DefaultNamedValue<T = string> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T): void {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

export default genericsMain;
