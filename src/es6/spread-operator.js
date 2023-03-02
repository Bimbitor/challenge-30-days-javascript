// Spread Operator
// Operador de propagación

let person = { name: "Alexa", age: 24 , skills : [ "Excel", "Power Bi", "Python"]};
let country = "COL"

let data = { ...person, country };
console.log(data);


// Rest Parameters

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0]; // returns 1 + 1 => (2)
}

sum(1, 1, 2, 3)