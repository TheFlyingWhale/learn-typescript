type sex = 'male' | 'female';
type age = number;
interface basicPerson {
	sex: sex;
	name: string;
	middleName?: string;
	surName: string;
}

interface alivePerson extends basicPerson {
	age: age;
	birthDate: Date | string;
}

interface deadPerson extends basicPerson {
	birthDate: Date | string;
	deathDate: Date | string;
}

const firstPerson: alivePerson = {
	sex: 'male',
	name: 'Ole',
	surName: 'Walberg',
	age: 26,
	birthDate: '05.01.1996',
};

const secondPerson: alivePerson = {
	sex: 'female',
	name: 'Tiril',
	surName: 'Intern',
	age: 24,
	birthDate: '23.06.1998',
};

const thirdPerson: deadPerson = {
	sex: 'male',
	name: 'Ole',
	middleName: 'Tormod',
	surName: 'Valberg',
	birthDate: '28.03.1902',
	deathDate: '20.06.1967',
};

export const people: (basicPerson | alivePerson | deadPerson)[] = [
	firstPerson,
	secondPerson,
	thirdPerson,
];
