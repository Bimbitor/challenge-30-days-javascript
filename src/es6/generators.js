function* iterate(array)  {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Oscar", "Alexa", "David", "Gerlis"]);
const it2 = iterate(["Perro", "Gato", "Ave", "Hamster", "Pollo"]);
console.log(it.next().value);
console.log(it2.next().value);
console.log(it.next().value);
console.log(it2.next().value);
console.log(it.next().value);
console.log(it2.next().value);
console.log(it.next().value);
console.log(it2.next().value);
console.log(it.next().value);
console.log(it.next().value);

console.log(it2.next().value);
console.log(it2.next().value);