// arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
// Opcion 1
console.log(a, b);
// Opcion 2
console.log(a, fruits[1]);

// Object destructuring

let user = { username: "Alexa", age: 34 };
let { username, age } = user;
// Opcion 1
console.log(username, age);
// Opcion 2
console.log(username, user.age);


// For of iteration and destructuring
const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith',
        },
        age: 35,
    },
];

for (const { name: n, family: { father: f } } of people) {
    console.log(`Name: ${n}, Father: ${f}`);
}