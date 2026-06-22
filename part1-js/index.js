// ============================================================
// PART 1 — JavaScript Basics
//
// How to run your code:
//   Open the index.html file in this folder with Live Server.
//   Your console.log output will appear in the browser's DevTools console.
//   Open DevTools: right-click the page → Inspect → Console tab
//   (or Cmd+Option+J on Mac / Ctrl+Shift+J on Windows)
//
//   Every time you save index.js, Live Server reloads the page
//   and re-runs your code automatically.
//
//   IMPORTANT — switching parts:
//   Each part has its own index.html. When you move to Part 2 or Part 3,
//   stop Live Server and restart it pointing at that part's folder.
//   Running the wrong HTML file means your changes won't show up.
//
// Instructions:
//   - Write your code directly below each prompt
//   - Every task that produces a value must use console.log to show it
//       ex: console.log(yourAnswer)
//   - For EXPLAIN prompts, write your answer as a comment directly below
//       ex: // answer: write your answer here...
// ============================================================


// ------------------------------------------------------------
// SECTION A — Variables & Math
// ------------------------------------------------------------
console.log("[ SECTION A — Variables & Math ]")


// A1.
// Declare a variable using const and assign it the number 100.
// Declare a variable using let and assign it the number 45.
// Log both.

const movies = 100
let temp = 45
console.log("There are " + movies + " movies and the tempurature is " + temp + " degrees celsius.")

// A2.
// Using only those two variables, write a single expression that adds them,
// subtracts 20, multiplies by 2, and divides by 5.
// Log the result.

console.log((((movies + temp)-20)*2)/5)


// A3.
// Reassign your let variable to a different number. Log it.
// Now try to reassign your const variable. What happens?

temp = 50
console.log("The tempurature is now " + temp + " degrees celsius." )
// works
// movies = 200
console.log("There are still " + movies + " movies")
// error: "Uncaught TypeError: Assignment to constant variable. at index.js:57:8 (anonymous) @ index.js:57 Understand this error"

//
// EXPLAIN: What is the difference between let and const?
//          Write your answer as a comment below.
//
//          answer: let can be reassigned, while const is constant, so it can't be reassigned.


// A4.
// Using the % operator, write an expression that tells you
// whether the number 47 is even or odd.
// Log the result and a message that says "even" or "odd".

let n = 4
  if(n % 2 == 0){
    console.log(n + " is even!")
} else{ 
    console.log(n + " is odd!")
}
//
// EXPLAIN: What does the % operator return?
//          Why is it useful for checking even/odd?
//
//          answer: the % operator returns a remainder, its useful when checking even or odd becuase an even number will always result in a zero and an odd number will always result in one.


// ------------------------------------------------------------
// SECTION B — Strings (reference to string methods: https://www.w3schools.com/jsref/jsref_obj_string.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION B — Strings ]")


// The following string is provided for this section. You may use methods or compute manually.
const rawInput = "   JavaScript is AWESOME   "

console.log(rawInput)
// B1.
// Log the string with all leading and trailing spaces removed (extra spaces in front and end of the text).
console.log(rawInput.trim())

// B2.
// Log the string converted to all lowercase.
console.log(rawInput.toLowerCase())

// B3.
// Log the number of characters in rawInput (including spaces).
console.log(rawInput.length)

// B4.
// Log whether rawInput contains the word "awesome" (lowercase).
// It should return true.
let result = rawInput.includes("awesome")
console.log(result)


// B5.
// Log the first 10 characters of rawInput.
let firstTen = rawInput.slice(0,10)
console.log(firstTen)

// another way
// rawInput.slice(0,10)
// console.log(rawInput.slice(0,10))

// B6.
// Split rawInput (after trimming it) into an array of individual words.
// Log the resulting array.
let trimInput = rawInput.trim()
let splitInput = trimInput.split(" ")
console.log(splitInput)

//
// EXPLAIN: What does .split() do? What argument did you pass it and why?
//
//        answer: .split() splits a string into smaller parts of that same string. I used " " becuase the quotes are the seperator, and the extra space in between seperates it by word (no space seperates it by character).


