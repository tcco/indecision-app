// never user var
var nameVar = 'Tim';
var nameVar = 'Co';
console.log('nameVar', nameVar);

let nameLet = 'Me';
nameLet = 'Too';
console.log('nameLet', nameLet);

// Doesn't change value
const nameConst = 'Julias';
// nameConst = 'Ceasar';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping for let and const but not var

const fullName = 'Tim Co';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}
// errors when firstName is const/let in if statement
console.log(firstName);