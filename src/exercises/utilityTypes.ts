const utilityTypesMain = (): void => {
    console.log("utilityTypes");
};

//Partial changes all the properties in an object to be optional
interface Person0 {
    name: string;
    age: number;
}

const myPerson0: Person0 = {
    name: "Ole",
    age: 26,
};

const myPerson1: Partial<Person0> = {
    name: "Knut",
};

//Required changes all the properties in an object to be required
interface Person1 {
    name: string;
    age?: number;
}

const myPerson2: Person1 = {
    name: "Ole",
};

const myPerson3: Required<Person1> = {
    name: "Ole",
    age: 26,
};

//Record is a shortcut to defining an object type with a specific key type and value type
const myPerson4: Record<PropertyKey, string | number> = {
    name: "Ole",
    age: 26,
};

const myPerson5: { [key: PropertyKey]: string | number } = {
    name: "Ole",
    age: 26,
};

//Omit removes keys from an object type
const myPerson6: Omit<Person0, "name"> = {
    age: 26,
};

const myPerson7: Omit<Person0, "age"> = {
    name: "Ole",
};

const myPerson8: Person0 = {
    name: "Ole",
    age: 26,
};

//Pick removes all but the specified keys from an object type
interface Person2 {
    name: string;
    surname: string;
    age: number;
}

const myPerson9: Pick<Person2, "name"> = {
    name: "Ole",
};

const myPerson10: Pick<Person2, "surname"> = {
    surname: "Ole",
};

//Exclude removes types from a union
type Primitive = string | number;
const value0: Primitive = 1;
const value1: Primitive = "hello";

const value3: Exclude<Primitive, number> = "hello";
const value4: Exclude<Primitive, string> = 2;

//ReturnType extracts the return type of a function type
type PointGenerator = () => { x: number; y: number };
const point0: ReturnType<PointGenerator> = {
    x: 10,
    y: 20,
};

//Parameters extracts the parameter types of a function type as an array
type PointPrinter = (p: { x: number; y: number }) => void;
const point1: Parameters<PointPrinter>[0] = {
    x: 10,
    y: 20,
};

export default utilityTypesMain;
