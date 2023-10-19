"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBook = exports.getAllBooks = void 0;
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
