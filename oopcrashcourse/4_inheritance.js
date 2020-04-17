//Book object's constructor function
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;    
}

//getSummary
Book.prototype.getSummary = function(){ 
    return `${this.title} was written by ${this.author} in ${this.year}`; };

// Create a magazine object to inherit the properties of the book. Book() >inherited by> Magazine() > inherited by > magazine1
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year); // takes magazine itself and title,author,year NOT month
    this.month = month;
}

//Inherit prototype from Book so we can use getSummary() in magazines. No month key.
Magazine.prototype = Object.create(Book.prototype);

//Now uses Book's prototype, to make it use its own prototype. So we just inherited getSummary() and create a new Magazine prototype. 
Magazine.prototype.constructor = Magazine;

//Instantiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);