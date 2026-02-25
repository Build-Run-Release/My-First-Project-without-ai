//  let carName = "Mercedes Benz";
//  var name = "Peter";
//  const lastName = "Ronami";
//  console.log(carName);
//  const a = 10;
//  var b = 20;
//  b += 5;
//  console.log(b);
//  const string = "Hello " + "World."
//  console.log(string);
// const fullName = "Peter\n\tRonami";
// console.log(fullName);
// var myStr = "I am learning";
// myStr += " Javascript";
// console.log(myStr);
// const pronoun = "I";
// var ourString = "Here " + pronoun + " am";
// console.log(ourString);
// firstLetterOfLastName = lastName[0];
// console.log(firstLetterOfLastName);

// function convertCelsiusToFahrenheit(celsius) {
//     if (typeof celsius === "number") {
//         let fahrenheit = (celsius * 9/5) + 32;
//         return fahrenheit;
//     } else {
//         return "Please enter a valid number";
//     }
// }

// console.log(convertCelsiusToFahrenheit(100));

// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseString("hello"));

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

// let arr = [12, 45, 18, 33, 10, 22];

// function getAdultsAges(ages) {
//   const result = [];

//   for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 18) {
//       result.push(ages[i]);
//     }
//   }

//   return result;
// }

// console.log(getAdultsAges(arr));

// Strings

// const myString = "developer"

// const myNewString = myString[0].toUpperCase() + myString.substring(1);
// console.log(myNewString);

// Numbers
// const otp = Math.floor(Math.random() *1000000 + 1);
// console.log(otp);

// const x = Math.floor(Math.random() *100)
// const y = Math.floor(Math.random() *50)

// const sum = x + y;
// const difference = x - y;
// const product = x * y;
// const quotient = Math.floor(x / y)
// const rm = x % y;

// const sumOutput = `${x} + ${y} = ${sum}`;
// const differenceOutput = `${x} - ${y} = ${difference}`;
// const productOutput =`${x} * ${y} = ${product}` ;
// const quotientOutput = `${x} / ${y} = ${quotient}`;
// const rmOutput = `${x} % ${y} = ${rm}`;

// console.log(sumOutput)
// console.log(differenceOutput)
// console.log(productOutput)
// console.log(quotientOutput)
// console.log(rmOutput)

// Date
// let d;
// // d = new Date('2025-01-13T12:30');
// // d = d.toDateString();
// // d = new Date(2021, 0, 10, 12, 30, 0);
// // d = Date.now();
// d = new Date('02-06-2026');
// d.getTime();
// d.valueOf();
// d = new Date(1770247815171);
// d = Math.floor(Date.now() / 1000);
// console.log(d)

// let x;
// let d = new Date();
// x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
// x = d.toLocaleString('default', {
//     weekday:'long',
//     year:'numeric',
//     month:'long',
//     day:'numeric',
//     hour:'numeric',
//     minute:'numeric',
//     second:'numeric',
//     timeZone:'America/New_York'
// });

// console.log(x);

// let x;
// // Array literal
// const numbers = [12, 45, 33, 29, 39 ,10];
// const mixed = [12, 'Hello', true, null]

// // Array constructor
// const fruits = new Array('apple', 'grape', 'orange');
// x = `My favorite fruit is ${fruits[2]}`

// x = numbers.length;

// fruits[2] = 'pear';

// fruits[3] = 'starwberry';

// fruits[fruits.length] = 'blueberry';
// fruits[fruits.length] = 'peach';

// x = fruits;

// console.log(x);


//let x;

//const arr = [34, 55, 95, 20, 15];

//arr.push(100)

// arr.pop()

// // arr.unshift(99);

// // arr.shift();

// // arr.reverse();

// // x = arr.includes(20);

// // x = arr.indexOf(15);

// // x = arr.slice(1, 4);

// // x = arr.splice(3, 1)

// x = arr.splice(1, 4).reverse().toString().charAt(0);


// console.log(x)
//let x;


//const fruits = ['apple', 'grape', 'orange'];
//const berries = ['strawberry', 'blueberry', 'rasberry'];

//fruits.push(berries);/

//x = fruits[3][1]

//const allFruits = [fruits, berries];

//x = allFruits[1][0];

//x = fruits.concat(berries);

// Spread Operator (...)
//x = [...fruits, ...berries];

// Flatten arrays
//const arr = [1, 2, [3, 4], 5, [6, 7], 8]

//x = arr.flat();

// Static Methods on Array Object

//x = Array.isArray('Hello');

//x = Array.from('12345');

//const a = 1;
//const b = 2;
//const c = 3


//x = Array.of(a, b, c);

//console.log(x);


// const arr = [1, 2, 3, 4, 5];

// let x;  
// arr.push(6);
// arr.unshift(0)
// x = arr.reverse()
// console.log(arr)

