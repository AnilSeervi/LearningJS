let person = {
  name: "anil",
  age: 18,
  display: function () {
    console.log(this.name);
  },
};

person.display();
var car = new Object();
car.name = "honda";
car.year = 2019;
console.log(car);

function Animal(name, breed, age) {
  this.Name = name;
  this.Breed = breed;
  this.Age = age;
}

const dog = new Animal("Dog", "Dalmatian", 10);
console.log(dog);
