class Book {
    constructor(title, author, year) {
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }   
}
//Lets create a subclass called Magazine that have a month also

class Magazine extends Book {
    constructor(title,author,year,month){
        super(title,author,year); //calls parent constructor
        this.month = month;// add a month parameter
    }
}

const mag1 = new Magazine('Mag One','John Doe','2018','Jan');
console.log(mag1.getSummary());

//Subclasses easier than inheritance