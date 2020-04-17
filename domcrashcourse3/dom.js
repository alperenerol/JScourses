// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document); Show us all of the properties and methods attached to document object
// console.log(document.domain); document.properties anlamına gelir, domain name you running
// console.log(document.URL); entire URL
// console.log(document.title);
// //document.title =  123; these are not read-only we can also change them.
// console.log(document.doctype);
// console.log(document.head); head element
// console.log(document.body);
// console.log(document.all); array of HTML collection (sorted top-down)
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello'; bad method
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID // id selector
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello'; Not consider style(method1)
// headerTitle.innerText = 'Goodbye'; Considers style (method2)
// console.log(headerTitle.innerText); 
// headerTitle.innerHTML = '<h3>Hello</h3>'; puts new HTML inside of headerTitle element (method3)
// header.style.borderBottom = 'solid 3px #000'; Changing styles with .style.anyCSSproperty

// GETELEMENTSBYCLASSNAME // class name selector(all items under the classes) (array)
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2'; changed the name of 'nd item
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error(CRITICAL)
// //items.style.backgroundColor = '#f4f4f4'; Gives error because 'items' is actually an HTML collection, an array so we need to loop through it!!!

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// } solved!

// GETELEMENTSBYTAGNAME // tag name selector
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// } identical to class name

// QUERYSELECTOR // Can use it only for one item, grabs first one only. If more use querySelectorAll. Can use anything(tag,class,id,css..)
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child'); pseudo classes/pseudo selectors
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }




// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement |bir üst node
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);
// parentNode(better) = parentElement

// childNodes |bir alt node
// console.log(itemList.childNodes); also grabs whitespaces as text (so not suggested, children is better.)

// console.log(itemList.children); HTML collection
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild | includes whitespaces again
// console.log(itemList.firstElementChild); | 1st <li>
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling); whitespace again
// // nextElementSibling
// console.log(itemList.nextElementSibling); başa dönmüyor!

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';
//There is no need for jQuery.

// createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class to element
newDiv.className= 'hello';

// Add id to element
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node | First create then append then insert to DOM
// To insert DOM first decide where to put
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1); // 1st parameter what we are inserting, 2nd parameter before what we gonna insert.

// EVENTS //

// var button = document.getElementById('button').addEventListener('click', buttonClick); (trigger, action model)

// function buttonClick(e){ When you run an event and run a function, pass in (içeri almak) e parameter = action.
//   //console.log('Button clicked');
//   // document.getElementById('header-title').textContent = 'Changed';
//   // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//   //console.log(e);

//   // console.log(e.target); | button element
//   // console.log(e.target.id); | its id
//   // console.log(e.target.className); | its class
//   // console.log(e.target.classList);
//   // var output = document.getElementById('output');
//   // output.innerHTML = '<h3>'+e.target.id+'</h3>';

//   // console.log(e.type); | 'click' typed event

//   //console.log(e.clientX); position of mouse from window
//   //console.log(e.clientY);

//   //console.log(e.offsetX); position from event element
//   //console.log(e.offsetY);

//   // console.log(e.altKey); checks altKey holded during event?
//   // console.log(e.ctrlKey);
//   // console.log(e.shiftKey);
// }

var button = document.getElementById('button');
var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent); |for entire element (box)
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent); |for innerelements
//box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent); click inside
// itemInput.addEventListener('blur', runEvent); click outside

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){
  e.preventDefault();
  console.log('EVENT TYPE: '+e.type);

  //console.log(e.target.value);
  // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

  // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

  // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}