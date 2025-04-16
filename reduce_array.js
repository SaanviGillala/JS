const digits = [1, 2, 3, 4]

const sum = digits.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum)
//The reduce function helps to handle arrays more easier.
//It helps to reduce the number of items in an array to a single digit.
//Example: 