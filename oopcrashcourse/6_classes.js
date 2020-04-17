class Book {
    constructor(title, author, year) {
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge(){
        return `${this.title} is ${years} years old`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
    static topBookStore(){
        return 'Barnes  Noble';
    }
}
const book1 = new Book('Book One','John Doe','2013')

console.log(book1);
book1.revise(2022);
console.log(book1);

// Static method, have a method inside of class so no need to instantiate object like this. Object hakkıdna değişmeyen sabit value lar için ve tüm objeler için ortak olan bir value ise. Constructor'ı etkiler.