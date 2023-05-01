const os = require('os');
// console.log('Platform: ', os.platform());
// console.log('Arch: ', os.arch());
// console.log('userInfoo', os.userInfo());

const fs = require('fs');

const genders = ['f', 'm'];
const maleNames = ['John', 'Mark', 'Bill'];
const femaleNames = ['Iga', 'Ola', 'Ala'];
const lastNames = ['Zając', 'Kowal', 'Tusk'];

const randChoice = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const people = [];

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);
  const firstName =
    gender === 'm' ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * (78 - 18 + 1) + 18);

  people.push({ gender, firstName, lastName, age });
}
console.log(people);
const data = JSON.stringify(people);
fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
