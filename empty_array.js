
let numbers = [1, 2, 3, 4];
let another = numbers;

//solution 1
numbers = [];

//solution
numbers.length = 0

// solution 3
numbers.splice(0, number.length);

//solution 4
while (numbers.length > 0)
    numbers.pop();

console.log(numbers);
console.log(another);