// const arr1 = [1, 2, 3, 4, 5]; 
// const arr2 = [5, 6, 7, 8, 9, 10];

// arr1.pop()
// const arr3 = arr1.concat(arr2)
// console.log(arr3)

// const person = {
//     name:'John Doe',
//     age: 30,
//     isAdmin: true,
//     address: {
//         street: '123 Main street',
//         city: 'Boston',
//         state: 'MA',
//     },
//     hobbies: ['music', 'sports'],
// };

// x = person['name']

// x = person.age
// x = person.address.city
// x = person.hobbies[0]

// person.name = 'Jane Doe';

// x = person

// console.log(x)

// let x;

// const todo = new Object()

// todo.id = 1;
// todo.name = 'Buy Milk';
// todo.completed = false;

// x = todo

// const person = {
//     address: {
//         coord: {
//             lat: 47.586,
//             lng: -34.576,
//         },
//     },
// };

// x = person.address.coord.lat;

// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};

// const obj3 = {...obj1, ...obj2}
// const obj4 = Object.assign({}, obj1, obj2)

// const todos = [
//     {id: 1, name: 'Buy Milk'},
//     {id: 2, name: 'Pickup kids from school'},
//     {id: 3, name: 'Take out trash'}
// ];

// x = todos[0].id;

// x = Object.keys(todo)

// x = Object.keys(todo).length;

// x = Object.values(todo)

// x = Object.entries(todo)

// x = todo.hasOwnProperty('age')

// console.log(x);

// const firstName = 'John';
// const lastName = 'Doe';
// const age = 30;

// const person = {
//     firstName,
//     lastName,
//     age
// }

// console.log(person.age)

// // Destructuring

// const todo = {
//     id: 1,
//     title: 'Take out trash',
//     user: {
//         name: 'John'
//     }
// };

// const { id, title, user: { name } } = todo

// console.log(name)


// const numbers = [23, 44, 54, 65, 75];

// const [first, second, ...ages] = numbers;

// console.log(first, second, ...ages)

// const post = {
//     id: 1,
//     title: 'Post One',
//     body: 'This is the body'
// }


// //Convert to JSON String
// const str = JSON.stringify(post);

// console.log(str.id)

// //Parse JSON
// const obj = JSON.parse(str);

// console.log(obj.id)

// const posts = [
//     {
//     id: 1,
//     title: 'Post One',
//     body: 'This is the body'
//     },
//     {
//     id: 2,
//     title: 'Post Two',
//     body: 'This is the body'
//     }
// ];

// const str2 = JSON.stringify(posts)



// console.log(str2)

// const library = [
//     {
//         title: 'The wishing chair',
//         author: 'Enid Blyton',
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         },
//     },
//     {
//         title: 'Animal Farm',
//         author: 'George Orwell',
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         },
//     },
//     {
//         title: 'Lord of the Flies',
//         author: 'William Golding',
//         status: {
//             own: true,
//             reading: false,
//             read: false
//         },
//     }
// ];

// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;

// const { title: firstBook } = library[0]

// const libraryJSON = JSON.stringify(library)

// console.log(libraryJSON)

// function sayHello() {
//     console.log('Hello World');
// }

// sayHello();

// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// add(5, 10);

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// const result = subtract(5, 10);

// console.log(result, subtract(20, 5))

// // Default Parameters

// function registerUser(user = 'Bot') {
//     // if (!user) {
//     //     user = 'Bot'
//     // }
//     return user + ' is registered';
// }

// console.log(registerUser())

// function sum(...numbers) {
//     let total = 0;

//     for (const num of numbers) {
//         total += num;
//     }

//     return total
// }

// console.log(sum(1,2,3));

// function loginUser(user) {
//     return `The user ${user.name} with the id of ${user.id} is logged in`;
// }

// const user = {
//     id: 1,
//     name: 'John'
// };
// console.log(loginUser(user));
// console.log(
//     loginUser({
//         id: 2,
//         name: 'Sara',
//     })
// );

// const numbers = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ,10];

// function getRandomNum1(arr) {
//     const randomNum = Math.floor(Math.random() * arr.length)
//     const rand = arr[randomNum];
//     console.log(rand)
// };

// function getRandomNum2(...arr) {
//     const randomNum = Math.floor(Math.random() * arr.length)
//     const rand = arr[randomNum];
//     console.log(rand);
// };

// function getRandomNum(arr) {
//     const randomNum = Math.floor(Math.random() * arr.length)
//     return arr[randomNum];
// };

// console.log(getRandomNum(numbers));
// getRandomNum1(numbers);
// getRandomNum2(1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ,10);
// alert('Hello');
// console.log(innerWidth, innerHeight);

// const x = 100;
// console.log(x, 'in global');

