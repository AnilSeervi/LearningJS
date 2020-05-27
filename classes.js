class Animal {
	constructor(name, breed, age, weight) {
		this.Name = name;
		this.Breed = breed;
		this.Age = age;
		this.Weight = weight;
	}
	displayBreed() {
		return this.Breed;
	}
}

const dog = new Animal('Julia', 'Dalmatian', 11, 20);
console.log(dog);
console.log(dog.displayBreed());
