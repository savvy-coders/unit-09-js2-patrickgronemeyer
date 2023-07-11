// 1. Create a function named 'greet' that takes one parameter 'name'. The function should log a greeting message with the provided name. Call the function with your name as an argument.
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!


// 2. Create a function named 'calculateSum' that takes two parameters 'a' and 'b'. The function should return the sum of 'a' and 'b'. Call the function with two numbers of your choice and log the result.
function calculateSum(a, b) {
  return a + b;
}

let result = calculateSum(3, 4);
console.log(result); // Output: 7


// 3. Create a function named 'outerFunction' that declares a variable 'x' with a value of 10. Inside 'outerFunction', define another function named 'innerFunction' that logs the value of 'x'. Call 'innerFunction' inside 'outerFunction', and then call 'outerFunction'.
function outerFunction() {
  let x = 10;

  function innerFunction() {
    console.log(x);
  }

  innerFunction(); // Output: 10
}

outerFunction(); // Output: 10


// 4. Modify 'outerFunction' so that 'innerFunction' is returned instead of being called. Assign the returned 'innerFunction' to a variable named 'closure' and call 'closure'. Log the result.
function outerFunction() {
  let x = 10;

  function innerFunction() {
    console.log(x);
  }

  return innerFunction;
}

let closure = outerFunction();
closure(); // Output: 10


// 5. Create a function named 'handleClick' that takes one parameter 'event'. The function should log the message 'Button clicked!', the event type, and the target element. Then, write code to select an HTML button element with the ID 'myButton' and attach the 'handleClick' function as a click event listener.
function handleClick(event) {
  console.log("Button clicked!");
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
}

const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);


// 6. Modify 'handleClick' to prevent the click event from propagating to parent elements.
function handleClick(event) {
  event.stopPropagation();
  console.log("Button clicked!");
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
}

const button = document.getElementById("myButton");
button.addEventListener("click", handleClick);


// 7. Create a function named 'createNewElement' that creates a new 'div' element, sets its 'className' to 'myClass', sets its 'innerHTML' to 'New element', and appends it to an existing element with the ID 'parentElementId'. After appending the new element, attach a 'mouseover' event listener to it that logs the message 'Mouse over new element!'.
function createNewElement() {
  const parentElement = document.getElementById("parentElementId");

  const newElement = document.createElement("div");
  newElement.className = "myClass";
  newElement.innerHTML = "New element";
  parentElement.appendChild(newElement);

  newElement.addEventListener("mouseover", function() {
    console.log("Mouse over new element!");
  });
}

createNewElement();
