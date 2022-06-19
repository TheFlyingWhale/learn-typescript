const keyofMain = (): void => {
    let person = {
        name: "Max",
        age: 27,
    };
    printPersonProperty(person, "name");
    printPersonProperty(person, "age");
    const result1 = createStringPair("name", "Max");
    const result2 = createStringPair("number", 23);
    console.log(result1);
    console.log(result2);
};
//Key is a keyword in TypeScript which is used to extract the key type from an object type

//keyof with explicit keys
//When used on an object type with explicit keys, keyof creates a union type with those keys
interface Person {
    name: string;
    age: number;
}
//`keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
const printPersonProperty = (person: Person, property: keyof Person) => {
    console.log(`Printing person property ${property}: "${person[property]}"`);
};

//keyof with index signatures
//keyof can also be used with index signatures to extract the index type
type StringMap = { [key: string]: unknown };
//`keyof StringMap` resolves to "string" here
const createStringPair = (
    property: keyof StringMap,
    value: string | number
): StringMap => {
    return { [property]: value };
};

export default keyofMain;
