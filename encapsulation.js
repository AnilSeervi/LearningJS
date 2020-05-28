var person = /** @class */ (function () {
    function person() {
        this.name = 'anil';
    }
    person.prototype.getNames = function () {
        console.log(this.name);
    };
    return person;
}());
var human = new person();
human.getNames();
console.log('Hello');
