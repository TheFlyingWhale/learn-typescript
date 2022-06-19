const castingMain = (): void => {
	let x: unknown = 'hello';
	let y: unknown = 'test';
	let z: unknown = 'peter';
	console.log((x as string).length);
	console.log((y as string).length);
	console.log((<string>z).length);
};

export default castingMain;
