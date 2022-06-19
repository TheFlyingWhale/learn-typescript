"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functionsMain = () => {
    const time = getTime();
    console.log(time);
    const combinedString = combineString('Hello', 'World');
    console.log(combinedString);
    const combinedStringAndNumber = combineStringAndNumberToString('Hello', 42);
    console.log(combinedStringAndNumber);
    const convertedStringNumber = convertStringNumberToNumber('42');
    console.log(convertedStringNumber);
    logInput({ name: 'John', age: 42 });
    logInputOrSeveralInputs('John', 42);
    logInputOrSeveralInputs('John');
    const defaultParametersString = functionWithDefaultParametersString();
    console.log(defaultParametersString);
    const defaultParametersNumber = functionWithDefaultParametersNumber();
    console.log(defaultParametersNumber);
};
exports.default = functionsMain;
const getTime = () => {
    return new Date().getTime();
};
const combineString = (input1, input2) => {
    return `${input1} ${input2}`;
};
const combineStringAndNumberToString = (input1, input2) => {
    return `${input1} ${input2}`;
};
const convertStringNumberToNumber = (input) => {
    return parseInt(input);
};
const logInput = (input) => {
    console.log(input);
};
const logInputOrSeveralInputs = (input1, input2) => {
    if (input1 && input2) {
        console.log(`${input1} ${input2}`);
    }
    else {
        console.log(`${input1}`);
    }
};
const functionWithDefaultParametersString = (input1 = 'input1 not set', input2 = 'input 2 not set') => {
    return `${input1} ${input2}`;
};
const functionWithDefaultParametersNumber = (input1 = 10, input2 = 2) => {
    return input1 / input2;
};
