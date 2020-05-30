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

// Constructor Function to create objects. The name of the object/function should be in Pascal Case: OneTwoThree
function Animal(name, breed, age) {
  this.Name = name;
  this.Breed = breed;
  this.Age = age;
}
// After creating the Constructor function. We need to instantiate the object to access it, using 'new' keyword
const dog = new Animal("Dog", "Dalmatian", 10);
console.log(dog);

// Factory Function to create objects. The name of the object/function should be in Camel Case: oneTwoThree
function createCircle(radius) {
  return {
    radius, // Just the key in the object denotes that key : key(i.e., radius : radius)
    diameter: radius * 2,
    draw() {
      console.log("Drawing a Circle");
    },
  };
}

const myCircle = createCircle(2);
console.log(myCircle);
myCircle.draw();
