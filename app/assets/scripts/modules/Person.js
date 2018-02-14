class Person {
  constructor(fullName, favColor){
    this.name = fullName;
    this.favoriteColor = favColor;
  }
  greet() {
    console.log("Hi There, my name is " + this.name + " favorite color is " + this.favoriteColor)
  }
}

export default Person;
