// ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //

// LOGGING OUTPUT
alert('Hello World'); // Do not use for debugging. Stops script and only strings
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning'); /* they are outputs to console,konsola yazdırmak,print ettirmek */


// VARIABLES - var, let, const
let age = 30;

// let can be re-assigned, const can not
age = 31;
/* Three ways to set JS variables: var,let,const.var: global scope not used for most part
Difference between let and const: With let we can reassign values. Const means constant it cant change its value. */

// DATA TYPES - String, Number, Boolean, null, undefined, symbol
const name = 'Brad';
const age = 37;
const rating = 3.5; /* There is no decimal or float just number. */
const isCool = true;
const x = null; /* null means empty */
const y = undefined;
let z; // undefined as well.

// Check type
console.log(typeof z);


// STRINGS
// Concatenation (ard arda ekleme)
console.log('My name is ' + name + ' and I am ' + age); /* old way-bad */
// Template literal (better)
console.log(`My name is ${name} and I am ${age}`);

//String içine variable gömerken ${} ve ` ` kullanılır.
// String methods & properties (method is a function associated with an object) we can other other methods together as well
const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split(''); /* splits each char */


// ARRAYS - Store multiple values in a variable
const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruit);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value (but you have to know indexes of array)
fruits[4] = 'blueberries';

// Add value to end using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));

// // Get index an element
console.log(fruits.indexOf('oranges'));


// OBJECT LITERALS (KVPs)
const person = { 
  firstName: 'John',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  } /* name,age address.. are keys others are values = KVP */
}

// Get single value
console.log(person.name)

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// Pulling objects from person(Advanced)
const { firstName, address: {city}} = person;
console.log(city);

// Add property
person.email = 'jdoe@gmail.com';

// Array of objects/items
const todos = [  
  {
    id: 1, 
    text: 'Take out trash',
    isComplete: false           // todos[0]
  },
  {
    id: 2, 
    text: 'Dinner with wife',
    isComplete: false           // todos[1]
  },
  {
    id: 3, 
    text: 'Meeting with boss',
    isComplete: true             // todos[2]
  } /* array with a three values which are all objects */
];

// Get specific object/item value
console.log(todos[1].text);

// Format as JSON
console.log(JSON.stringify(todos)); /* converts to JSON format */


// LOOPS
// For iterator : initial,condition, increment 
for(let i = 0; i <= 10; i++){ 
  console.log(`For Loop Number: ${i}`);
} 

// While
let i = 0
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// Loop Through Arrays
// For Loop
for(let i = 0; i < todos.length; i++){
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
} //todos.length is 3 in our case.

// For...of Loop
for(let todo of todos) {
  console.log(todo.text);
}  //todos array inin içindekilere todo diyelim ve be todolardaki textleri yazdıralım, demek.


// HIGH ORDER ARRAY METHODS (show prototype)
// Suggested method to do iteration with arrays.

// forEach() - Loops through arrays, parameter is function
todos.forEach(function(todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`); 
  //todos.forEach((todo,i,myTodos) => console.log(`${i + 1}: ${todo.text}`));
  console.log(myTodos); //New array called myTodos
}); //function(named variable to use as each item, iteration variable starts as 0 loops all array, new created array)

// map() - Loop through and create new array from an array
const todoTextArray = todos.map(function(todo) {
  return todo.text;
}); // returns just text values to array called todoTextArray
//map: şu formatta olanları al. map-format
console.log(todoTextArray);

// filter() - Returns array based on condition
const todo1 = todos.filter(function(todo) {
  // Return only todos where id is 1
  return todo.id === 1; // condition area
}); //filter: şu valueya sahip olanları al. filter-value

// todos.filter().map() chaining array methods


// CONDITIONALS
// Simple If/Else Statement
const x = 30;

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10')
} // == double equal(no data type), ===(data type included)
// OR = || AND = &&

// Switch
color = 'blue';

switch(color) {
  case 'red': // in the case of color is red
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:  
    console.log('color is not red or blue');
    break;
}

// Ternary operator (?) / Shorthand if statement used for assign variables based on a condition
const z = color === 'red' ? 10 : 20;
// z nin değeri color'un red olduğu koşulda(case'de) 10'dur değilse 20 dir.

// FUNCTIONS
function greet(greeting = 'Hello', name) {
  if(!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}
/* greeting = 'Merhaba'
function greet(name) {
  if(!name) {
    console.log(greeting);    
    return greeting    
  } 
  else {    
    console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`       
  }
}
greet();
greet('Alpi') */

