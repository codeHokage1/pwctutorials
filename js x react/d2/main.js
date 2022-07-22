// // Data Types

// let name = "Sodiq Farhan"   // String
// let age = 22 // Number
// let z = null // Null
// let y = undefined // Undefined
// let isMarried = false // Boolean

// let flagColors = ['white', 'red', 'green', 'yellow', 'blue'];

// console.log(name);
// console.log(age);
// console.log(typeof isMarried);


// // String
// let x = "Hello World";
// console.log(x.length);

let m = "I am";
let n = "I go to PWC bootcamp";
let p = "I like to learn JavaScript";

console.log(m + " Farhan. " + n + " and " + p);
console.log(`${m} Farhan. ${n} and ${p}`);
let fruits = ['apple', 'orange', 'pears', 'grapes'];
fruits.push('mango')
console.log(fruits);
fruits[2] = 'lemon'
console.log(fruits);

const person = {
    name: 'Farhan',
    age: 36,
    gender: 'male',
    isMarried: true,
    greet() {
        console.log('Hello, ' + person.name);
    }
}

person.greet();

for (let i = 1; i <= 10; i++) {
    console.log("Number is", i)
}
console.log("#################");

let i = 1;
while (i <= 20) {
    if (i === 10) {
        console.log("Yo! Number is 10");
    } else {
        console.log("Number is", i);
    }
    i++;
}

console.log("#################\n");

let score = 60;

if (score >= 70 && score <= 100) {
    console.log("Excellent!");
} else if (score >= 60 && score <= 69) {
    console.log('Very Good!');
} else if (score >= 50 && score <= 59) {
    console.log("Good!");
} else if (score >= 40 && score <= 49) {
    console.log("Pass!");
} else if (score < 40) {
    console.log("Failed");    
} else {
    console.log("You didn't take the exam!");
}

console.log("#################\n");

function addNum(a, b) {
    return a + b;
}
const subtractNum = (a, b) => {
    return a - b;
}
const divideNum = (a, b) => {
    return a / b;
}
const multiplyNum = (a, b) => {
    return a * b;
}
const squared = (n) => {
    return n * n;
}
const numMod = n => n % 2;

console.log(squared(5));

console.log("#################\n");

for (let i = 2; i <= 20; i += 2){
    console.log(i);
}

console.log("#################\n");

let someWords = "Adamu"
console.log(someWords.split(''));

let someArrays = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(someArrays.reverse());

console.log("#################\n");

const reverseString = s => s.split('').reverse().join('');
console.log(reverseString("Hello"));

console.log("#################\n");

const isPalindrome = s => s.toLowerCase().split('').reverse().join('') === s.toLowerCase() ? true : false;
console.log(isPalindrome('Anna'));

console.log("#################\n");

// function intPalindrome(n) {
//     let nStr = String(n);
//     nStr = nStr.split('').reverse().join('');
//     nStr = Number(nStr)
//     if (nStr === n) {
//         return true;
//     } else {
//         return false;
//     }
// }

const intPalindrome = n => String(n).split('').reverse().join('') === String(n ) ? true : false;
console.log(intPalindrome(1101));