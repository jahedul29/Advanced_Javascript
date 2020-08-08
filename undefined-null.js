//If value not set

let name;
console.log(name);

let age;
console.log(age);

//When function don't return anything explicitly
function add(num1, num2) {
    console.log(num1, num2);
}
console.log(add(5, 6));

function add(num1, num2) {
    return;
}
console.log(add(5, 6));

//When sufficient parameter not passed
function add(num1, num2) {
    return (num1 + num2);
}
console.log(add(5));

//In Objects
const hero = {
    name: "mahi",
    phone: 56528456
};
console.log(hero.age);