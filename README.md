JS interview
Basic
let a = 1;
{
         let a = 2;
         console.log(a);
}
console.log(a); // 2 1 why ? block er vetor er let o bairer let alada

var a = 1;
{
         var a = 2;
         console.log(a);
}
console.log(a); // 2 2 why ? var er vetor er variable bairer ta override korse

var a = 1;
function varTest(){
        var a = 2;
        console.log(a);
}
varTest();
console.log(a); // 2 1 function er vetor er var alada thats why var function scoped ar let block scoped

//primitive data type are immutable once created that can not changes : deep copy dont pass reference jodio reassigne kora jay.
//non primitive are mutable once created can be changed it allows shallow copy

Hoisting
//Hoisting means variables and functions are moved to the top of their scope before execution.
console.log(x);
var x = 10; // undefined
Variables declared with var are hoisted to the top of their function or global scope and initialized with undefined.
Variables declared with let and const are also hoisted, but they are not initialized. They are in a "temporal dead zone" (TDZ) until the declaration is encountered.

isNaN("abc"); // true
falsy value : false 0 "" null undefined NaN

*A function stored inside a variable.

*Spread operator is used to expand elements of an array or object.

The Temporal Dead Zone (TDZ) is the period between when a variable is hoisted (declared) and when it's initialized with a value, during which the variable cannot be accessed.

Simple Definition
Temporal: Time-based (not spatial/location-based)
Dead Zone: Area where accessing the variable causes an error
Zone: The section of code where the variable exists but can't be used