// ARROW FUNCTIONS (=> means return) Great to use with forEach
const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));
//const addNums = (num1 = 1, num2 =1) => num1 + num2;
//default valuelar(a,b)
// Lexical This with Arrow Functions(Advanced)


// OOP (class is better than functions-prototypes)
// Constructor Function (should start with capital letter)
function Person(firstName, lastName, dob) { //properties that you wanna set.
  // Set object properties for this(Person), for that we use (this.)
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object, using Date constructor (new Date)
/*   this.getBirthYear = function(){
     return this.dob.getFullYear(); 
  }
  this.getFullName = function() {
     return `${this.firstName} ${this.lastName}`prototypes better*/ 
  } //Get values from instantiated objects.
}

// Prototypes(they are under the objects) (to not have function with every object instance, to put these in the prototype)
// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}
// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}
// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');
console.log(person2);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());


// Built in constructors
const name = new String('Kevin');
console.log(typeof name); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'


// ES6 CLASSES  (method is a function inside of a class called
// constructor (BETTER WAY)) class is for constructing objects
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  // Get Birth Year (method)
  getBirthYear() {
    return this.dob.getFullYear();
  }
  // Get Full Name (method)
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
const person1 = new Person('John', 'Doe', '7-8-80');
console.log(person1.getBirthYear());

/* class Person { // MY SOLUTION  (THE BEST) 
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;    
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.FullName = `${this.firstName} ${this.lastName}`  <<<  
    this.BirthYear = this.dob.getFullYear(); <<<
  }
}
const person1 = new Person('John', 'Doe', '7-8-80');
console.log(person1.FullName,person1.BirthYear); */
// -OOP finished-

// ELEMENT SELECTORS Take HTML elements and put them into variables and work with them. Two types:

// Single Element Selectors
console.log(document.getElementById('my-form')); //used to grab single elements from html(my-form is an id)
console.log(document.querySelector('.container')); // we can select anything with this not just an id. Since its single element selector, even if there are many, it selects only first one. (BEST)

// Multiple Element Selectors
console.log(document.querySelectorAll('.item')); //Gives node list (array methods can be used) (BEST)
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove(); remove ul
// ul.lastElementChild.remove(); remove last item of ul
ul.firstElementChild.textContent = 'Hello'; //edit text of 1st
ul.children[1].innerText = 'Brad';//edit 2nd items text (BEST)
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';//add html things

const btn = document.querySelector('.btn');
// btn.style.background = 'red'; Can edit CSS things
// Manipulate things in user interface in real time (Mükemmel!)

// EVENTS

// Mouse Event (buton üzerinde(btn), global değil)
btn.addEventListener('click', e => { //1st is trigger event that is listening(trigger), 2nd is to be an (action) / a function that you want to run when tihs event happens. (e) is a function to run when this event happens . When you use an event, it takes in an event parameter(e),event object(a function).
  e.preventDefault(); //you have to prevent default behavior(like clicking buttons)
  console.log(e.target.className); //.target (element that where the event is happen)
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  //The classList property returns the class name(s) of an element(body nin ait olduğu bir class yoktu), as a DOM object.you can modify it by using the add() and remove() methods.useful to add, remove and toggle CSS classes on an element. 
  //Body'yi bg-dark class'ına dahil ediyoruz, CSS'te oluşturduğumuz bir class idi.
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Changed</h1>';
}); //when we click, we want to change some stuff 

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


// USER FORM SCRIPT (tiny little application where we can add a user grab the values and then output the users down here)

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit (UFKUM ACILDI)
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  //console.log(nameInput.value); .value for input value
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields'); not used these days
    msg.classList.add('error'); //msg'yi error css teki error class ına ekliyoruz
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item then we'll insert it.(ul id=users altında duracak)
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`)); //adding inside of li with .appendChild.The Node.appendChild() method adds a node to the end of the list of children of a specified parent node. document.createTextNode, Creates a new Text node in document. So, we create a text node in document then append it to li, then we'll append li to ul.

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  } 
}
//if you want to have an application where you save data you're gonna have to well there's a few things you could do you're probably gonna have some kind of back-end that interacts with a database so something like nodejs or PHP or Python or something like that that's connects connects to a database and then what you do is send requests from your front-end using something like the fetch API okay or Ajax. We also have something called local storage where you can actually store data in the user's browser.