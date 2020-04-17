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

// Mouse Event (buton üzerinde, global değil)
btn.addEventListener('click', e => { //1st is event that is listening, 2nd is to be a function that you want to run when tihs event happens. (e) is a function to run when this event happens . When you use an event, it takes in an event parameter(e),event object(a function).
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