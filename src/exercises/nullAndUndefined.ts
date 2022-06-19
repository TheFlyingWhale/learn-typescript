const nullAndUndefinedMain = (): void => {
    let home0: House = {
        sqft: 500,
    };

    let home1: House = {
        sqft: 500,
        yard: {
            sqft: 100,
        },
    };

    printYardSize(home0);
    printYardSize(home1);

    printMileage(null);
    printMileage(undefined);
    printMileage(100);

    const value = getValue();
    console.log("value length: " + value!.length);
    printArrayBoundHandlingExample();
};
//TypeScript has a powerful system to deal with null or undefined values

//Types
//null and undefined are primitive types and can be used like other types, such as string
let value: string | undefined | null = null;
value = "hello";
value = undefined;

//Optional Chaining
//is a JavaScript feature that works well with TypeScript's null handling.
//It allows accessing properties on an object, that may or may not exist, with a compact syntax.
//It can be used with the ?. operator when accessing properties.

interface House {
    sqft: number;
    yard?: {
        sqft: number;
    };
}

const printYardSize = (house: House) => {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
        console.log("No yard");
    } else {
        console.log(`Yard is ${yardSize} sqft`);
    }
};

//Nullish Coalescence
//is another JavaScript feature that also works well with TypeScript's null handling.
//It allows writing expressions that have a fallback specifically when dealing with null or undefined.
//This is useful when other falsy values can occur in the expression but are still valid.
//It can be used with the ?? operator in an expression, similar to using the && operator.

const printMileage = (mileage: number | null | undefined) => {
    console.log(`Mileage: ${mileage ?? "Not available"}`);
};

//Null Assertion
//TypeScript's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined.
//An easy way to do this is to use casting, but TypeScript also provides the ! operator as a convenient shortcut.

const getValue = (): string | undefined => {
    return "value";
};

//Array bounds handling
//Even with strictNullChecks enabled, by default TypeScript will assume array access will never return undefined (unless undefined is part of the array type).
//The config noUncheckedIndexedAccess can be used to change this behavior.
const printArrayBoundHandlingExample = (): void => {
    let array: number[] = [1, 2, 3];
    let value = array[0];
    console.log(value);
};

export default nullAndUndefinedMain;
