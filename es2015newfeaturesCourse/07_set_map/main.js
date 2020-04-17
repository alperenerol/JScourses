"use strict"
/* SETS  
Sets are created from individual values, Maps are KVPs.
let myArray = [11,22,34,65,34];
let mySet = new Set(myArray);

mySet.add('100');
mySet.add({a: 1, b: 2});
mySet.delete(22);
mySet.add('100');
mySet.add('200');

//console.log(mySet.size);

mySet.forEach(function(val){
  console.log(val);
});

//MAPS
let myMap = new Map([['a1','Hello'], ['b2', 'Goodbye']]); 

a1 Hello ile mapli , b2 ise Goodbye ile mapli
Maplemek , iCUE de yaptığım gibi keyboardın bir tuşuna görev/özellik ataması yapmak gibidir.

myMap.set('c3', 'Foo'); this map added to myMap
myMap.delete('a1');
console.log(myMap.size);

// WEAKSET & WEAKMAP (object related)

let carWeakSet = new WeakSet();

let car1 = {
  make: 'Honda',
  model: 'Civic'
}
let car2 = {
  make: 'Toyota',
  model: 'Camry'
}
carWeakSet.add(car1);
carWeakSet.add(car2);

carWeakSet.delete(car1);
console.log(carWeakSet);
*/

let carWeakMap = new WeakMap();

let key1 = {
  id: 1
}
let car1 = {
  make: 'Honda',
  model: 'Civic'
}
carWeakMap.set(key1, car1);

let key2 = {
  id: 2
}
let car2 = {
  make: 'Toyota',
  model: 'Camry'
}
carWeakMap.set(key2, car2);

console.log(carWeakMap);
carWeakMap.delete(key1);
console.log(carWeakMap);
