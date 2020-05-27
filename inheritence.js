class Animal {
	constructor(name, hair, tail, noOfLegs) {
		this.Name = name;
		this.Hair = hair;
		this.Tail = tail;
		this.NoOFLegs = noOfLegs;
	}

	displayName() {
		console.log(`The Name of your Animal is ${this.Name}`);
	}
}

class dog extends Animal {
	constructor(name, hair, tail, noOfLegs, age, breed) {
		super(name, hair, tail, noOfLegs);
		this.Age = age;
		this.Breed = breed;
	}
	displayBreed() {
		console.log(this.Breed);
	}
}

class cat extends Animal {
	constructor(name, hair, tail, noOfLegs, walks) {
		super(name, hair, tail, noOfLegs);
		this.Walks = walks;
	}
	displayWalks() {
		console.log(this.Walks);
	}
}

const Doggo = new dog('Julia', true, true, 4, 9, 'Stray');
const Catty = new cat('Ruby', true, true, 4, true);

console.log(Doggo);
console.log(Catty);

Catty.displayName();
Doggo.displayName();
Doggo.displayBreed();
