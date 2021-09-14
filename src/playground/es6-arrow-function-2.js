// argument object no longer bound with arrrow functions

const add = (a, b) => {
  // console.log(arguments); can't have with es6
  return a + b;
};

console.log(add(55, 1, 1001));


// this keyword - no longer bound

const user = {
  name: 'Tim',
  cities: ['Auckland', 'San Mateo', 'Newark'],
  printPlacesLived: function () {
    // don't use arrow function for methods b/c it doesn't have proper parent scope
    console.log(this.name);
    console.log(this.cities);
    const cityMessages = this.cities.map((city) => {
      return this.name + ' has lived in ' + city + '!';
    });
    return cityMessages;
  }
};

console.log(user.printPlacesLived());


// challenge
const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 3,
  multiply: function() {
    const multipliedNumbers = this.numbers.map((number) => {
      return this.multiplyBy * number;
    });
    return multipliedNumbers;
    
  }
};

console.log(multiplier.multiply());