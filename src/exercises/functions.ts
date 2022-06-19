const functionsMain = (): void => {
	const time: number = getTime();
	console.log(time);
	const combinedString: string = combineString('Hello', 'World');
	console.log(combinedString);
	const combinedStringAndNumber: string = combineStringAndNumberToString(
		'Hello',
		42
	);
	console.log(combinedStringAndNumber);
	const convertedStringNumber: number = convertStringNumberToNumber('42');
	console.log(convertedStringNumber);
	logInput({ name: 'John', age: 42 });
	logInputOrSeveralInputs('John', 42);
	logInputOrSeveralInputs('John');
	const defaultParametersString: string = functionWithDefaultParametersString();
	console.log(defaultParametersString);
	const defaultParametersNumber: number = functionWithDefaultParametersNumber();
	console.log(defaultParametersNumber);
};

export default functionsMain;

const getTime = (): number => {
	return new Date().getTime();
};

const combineString = (input1: string, input2: string): string => {
	return `${input1} ${input2}`;
};

const combineStringAndNumberToString = (
	input1: string,
	input2: number
): string => {
	return `${input1} ${input2}`;
};

const convertStringNumberToNumber = (input: string): number => {
	return parseInt(input);
};

const logInput = (input: string | number | object): void => {
	console.log(input);
};

const logInputOrSeveralInputs = (input1: any, input2?: any): void => {
	if (input1 && input2) {
		console.log(`${input1} ${input2}`);
	} else {
		console.log(`${input1}`);
	}
};

type functionAliasString = (input1?: string, input2?: string) => string;
type functionAliasNumber = (input1?: number, input2?: number) => number;

const functionWithDefaultParametersString: functionAliasString = (
	input1 = 'input1 not set',
	input2 = 'input 2 not set'
) => {
	return `${input1} ${input2}`;
};

const functionWithDefaultParametersNumber: functionAliasNumber = (
	input1 = 10,
	input2 = 2
) => {
	return input1 / input2;
};
