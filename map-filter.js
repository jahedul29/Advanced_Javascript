const numbers = [3, 4, 7, 8, 9];
const output = [];

//Squaring in general rule
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

//using map function(It returns an array)

const result = numbers.map(function square(element) {
    return element * element;
})
console.log(result);

//Shortcut
const result = numbers.map(x => x * x);
console.log(result);

//Filter(It returns an array)
const result = numbers.map(x => x * x).filter(x => x > 50 && x < 70);
console.log(result);

//Foreach(No return value)
numbers.forEach((element) => {
    console.log(element * element);
});


//Find(It only returns an element)
const inThere = numbers.find(x => x > 5);
console.log(inThere);