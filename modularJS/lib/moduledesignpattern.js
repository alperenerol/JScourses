
// JS Design Patterns: Module
//https://joshbedo.github.io/JS-Design-Patterns/


/* ./lib/moduledesignpattern.js */
const WeakMapCreated = new WeakMap();

/**
 * Module Pattern
 */
class shoppingList { // AbstractDataType is a module pattern
  constructor() {
    // woo! our Class is instantiated lets add some private properties.
    WeakMapCreated.set(this, ['coffee', 'chicken', 'pizza'])
    // Bir WeakMap oluşturuldu ve shoppingList classını mapledik. this = shoppingList ve private ['coffee', 'chicken', 'pizza'] bunlar. Orjinali korunuyor.
  }

  // Lets create a public prototype method to access our private `shoppingList`
  getList() {
    return WeakMapCreated.get(this); // shoppingList WeakMap ine gir ve class ın maplendiği objeleri çağır
  }

  addItem(item) {
    WeakMapCreated.get(this).push(item); //  WeakMap e gir ve class ın maplendiği objelere yeni objeler ekle.
  }
}

// Now we export our `Class` which will become an importable module.
export default shoppingList;

/* main.js */
//import shoppingList from './lib/moduledesignpattern.js';
//var shopList = new shoppingList;
//console.log(shopList.getList());






//WeakMap is also a new ES6 feature that seems to be a good option for creating private members. It accepts any value as a key and doesn't prevent the key object from getting garbage collected when the WeakMap object still exists. It remove any entry containing the object once it's garbage collected.

//If you haven't been following Modules for ES6 the export default AbstractDataType is simply exporting our class so we can later use import AbstractDataType from 'libs/module';.