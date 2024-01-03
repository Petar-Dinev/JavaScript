class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.capacity == 0) {
      throw new Error("Not enough space in the collection.");
    }
    this.books.push({
      bookName,
      bookAuthor,
      payed: false,
    });
    this.capacity--;
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }
  payBook(bookName) {
    const book = this.books.find((b) => b.bookName == bookName);
    if (!book) {
      throw new Error(`${bookName} is not in the collection.`);
    }
    if (book.payed == true) {
      throw new Error(`${bookName} has already been paid.`);
    }
    book.payed = true;
    return `${bookName} has been successfully paid.`;
  }
  removeBook(bookName) {
    const book = this.books.find((b) => b.bookName == bookName);
    if (!book) {
      throw new Error("The book, you're looking for, is not found.");
    }
    if (book.payed == false) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }
    const index = this.books.findIndex((b) => b.bookName == bookName);
    this.books.splice(index, 1);
    this.capacity++;
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    const result = [];
    if (bookAuthor == undefined) {
      result.push(`The book collection has ${this.capacity} empty spots left.`);
      this.books
        .sort((a, b) => a.bookName.localeCompare(b.bookName))
        .forEach((b) =>
          result.push(
            `${b.bookName} == ${b.bookAuthor} - ${
              b.payed ? "Has Paid" : "Not Paid"
            }.`
          )
        );
    } else {
      const book = this.books.find((b) => b.bookAuthor == bookAuthor);
      if (!book) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }
      result.push(
        `${book.bookName} == ${book.bookAuthor} - ${
          book.payed ? "Has Paid" : "Not Paid"
        }.`
      );
    }
    return result.join("\n");
  }
}
