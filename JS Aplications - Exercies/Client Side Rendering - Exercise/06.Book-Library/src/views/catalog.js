import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { createBook, getAllBooks, getBookById } from "../data.js";

const root = document.querySelector("body");

const trTemplate = (book) => html`
  <tr id=${book._id}>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
      <button @click=${onEdit}>Edit</button>
      <button>Delete</button>
    </td>
  </tr>
`;

const tableTemplate = (books) => html`
  <button id="loadBooks" @click=${loadAllBooks}>LOAD ALL BOOKS</button>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      ${books ? books.map(trTemplate) : ""}
    </tbody>
  </table>
  <form id="add-form" @submit=${onCreate}>
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." />
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." />
    <input type="submit" value="Submit" />
  </form>
`;

const editTemplate = (books, book) => html`
  <button id="loadBooks" @click=${loadAllBooks}>LOAD ALL BOOKS</button>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      ${books ? books.map(trTemplate) : ""}
    </tbody>
  </table>
  <form id="edit-form">
    <input type="hidden" name="id" />
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book.title}/>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book.author}/>
    <input type="submit" value="Save" />
  </form>
`;

async function onCreate(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { title, author } = Object.fromEntries(formData);

  if (!title.length || !author.length) {
    alert("All fields needed!");
  } else {
    createBook(title, author);
  }
}

export function showCatalogView(data) {
  render(tableTemplate(data), root);
}

async function showEditView(book) {
    const books = await getAllBooks()
    render(editTemplate(books, book), root)
}

async function loadAllBooks() {
  const books = await getAllBooks();
  showCatalogView(books);
}

async function onEdit(e) {
    const id = e.target.parentElement.parentElement.id
  const book = await getBookById(id);
  showEditView(book);
}
