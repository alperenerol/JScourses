// Constructor is just a function (ES5)
//We can create same typed multiple object with a single constructor.

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function(){ 
        return `${this.title} was written by ${this.author} in ${this.year}`; }
}

// Instantiate an object (constructor function runs)
const book1 = new Book('Book1', 'John Doe', '2013');
const book2 = new Book('Book2', 'Jane Doe', '2016');
console.log(book1.getSummary);
console.log(book2.getSummary);