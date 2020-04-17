const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(Object.keys(book2)); // key-value pairs
console.log(Object.values(book2));

// creating two different object with object literal is bad, this is why we now use constructors which is modern way to do this kinda jobs.

