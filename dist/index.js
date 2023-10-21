"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_router_1 = __importDefault(require("./routes/book.router"));
const app = (0, express_1.default)();
const port = 3000;
// Define the API descriptions
const apiDescriptions = {
    getAllBooks: 'Retrieve a list of books available in the store.',
    getBookById: 'Get details of a specific book by its ID.',
    createBook: 'Add a new book to the store.',
    updateBook: 'Update the details of an existing book.',
    deleteBook: 'Delete a book from the store.',
};
app.get('/', (req, res) => {
    // Create an HTML page displaying API descriptions
    const html = `
    <html>
      <head>
        <title>Bookstore API</title>
      </head>
      <body>
        <h1>Welcome to the Bookstore API</h1>
        <h2>API Descriptions:</h2>
        <ul>
          <li><strong>GET /books</strong>: ${apiDescriptions.getAllBooks}</li>
          <li><strong>GET /books/{bookId}</strong>: ${apiDescriptions.getBookById}</li>
          <li><strong>POST /books</strong>: ${apiDescriptions.createBook}</li>
          <li><strong>PUT /books/{bookId}</strong>: ${apiDescriptions.updateBook}</li>
          <li><strong>DELETE /books/{bookId}</strong>: ${apiDescriptions.deleteBook}</li>
        </ul>
      </body>
    </html>
  `;
    res.send(html);
});
app.use(express_1.default.json());
app.use('/', book_router_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
