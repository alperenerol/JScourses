//Book object's constructor function
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;    
}

// Instantiate an object (constructor function runs)
const book1 = new Book('Book1', 'John Doe', '2013');
const book2 = new Book('Book2', 'Jane Doe', '2016');

//instead create getSummary inside of constructor lest create a prototype method. We hide summary in proto. Because we dont want to get summary for every book.

// Book() is book1's constructor; getSummary, getAge defined on Book()'s prototype object which is Book.prototype
// Book.prototype.getSummary() is inherited by book1 because its constructor is Book() and book1.prototype.getSummary() returns the value of the object.
// Book.prototype.getSummary() >inherited by> Book() >inherited by> book1

//getSummary
Book.prototype.getSummary = function(){ 
    return `${this.title} was written by ${this.author} in ${this.year}`; };
//getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};
// Revise / Change Written Year 
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book2.getAge());
book2.revise(1998);
console.log(book2.getAge());