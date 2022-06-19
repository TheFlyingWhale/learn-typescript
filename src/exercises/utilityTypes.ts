const utilityTypesMain = (): void => {
    console.log("utilityTypes");
};

interface test {
    name: string;
    age: number;
}

const createObject = (object: object): object => {
    return {
        ...object,
    };
};

const testObject = createObject<test>({ name: "Ole", age: 26 });

export default utilityTypesMain;