*Template literals allow string interpolation using backticks `.

# Higher order array-method
map()
👉 Returns a new array
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);

forEach() // same as map but dont return array
👉 Executes function, does not return array
nums.forEach(n => console.log(n));

filter()
👉 Returns elements that match condition
const even = nums.filter(n => n % 2 === 0);

reduce() // convert array element to single value
const numbers = [1, 2, 3];
const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum)
// Output:
// Step 0: acc=0, curr=1
// Step 1: acc=1, curr=2
// Step 2: acc=3, curr=3
// Final result: 6

# Array Method (simple)
arr.push(4);    // add at end
arr.unshift(0); // add at start
arr.pop();     // remove from end
arr.shift();   // remove from start
arr.slice(start,end); arr.slice() //do copy the entire array

# Callback function. a function that passed as an argument to another function . 
  function greet(cb) {
    const { name, expression } = cb();
    console.log(name + " " + expression);
}

function name() {
    return { name: "Arnob", expression: "goodbye" };
}

greet(name);
When multiple callbacks are nested, making code hard to read and maintain.

# How Js handled async task  (Since JS is single threaded (one task in one time))

┌───────────────────────────┐
│       Call Stack          │ ← Single thread executing JS code
│ (Main JS Execution Thread)│
└────────────┬──────────────┘
             │
┌────────────▼──────────────┐
│    Web APIs / C++ APIs    │ ← Provided by browser/Node.js (NOT in JS thread)
│  (setTimeout, DOM, fetch, │    These run in separate OS threads
│   file system, network)   │
└────────────┬──────────────┘
             │
┌────────────▼──────────────┐
│   Callback / Task Queue   │ ← Completed async tasks wait here
│      (Microtask Queue)    │
└────────────┬──────────────┘
             │
      ┌──────▼──────┐
      │ Event Loop  │ ← Continuously checks: "Is call stack empty?"
      └─────────────┘         Then moves tasks from queue to stack


when the settimeout function called the browser api starts counting and after the counting finish the event loop wating for call stack to be empty then push it to call stack.

Important: The event loop gives higher priority to the microtask queue. After each macrotask, the event loop will process all available microtasks (until the microtask queue is empty) before moving on to the next macrotask.  

Promise:
A Promise represents a value that will be available now, later, or never.
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});

A closure is a function that remembers variables from its lexical scope even after the outer function has finished execution.
why its needed
Data hiding / encapsulation
Maintaining state
Callbacks & async code

function outer() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const a = outer();
const b = outer();
console.log(a());//1
console.log(a());//2
console.log(b());//1
//lexical scope jekhane function declare hoy oi onujayi var er accessibility nirdharito hoy
 jemon vetore er variable parent scope er value nite pare but child parent er ta nite parbe na.

What is async / await?
async/await is a cleaner way to handle promises.

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
👉 await pauses execution inside the function only.

# Event Loop: JavaScript's Concurrency Manager
The event loop is the mechanism that allows JavaScript to perform non-blocking I/O operations and handle asynchronous tasks by offloading operations to the system kernel (when possible) and then executing the callbacks when the operations are complete.


The Core Concept: "The Infinite Loop That Keeps Checking"
Think of the event loop as a restaurant waiter who 
Takes orders (executes synchronous code)
Sends orders to kitchen (delegates to Web APIs)
Serves other tables while waiting (handles other tasks)
Checks when food is ready (monitors queues)
Delivers food when ready (executes callbacks)
   └───────────────────────────┘
┌─────────────────────────────────────────────────┐
│             JavaScript Runtime                  │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌─────────────┐    ┌──────────────────────┐   │
│  │   CALL      │    │     EVENT LOOP       │   │
│  │   STACK     │    │  (The Coordinator)   │   │
│  │             │    │                      │   │
│  │ [function]  │    │  while(true) {       │   │
│  │ [function]  │    │   1. Check stack     │   │
│  │             │    │   2. Check queues    │   │
│  └─────────────┘    │   3. Move tasks      │   │
│        ↑            │  }                   │   │
│        │            └──────────┬───────────┘   │
│        │                       │               │
│        │                       │               │
│  ┌─────┴─────┐   ┌─────────────▼─────────────┐ │
│  │ CALLBACK  │   │      MICROTASK QUEUE      │ │
│  │  QUEUE    │   │  (High Priority: Promises)│ │
│  │           │   │                           │ │
│  │ [timeout] │   │ [promise] [promise]       │ │
│  │ [click]   │   │                           │ │
│  └───────────┘   └───────────────────────────┘ │
│        ↑                    ↑                   │
│        │                    │                   │
└────────┼────────────────────┼───────────────────┘
         │                    │
         │                    │
         ▼                    ▼
┌─────────────────────────────────────────────────┐
│            WEB APIs (Browser)                   │
│      or C++ APIs (Node.js)                      │
│                                                 │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐           │
│  │ Timers  │ │ Network │ │  DOM    │           │
│  │         │ │   I/O   │ │ Events  │           │
│  │ ⏱️      │ │ 🌐      │ │ 🖱️      │           │
│  └─────────┘ └─────────┘ └─────────┘           │
│        │           │           │                │
│        └───────────┼───────────┘                │
│                    ▼                            │
│          (Callbacks ready → Queues)             │
└─────────────────────────────────────────────────┘

# Web API 
It allows JavaScript in the browser to interact with external systems (browser features or servers).

for (var i = 1; i <= 3; i++) { // var is function scoped
    setTimeout(() => console.log(i), 1000);
}//4 4 4 4

for (let i = 1; i <= 3; i++) {//let is block scoped
    setTimeout(() => console.log(i), 1000);
}//1 2 3

function power(exponent) {
    return function(base) {
        return base ** exponent;
    }
}

const square = power(2);
const cube = power(3);
console.log(square(5)); // 25
console.log(cube(5));   // 125

function counter(start) {
    let count = start;

    return function(step) {
        count += step;
        return count;
    }
}

const c = counter(10);
console.log(c(1)); // 11
console.log(c(5)); // 16

What is Event Bubbling?
When an event happens on an element, it first runs on that element, then moves upward through its parent elements one by one.

<div id="parent">
    <button id="child">Click me</button>
</div>
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

What is Event Delegation?
Instead of attaching event listeners to many child elements ,we attach ONE listener to a parent and use bubbling to handle child events.

# Dom manipulation
<ul id="list">
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
</ul>
document.getElementById("list").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(e.target.textContent);
    }
});
#
<form id="userForm">
    <input type="text" id="name" placeholder="Name" required />
    <br><br>
    <input type="email" id="email" placeholder="Email" required />
    <br><br>
    <input type="file" id="image" accept="image/\*" required />
    <br><br>
    <button type="submit">Submit</button>
  </form>
  <div id="cardContainer"></div>
const form = document.querySelector("#useForm");
const container = document.querySelector("#cardContainer");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const imageFile = document.querySelector("#file").files[0];
    const card = document.createElement("div");
    card.classList.add("card");
    const img = document.createElement("img");
    img.src = URL.createObjectURL(imageFile);
    const info = document.createElement("div");
    const nameEl = document.createElement("h3");
    nameEl.textContent = name;
    const emailEl = document.createElement("p");
    emailEl.textContent = email;
    info.appendChild(nameEl);
    info.appendChild(emailEl);
    card.appendChild(img);
    card.appendChild(info);
    container.appendChild(card);
    form.reset();
});



When you write JavaScript in the browser, features like:

fetch(), setTimeout() , DOM , localStorage , geolocation, are Web APIs, provided by the browser, not by JavaScript itself.