// ------------------------------------------------------------
// SECTION C — Arrays (reference to array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp)
//
// Each task tells you exactly what to use — a loop, a method, or a property.
// Use what is specified. Do not substitute one for another.
// ------------------------------------------------------------
console.log("\n[ SECTION C — Arrays ]")


// The following array is provided for this section.
const scores = [88, 72, 95, 60, 84, 100, 73, 91]

// C1.
// Log the first score. Log the last score.
// Do not hardcode the index for the last one.
console.log(scores[0])
console.log(scores[scores.length - 1])


// C2.
// Log the total number of scores we see in the array.
console.log(scores.length)


// C3.
// Use a method to mutate and add the number 78 to the end of the array.
// Log the updated array.
scores.push(78)
console.log(scores)


// C4.
// Use a method to log the index of the score 95.
// Log the index.
console.log(scores.indexOf(95))


// C5.
// Use a method to log whether the array includes the score 50.
// Log the boolean value.
console.log(scores.includes(50))


// C6.
// Use a for loop to log each score on its own line.
// Do not modify the original scores array.
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i])
}


// C7.
// Use .forEach() to log each score on its own line.
// Do not modify the original scores array.
//
scores.forEach(function(scores) {
console.log(scores)
})
// EXPLAIN: What is the difference between a for loop and forEach?
//          Is one better than the other? A for loop gives you more control over 
// how the loop runs, while forEach automatically runs a function on every item in an 
// array. Neither is always better. It depends on what you need to do.
//


// C8.
// Use .filter() to create a new array containing only the scores above 80.
// Log the new result array.
// Do not modify the original scores array.
const scoresAbove80 = scores.filter(function(score) {
  return score > 80
})

console.log(scoresAbove80)


// C9.
// Use .map() to create a new array where every score is multiplied by 2.
// Log the new result array.
// Do not modify the original scores array.
const doubledScores = scores.map(function(score) {
  return score * 2
})

console.log(doubledScores)
//
// EXPLAIN: What does .map() return? What does .filter() return?
//          How are they different?
//
//          answer: .map() returns a new array with every item changed. .filter() returns a 
// new array containing only the items that pass a condition. The difference is that map 
// transforms items, while filter removes items that do not meet a condition.





// ------------------------------------------------------------
// SECTION D — Objects (reference to object methods: https://www.w3schools.com/jsref/jsref_obj_object.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION D — Objects ]")


// The following object is provided for this section.
const student = {
  name: "Brunson",
  age: 29,
  city: "New York",
  enrolled: true
}

// D1.
// Log the value of name using dot notation.
// Log the value of city using bracket notation.
console.log(student.name)
console.log(student["city"])


// D2.
// Add a new key called grade and set it to "B+".
// Log the updated object.
student.grade = "B+"
console.log(student)


// D3.
// Use a method to log all of the keys in the object.
console.log(Object.keys(student))


// D4.
// Use a method to log all of the values in the object.
console.log(Object.values(student))



// D5.
// Using a for...in loop, log each key-value pair in this exact format:
//   name: Jane
//   age: 21
//   (etc.)
for (let key in student) {
  console.log(key + ": " + student[key])
}


// D6.
// EXPLAIN: What is the difference between dot notation and bracket notation?
//          Give an example of when you would need to use bracket notation
//          instead of dot notation.
//
//          answer: Dot notation accesses a property using a period, while bracket 
// notation uses square brackets. You would use bracket notation when the property 
// name is stored in a variable.


// ------------------------------------------------------------
// SECTION E — Arrays of Objects
// ------------------------------------------------------------
console.log("\n[ SECTION E — Arrays of Objects ]")


// The following array is provided for this section.
const roster = [
  { name: "Alex",  grade: 92, present: true  },
  { name: "Jamie", grade: 74, present: false },
  { name: "Jane",grade: 88, present: true  },
  { name: "Riley", grade: 61, present: true  },
  { name: "Casey", grade: 95, present: false }
]

// E1.
// Log the name of the third student.
console.log(roster[2].name)


// E2.
// Using forEach, log the name of every student who is present.
roster.forEach(function(student) {
  if (student.present === true) {
    console.log(student.name)
  }
})


