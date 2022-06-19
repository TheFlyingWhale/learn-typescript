const unionTypesMain = () => {
	printStringOrNumber('Hello');
	printStringOrNumber(42);
};

export default unionTypesMain;

function printStringOrNumber(input: string | number) {
	console.log(input);
}
