var form = document.getElementById('addForm');
var itemList = document.getElementById('items'); //ul
var filter = document.getElementById('filter'); //arama çubuğu

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item with submit event
function addItem(e){ // Submite basıldığında action eventi
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));  

  // Because not created automatically when we append a new li to ul
  // 'btn btn-danger btn-sm float-right delete' class ında bir button olmalı li nin içinde bunun için: 

  // Create del button element 
  var deleteBtn = document.createElement('button');
  // Add classes to that del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete'; // bunların kullanımını öğrenmem lazım (bootstrap)
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);
  // Append li to list(ul)
  itemList.appendChild(li);
  
}

// Remove item with delete event
function removeItem(e){
  if(e.target.classList.contains('delete')){ 
    //görevi classa gömmek
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    } // ul'de yani itemList'te eğer delete buttonuna tıklanmış önce teyit et, confirme olursa butonun bulunduğu parent yani li child ını kaldır.
  }
}

// Filter Items 
function filterItems(e){
  // convert text to lowercase | to not have to match upper-lower
  var text = e.target.value.toLowerCase(); // text = input
  // Get all li's
  var items = itemList.getElementsByTagName('li');
  // Convert to an array (HTML collection to array)
  Array.from(items).forEach(function(item){ // items = li ler
    var itemName = item.firstChild.textContent; //gives all items (Item 1, Item 2, Item 3, Item 4)
    //now compare to see if what we type  in here is equal to anything .
    //lastChild = button class
    //firstChild = "Item 1" not a text/string we should use .textContent
    console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    } //compare all items with input
  });
} // matching means != -1, not matching = -1

//Array.from(object, mapFunction, thisValue) | object : Required. The object to convert to an array

//The forEach() method calls a function once for each element in an array, in order.