// E3.
// Create a new array containing only the students who passed (grade >= 70).
// Log each passing student's name and grade.
const passingStudents = roster.filter(function(student) {
  return student.grade >= 70
})

passingStudents.forEach(function(student) {
  console.log(student.name + ": " + student.grade)
})



// E4.
// Create a new array of just the names of all students (no other data).
// Log the result array.
const studentNames = roster.map(function(student) {
  return student.name
})

console.log(studentNames)


// E5.
// EXPLAIN: Why would you store objects inside an array?
//          What problem does that structure solve compared to
//          storing everything in separate variables?
//
//          answer: Storing objects inside an array allows related data to be grouped 
// together and easily looped through. This is more organized than creating separate 
// variables for each item.



// ------------------------------------------------------------
// SECTION F — Functions
//
// For each task, write the function so that the calls below it produce the shown output.
// ------------------------------------------------------------
console.log("\n[ SECTION F — Functions ]")


// F1.
// Write a function called greet that takes a name as an argument
// and returns a greeting string.
//
console.log(greet("Alex"))   // → "Hello, Alex!"
console.log(greet("Mike"))   // → "Hello, Mike!"

function greet(name) {
  return "Hello, " + name + "!"
}


// F2.
// Write a function called square that takes a number and returns its square.
//
console.log(square(4))   // → 16
console.log(square(9))   // → 81

function square(number) {
  return number * number
}
//
// EXPLAIN: What does the return keyword do?
//          What does a function return if you forget to write return?
//
//          answer: The return keyword sends a value back from a function. The function returns undefined if you forget to write function.


// F3.
// Write a function called isEven that takes a number and returns
// true if it is even and false if it is odd.
//
console.log(isEven(4))   // → true
console.log(isEven(7))   // → false
console.log(isEven(0))   // → true

function isEven(num) {
  if(num % 2 === 0) {
    return true
  } else {
    return false
  }
}


// F4.
// Write a function called sum that takes an array of numbers
// and returns the total of all the numbers added together.
// Use a loop inside — do not use a built-in method.
//
console.log(sum([1, 2, 3, 4, 5]))   // → 15
console.log(sum([10, 20, 30]))       // → 60
console.log(sum([]))                 // → 0

function sum(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i]
  } return sum
}


// F5.
// Write a function called myForEach that takes an array and a callback function as arguments.
// It should call the callback on every element in the array.
// It should not return anything.
// Do not use the native .forEach() inside your function — use a for loop.
//
myForEach([1, 2, 3], function(n) {
  console.log(n)
})
// → 1
// → 2
// → 3
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}
//
// EXPLAIN: What is a callback function?
//          In the example above, what plays the role of the callback?
//
//          answer: A callback function is a function passed into another function to be 
// used later. In this example, function(n) { console.log(n) } is the callback.



// F6.
// Write a function called myMap that takes an array and a callback function as arguments.
// It should return a NEW array where each element is the result of
// calling the callback on the original element.
// Do not use the native .map() inside your function — use a for loop.
//
console.log(myMap([1, 2, 3], (n) => n * 2))    // → [2, 4, 6]
console.log(myMap([1, 2, 3], (n) => n + 10))   // → [11, 12, 13]

function myMap(array, callback) {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]))
  }

  return newArray
}


// F7.
// Write a function called myFilter that takes an array and a callback function as arguments.
// It should return a NEW array containing only the elements for which
// the callback returns true.
// Do not use the native .filter() inside your function — use a for loop.
//
console.log(myFilter([1, 2, 3, 4, 5], n => n > 3))          // → [4, 5]
console.log(myFilter([10, 25, 30, 45], n => n % 2 === 0))   // → [10, 30]

function myFilter(array, callback) {
  const newArray = []

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      newArray.push(array[i])
    }
  }

  return newArray
}
//
// EXPLAIN: What do myMap and myFilter have in common?
//          What is the key difference between what they return?
//          Why do neither of them change the original array?
//
//          answer: myMap and myFilter both use a callback function and return a new array. 
// The difference is that myMap changes every item, while myFilter only keeps items that pass 
// a condition. Neither changes the original array because they create a new array instead of 
// modifying the existing one.

