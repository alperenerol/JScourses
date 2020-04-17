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

