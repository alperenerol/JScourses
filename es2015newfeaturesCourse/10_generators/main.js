"use strict"

function* g1(){ // * koyulur generator için
  //The yield keyword is used to pause and resume a generator function
  console.log('Hello');
  yield 'Yield 1 Ran..';
  console.log('World');
  yield 'Yield 2 Ran...';
  return 'Returned..';
}

var g = g1(); // we have to set generator to variable
console.log(g.next());
// Resumed, {value: "Yield 1 Ran..", done: false} since its only 1st yield done is false. It is in pause now.
console.log(g.next()); // Resumed and output 2nd yield and paused. {value: "Yield 2 Ran...", done: false} , still getting false we need to return something
console.log(g.next()); // Resumed , {value: undefined, done: true} , return added for value. 


/*
console.log(g.next().value); > Yield 1 Ran..
console.log(g.next().value);
console.log(g.next().value);
*/

for(let val of g){ // g nin elemanlarına val diyelim, her bir val için bunu döndürür. 
  console.log(val);
}

