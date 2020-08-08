const numbers = [1, 2, 4, 6, 7, 59, 4, 67];

//break
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 5) {
        break;
    }
    console.log(element);
}

//continue
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element == 6) {
        continue;
    }
    console.log(element);
}