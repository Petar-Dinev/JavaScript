const Book = require("../models/Book");

async function getAllBooks() {
  return await Book.find({}).lean();
}

async function getOneBookById(id) {
  return await Book.findById(id).lean();
}

async function createBook(bookData) {
  return await Book.create(bookData);
}

async function editBook(id, bookData) {
  const book = await Book.findById(id);

  book.title = bookData.title;
  book.image = bookData.image;
  book.bookReview = bookData.bookReview;
  book.stars = bookData.stars;
  book.author = bookData.title;
  book.genre = bookData.genre;

  await book.save();
}

async function deleteBook(id) {
  await Book.findByIdAndDelete(id);
}

async function addUserInbookWishlist(bookId, userId) {
  const book = await Book.findById(bookId);
  book.wishingList.push(userId);
  await book.save();
}

async function getWishedBooks(userId) {
  const books = await Book.find({}).lean();
  console.log(userId);
  console.log(books);
  return books.filter((book) => {
    const user = book.wishingList.find((id) => id == userId);
    if (user) {
      return book;
    }
  });
}

module.exports = {
  getAllBooks,
  getOneBookById,
  createBook,
  editBook,
  deleteBook,
  addUserInbookWishlist,
  getWishedBooks,
};
