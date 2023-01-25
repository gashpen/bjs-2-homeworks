class PrintEditionItem {
  constructor(name, realeaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = realeaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(value) {
    if (value < 0) {
      value = 0;
    }
    if (value > 100) {
      value = 100;
    }
    this._state = value;
  }
  get state() {
    return this._state
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, realeaseDate, pagesCount) {
    super(name, realeaseDate, pagesCount);
    this.state = 100;
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, realeaseDate, pagesCount) {
    super(name, realeaseDate, pagesCount);
    this.state = 100;
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, realeaseDate, pagesCount) {
    super(author, name, realeaseDate, pagesCount);
    this.state = 100;
    this.type = "novel";
    this.author = author;
  }
}

class FantasticBook extends Book {
  constructor(author, name, realeaseDate, pagesCount) {
    super(author, name, realeaseDate, pagesCount);
    this.state = 100;
    this.type = "fantastic";
    this.author = author;
  }
}

class DetectiveBook extends Book {
  constructor(author, name, realeaseDate, pagesCount) {
    super(author, name, realeaseDate, pagesCount);
    this.state = 100;
    this.type = "detective";
    this.author = author;
  }
}

class Library {
  constructor(name, realeaseDate) {
    this.name = name;
    this.books = [];
    this.state = 100;
    this.realeaseDate = Number;
  }
  addBook(book) {
    if (this.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for(let i = 0; i < this.books.length; i++) {
      if(this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }
    
    giveBookByName(bookName) {
      for(let i = 0; i < this.books.length; i++) {
        if(this.books[i] === bookName) {
        return this.books.splice()
        }
      }
      return null;
  } 
}