// function run() {
//     console.log(window.innerHeight)
// };

// run();

// const x = 100;

// if(true) {
//     const y = 200;
//     console.log(x + y);
// }

// for(let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// if(true) {
//     const a = 500;
//     let b = 600;
//     var c =700;
// }

// console.log(c);

// function first() {
//     const x = 100;
    
//     function second() {
//         const y = 200;
//         console.log(x + y);
//     }

//     second();
// }

// first();

// if(true) {
//     const x = 100;

//     if(x === 100) {
//         const y = 200;
//         console.log(x + y);
//     }
// }

// Function Declaration

// function addDollarSign(value) {
//     return '$' + value
// }

// console.log(addDollarSign(100));

// // Function Expression

// const addPlusSign = function (value) {
//     return '+' + value;
// }

// console.log(addPlusSign(200))

//Arrow functions
// function add(a, b) {
//     return a + b
// } (normal function)

// const add = function (a, b) {
//     return a + b
// } (function expression)

// const add = (a, b) => {
//     return a + b
// }

// Or (implicit return)
// const subtract = (a, b) => a - b;

// when we have a single argument we don't need  brackets around it
// const double = a => a * 2;

//Returning an object

// const createObject = () => ({
//     name: 'Brad',
// })


// const numbers = [1,2,3,4,5];
// numbers.forEach(function(n) {
//     console.log(n);
// })

//Arrow function in a callback
// numbers.forEach(n => console.log(n));


// console.log(add(1, 3))
// console.log(subtract(1, 3))
// console.log(double(3))
// console.log(createObject())

//Immediately Invoked Function Expressions(IIFE)

// IIFE Syntax
// (function() {
//     const user = 'Brad';
//     console.log(user)
//     const hello = () => console.log(`Hello from IIFE and ${user}`)
//     hello();
// })();

// (function(name) {
//     console.log('Hello ' + name)
// })('Shawn')

// const getCelsius(f) {
//     celsius = (f-32)*5/9
//     return celsius
// }

// const getCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9
// console.log(`The temperature is ${getCelsius(212)} \xB0C`)
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// const minMax = (...array) => console.log(`The minimum value of the array is ${Math.min(...array)}, and the maximum value ${Math.max(...array)}`)
// minMax(...arr)

// (function(a, b) {
//     const area = a * b
//     console.log(`The area of a rectangle of width ${a} and length ${b} is ${area}`)
// })(20, 10);

// (function(a, b) {
//     const area = a * b
//     const output = (`The area of a rectangle of width ${a} and length ${b} is ${area}`)
//     console.log(output)
// })(20, 10);

// if(true) {
//     console.log('This is true')
// }

// if(false) {
//     console.log('This is NOT true')
// }

// If statements
// const x = 10
// const y = 5

// if (x > y) {
//     console.log(`${x} is greater than ${y}`)
// }

// if (x >= y) {
//     console.log(`${x} is greater than or equal ${y}`)
// }

// if (x === y) {
//     console.log(`${x} is equal to ${y}`)
// } else {
//     console.log(`${x} is not equal to ${y}`)
// }

// if (x !== y) {
//     const z = 20
//     console.log(`${z} is 20`)
// }

// console.log(z)

// shorthand if
// if (x >= y) console.log(`${x} is greater than ${y}`);
// else console.log('This is false');

// Else-if & Nesting
// const d = new Date(10, 30, 2022, 20, 0, 0)
// const hour = d.getHours();

// console.log(hour)

// if (hour < 12) {
//     console.log('Good Morning')
// } else if (hour < 18) {
//     console.log('good Afternoon')
// } else {
//     console.log('Good Night')
// }

// Nested if statements
// if (hour < 12) {
//     console.log('Good Morning');
//     if (hour === 6) {
//         console.log('Wake Up!');
//     };
// } else if (hour < 18) {
//     console.log('good Afternoon');
// } else {
//     console.log('Good Night');
//     if (hour >= 20) {
//         console.log('zzzzzzz');
//     }
// }

// AND operator
// if (hour >= 7 && hour < 15) {
//     console.log('It is work time')
// }

// OR operator
// if (hour === 6 || hour === 20) {
//     console.log('Brush your teeth')
// }

//Switches
// const d = new Date(2022, 6, 10, 19, 0, 0)
// const month = d.getMonth();
// const hour = d.getHours();

// switch(month) {
//     case 1:
//         console.log('It is January')
//         break
//     case 2:
//         console.log('It is February')
//         break
//     case 3:
//         console.log('It is March')
//         break
//     default:
//         console.log('It is not January, February or March');
// }

// switch(true) {
//     case hour < 12:
//         console.log('Good Morning')
//         break
//     case hour < 18:
//         console.log('Good Afternoon')
//         break
//     default:
//         console.log('Good Night')
// }

