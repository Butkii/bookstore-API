"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
let books = [
    { bookId: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
];
const getAllBooks = (req, res) => {
    try {
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.getAllBooks = getAllBooks;
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
const createBook = (req, res) => {
    try {
        const book = req.body;
        books.push(book);
        res.status(201).json(book);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.createBook = createBook;
const updateBook = (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        const updatedBook = req.body;
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
const deleteBook = (req, res) => {
    try {
        const bookId = parseInt(req.params.bookId);
        const index = books.findIndex(book => book.bookId === bookId);
        if (index !== -1) {
            books = books.filter(book => book.bookId !== bookId);
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
