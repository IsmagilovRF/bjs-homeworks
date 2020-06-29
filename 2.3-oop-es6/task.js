class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        return this.state = 1.5 * this.state;
    }
    set state(num) {
        if (num <= 0) {
            this._state = 0;
        } else if (num >= 100) {
            this._state = 100;
        } else {
            this._state = num;
        }
    }
    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}


const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log('-----------------------------------');
console.log('Издание класса PrintEditionItem :');
console.log('name = ' + sherlock.name);
console.log('releaseDate = ' + sherlock.releaseDate); //2019
console.log('pagesCount = ' + sherlock.pagesCount);
console.log('state = ' + sherlock.state);
console.log('type = ' + sherlock.type);
console.log('-----------------------------------');
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
console.log('-----------------------------------');
console.log('Издание класса FantasticBook :');
console.log('author ' + picknick.author); //"Аркадий и Борис Стругацкие"
console.log('name = ' + picknick.name); //"Пикник на обочине"
console.log('releaseDate = ' + picknick.releaseDate); //"1972"
console.log('pagesCount = ' + picknick.pagesCount); //"168"
console.log('state = ' + picknick.state); // 100
console.log('type = ' + picknick.type); //"detective"
console.log('-----------------------------------');


picknick.state = 10;
console.log('state = ' + picknick.state); //10
picknick.fix();
console.log('state(после fix) = ' + picknick.state); //15

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        //console.log('я внутри addBook' + book.author + book.name + book.state);
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy (type, value) {
        for (let i = 0; i < this.books.length; i++){
          if (this.books[i][type] === value) {
            return this.books[i];
          }  
        }
        return null;
      }
    giveBookByName (bookName) {
        for (let i = 0; i < this.books.length; i++){
            //console.log('i = ' + i + this.books[i].name);
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            } 
        }
        return null;
      }
}
const library = new Library("Библиотека имени Ленина");

db = new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008)
console.log('-----------------------------------');
console.log('Издание класса DetectiveBook :');
console.log('author ' + db.author);
console.log('name ' + db.name);
console.log('releaseDate ' + db.releaseDate);
console.log('pagesCount ' + db.pagesCount);
console.log('state ' + db.state);
console.log('type ' + db.type);
console.log('-----------------------------------');

library.addBook(db);
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

