const { hasUser } = require("../middlewares/guards");
const { getOneBookById, getAllBooks, createBook, deleteBook, editBook, addUserInbookWishlist } = require("../services/bookService");
const { parseError } = require("../util/parser");

const bookController = require("express").Router();

bookController.get("/", async (req, res) => {
  const books = await getAllBooks()
  res.render("books", {
    title: "Books page",
    books
  });
});

bookController.get("/create", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create page",
  });
});

bookController.post("/create", hasUser(), async (req, res) => {
  const book = {
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    stars: req.body.stars,
    bookReview: req.body.bookReview,
    genre: req.body.genre,
    owner: req.user._id
  }
  try {
    await createBook(book)
    res.redirect('/books')
  } catch(err) {
    res.render("create", {
      title: "Create page",
      book,
      errors: parseError(err)
    });
  }
});

bookController.get("/:id", async (req, res) => {
  const bookId = req.params.id;
  const userId = req.user?._id
  const book = await getOneBookById(bookId);
  book.hasUser = req.user;
  book.isOwner = book.owner == userId;
  book.canWish = !book.wishingList.find(x => x == userId)

  res.render("details", {
    title: "Details page",
    book
  });
});

bookController.get("/:id/edit", hasUser(), async (req, res) => {

  const book = await getOneBookById(req.params.id)
  if(book.owner != req.user._id) {
    res.redirect('/404')
  }
  res.render("edit", {
    title: "Edit page",
    book,
  });
});

bookController.post("/:id/edit", hasUser(), async (req, res) => {
  const bookId = req.params.id;
  const book = await getOneBookById(bookId)
  if(book.owner != req.user._id) {
    return res.redirect('/404')
  }
  const editedBook = {
    title: req.body.title,
    author: req.body.author,
    image: req.body.image,
    stars: req.body.stars,
    bookReview: req.body.bookReview,
    genre: req.body.genre,
  }

  try {
    await editBook(bookId, editedBook)
    res.redirect('/books/' + bookId)
  } catch(err) {
    editedBook._id = bookId;
    res.render("edit", {
      title: "Edit page",
      book: editedBook,
      errors: parseError(err)
    });
  }
});

bookController.get('/:id/delete', hasUser(), async (req, res) => {
  const bookId = req.params.id;
  const book = await getOneBookById(bookId)
  if(book.owner != req.user._id) {
    return res.redirect('/404')
  }
  try {
    await deleteBook(bookId)
    res.redirect('/books')
  } catch(err) {
    res.render('details', {
      title: 'Details page',
      errors: parseError(err)
    })
  }
})
bookController.get('/:id/wish', hasUser(), async (req, res) => {
  const bookId = req.params.id;
  const userId = req.user._id;
  const book = await getOneBookById(bookId)
  if(book.owner == userId) {
   return res.redirect('/404')
  }
  try {
    await addUserInbookWishlist(bookId, userId)
    res.redirect('/books/' + bookId)
  } catch(err) {
    res.render('details', {
      title: 'Details page',
      errors: parseError(err)
    })
  }
})

module.exports = bookController;
