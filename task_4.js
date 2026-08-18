let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
console.log(Object.keys(student).length);
console.log(Object.values(student).length);
console.log(Object.entries(student).length);
let count = 0;

for (let key in student) {
  count++;
}

console.log(count);