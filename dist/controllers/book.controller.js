"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
let books = [
    { bookId: 1, title: 'Deception Point', author: 'Dan Brown' },
];
/*
 * Gets all books
 * Response code:
   - 200 - OK
   - 500 - Error
*/
const getAllBooks = (req, res) => {
    try {
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.getAllBooks = getAllBooks;
/*
 * Gets book by id
 * Response code:
   - 200 - OK
   - 404 - Not Found
   - 500 - Error
*/
const getBookById = (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        const book = books.find(book => book.bookId === bookId);
        if (book) {
            res.status(200).json(book);
        }
        else {
            res.status(404).send('Book not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.getBookById = getBookById;
/*
 * Creates new book
 * Response code:
   - 200 - OK
   - 400 - Invalid data
   - 500 - Error
*/
const createBook = (req, res) => {
    try {
        const book = req.body;
        //ensure data is valid and of the correct type
        if (book.bookId === undefined || book.title === undefined || book.author === undefined || isNaN(book.bookId)) {
            res.status(400).send('Invalid data');
            return;
        }
        books.push(book);
        res.status(201).json(book);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.createBook = createBook;
/*
 * Updates book by id
 * Response code:
   - 200 - OK
   - 404 - Not Found
   - 500 - Error
*/
const updateBook = (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        const updatedBook = req.body;
        //check if book id exists in the array
        const index = books.findIndex(book => book.bookId === bookId);
        if (index !== -1) {
            books[index] = updatedBook;
            res.status(200).json(updatedBook);
        }
        else {
            res.status(404).send('Book not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.updateBook = updateBook;
/*
 * Deletes book by id
 * Response code:
   - 200 - OK
   - 404 - Not Found
   - 500 - Error
*/
const deleteBook = (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        //check if book id exists in the array
        const index = books.findIndex(book => book.bookId === bookId);
        if (index !== -1) {
            books = books.filter(book => book.bookId !== bookId); //remove book from array
            res.status(200).send('Deleted');
        }
        else {
            res.status(404).send('Book not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.deleteBook = deleteBook;
