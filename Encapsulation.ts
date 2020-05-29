class person {
  private name: string = "anil";
  public getNames() {
    console.log(this.name);
  }
}
const human = new person();
human.getNames();
console.log("Hello");
