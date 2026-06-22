// ============================================================
// PART 3 — DOM Manipulation
//
// Instructions:
//   - Write all your JavaScript here
//   - Open index.html in Live Server to test
//   - Do not edit index.html
//   - Answer EXPLAIN prompts as comments directly below each one
// ============================================================


// ------------------------------------------------------------
// SECTION A — Selecting Elements
// ------------------------------------------------------------
console.log("[ SECTION A — Selecting Elements ]")

// A1.
// Use getElementById to select the following elements.
// Look at index.html to find each element's id.
// Store each in its own variable and log all of them.
//
//   the h1
//   the p that shows the page status
//   the unordered list
const mainHeadingById = document.getElementById("main-heading")
const subtitleById = document.getElementById("subtitle")
const itemListById = document.getElementById("item-list")

console.log(mainHeadingById)
console.log(subtitleById)
console.log(itemListById)


// A2.
// Use querySelector to select the following elements.
// Store each in its own variable and log all of them.
//
//   the h2 — select it by its tag name
//   the "Toggle Highlight" button — select it by its id (look at index.html to find it)
//   a list item — select it by its class (look at index.html to find the class name)
const sectionHeading = document.querySelector("h2")
const toggleButton = document.querySelector("#toggle-btn")
const oneListItem = document.querySelector(".list-item")

console.log(sectionHeading)
console.log(toggleButton)
console.log(oneListItem)


// A3.
// Use querySelectorAll to select all elements with the class "list-item".
// Store the result in a variable and log it.
const allListItems = document.querySelectorAll(".list-item")
console.log(allListItems)



// A4.
// Use querySelectorAll to select all elements with the class "list-item".
// Loop over the result and log the text content of each one.
//
// Note: the result is a NodeList, not a plain array.
const listItemsNodeList = document.querySelectorAll(".list-item")

listItemsNodeList.forEach(function(item) {
  console.log(item.textContent)
})



// A5.
// EXPLAIN: What is the difference between getElementById and querySelector?
//          What does querySelectorAll return?
//          How is that different from a regular array?
//
//          answer: getElementById is used to select an element by its id, while 
// querySelector can select the first matching element using a tag, class, id, or 
// any valid CSS selector. querySelectorAll returns a NodeList containing all matching elements. 
// A NodeList is similar to an array because it stores multiple elements and can be looped 
// through, but it's not a regular array and doesn't have all of the same methods.


// ------------------------------------------------------------
// SECTION B — Reading and Changing the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION B — Reading and Changing the DOM ]")

// B1.
// Select the h1 with the id "main-heading" and log its text content.
const mainHeading = document.getElementById("main-heading")
console.log(mainHeading.textContent)



// B2.
// Select the p with the id "subtitle" and change its text to "Page loaded successfully."
// This should happen as soon as the page loads — not on a click.
const subtitle = document.getElementById("subtitle")
subtitle.textContent = "Page loaded successfully."


// B3.
// Select the p with the id "output-text" and change its text to anything you choose.
const outputText = document.getElementById("output-text")
outputText.textContent = "This text was changed with JavaScript."


// B4.
// Select the div with the id "output-box" and give it a background color of your choice.
// Do this with JavaScript — not by editing the CSS file.
const outputBox = document.getElementById("output-box")
outputBox.style.backgroundColor = "lightyellow"


// B5.
// EXPLAIN: What is textContent?
//          How is it different from innerHTML?
//          When would using innerHTML be risky?
//
//          answer: textContent is used to get or change only the text inside an element.
// innerHTML can get or change both the text and the HTML tags inside an element.
// Using innerHTML can be risky because if content comes from a user, they may be able to 
// insert HTML or JavaScript into the page, which can create security issues.


// ------------------------------------------------------------
// SECTION C — Responding to Events
// ------------------------------------------------------------
console.log("\n[ SECTION C — Responding to Events ]")

// C1.
// Add a click listener to the button with the id "change-btn".
// When clicked, change the text of the h1 with the id "main-heading" to any text you choose.
const changeButton = document.getElementById("change-btn")

changeButton.addEventListener("click", function() {
  mainHeading.textContent = "The heading changed!"
})


// C2.
// Add a click listener to the button with the id "toggle-btn".
// When clicked, toggle the class "highlighted" on the p with the id "output-text".
// Add it if it is not there. Remove it if it is.
toggleButton.addEventListener("click", function() {
  outputText.classList.toggle("highlighted")
})


// C3.
// Select the h1 with the id "main-heading" and add the class "active" to it.
// Log the element's class list to confirm the class is there.
//
// Then select one of the list items that already has the class "list-item".
// Remove that class from it.
// Log its class list to confirm the class is gone.
mainHeading.classList.add("active")
console.log(mainHeading.classList)

const firstListItem = document.querySelector(".list-item")
firstListItem.classList.remove("list-item")
console.log(firstListItem.classList)


// C4.
// EXPLAIN: What is an event listener?
//          Why can't you write the code outside of a function
//          and expect it to run when the button is clicked?
//
//          answer: An event listener waits for a specific event to occur, such as a button 
// click, and then runs the code attached to it. You cannot write the code outside of a function
// and expect it to run when the button is clicked because code outside the function runs 
// immediately when the page loads. The function tells the browser what code should run later 
// when the event actually occurs.


// C5.
// EXPLAIN: What does classList.toggle do?
//          What does classList.add do? What does classList.remove do?
//          How are they different from setting element.className directly?
//
//          answer: classList.toggle will add a class if it is not already on the element and 
// remove it if it is. classList.add adds a class to an element, while classList.remove removes 
// a class from an element. These methods are different from setting className directly because 
// classList allows you to work with individual classes. Setting className directly can replace 
// all existing classes on the element.


// ------------------------------------------------------------
// SECTION D — Creating and Adding to the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION D — Creating and Adding to the DOM ]")

// D1.
// Create a new li element.
// Set its text content to any item you choose.
// Give it the class "list-item".
// Append it to the ul with the id "item-list".
const newItem = document.createElement("li")
newItem.textContent = "Mangoes"
newItem.classList.add("list-item")
itemListById.appendChild(newItem)


// D2.
// Add a click listener to the button with the id "add-btn".
// When clicked:
//   - Read the current value from the input with the id "item-input"
//   - Create a new li element and set its text to that value
//   - Give it the class "list-item"
//   - Append it to the ul with the id "item-list"
//   - Clear the input field after
const addButton = document.getElementById("add-btn")
const itemInput = document.getElementById("item-input")

addButton.addEventListener("click", function() {
  const inputValue = itemInput.value

  const addedItem = document.createElement("li")
  addedItem.textContent = inputValue
  addedItem.classList.add("list-item")

  itemListById.appendChild(addedItem)

  itemInput.value = ""
})


// D3.
// Select the p with the id "output-text" and remove it from the page entirely.
// After this runs, the element should no longer be visible.
outputText.remove()


// D4.
// EXPLAIN: What does createElement do?
//          What does appendChild do? What does remove() do?
//          When does the newly created element actually appear on the page?
//
//          answer: createElement creates a new HTML element using JavaScript. 
// appendChild adds that element to another element that already exists in the DOM. 
// remove() removes an element from the DOM completely. The newly created element does not 
// appear on the page when createElement is called. It only appears after it has been appended 
// to an element that is already on the page.

