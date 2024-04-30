class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        const book = this.books.find(b => b.title == title);
        if (book) {
            return `The book "${book.title}" by ${book.author} is already in ${this.library} library.`
        }
        this.books.push({ title, author })
        return `The book "${title}" by ${author} has been added to ${this.library} library.`
    }

    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`
        }
        this.members.push(memberName)
        return `Member ${memberName} has been joined to the book club.`
    }

    assignBookToMember(memberName, bookTitle) {
        if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        }
        const book = this.books.find(b => b.title == bookTitle);
        if (!book) {
            throw new Error(`Book "${bookTitle}" not found.`)
        }
        this.books.slice(this.books.indexOf(book), 1);
        return `Member ${memberName} has been assigned the book "${book.title}" by ${book.author}.`
    }

    generateReadingReport() {
        if (this.members.length == 0) {
            return "No members in the book club.";
        }
        if (this.books.length == 0) {
            return "No available books in the library.";
        }
        const result = [`Available Books in ${this.library} library:`]
        for (const book of this.books) {
            result.push(`"${book.title}" by ${book.author}`)
        }
        return result.join('\n')
    }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));