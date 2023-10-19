import express, { Request, Response } from 'express';
import { Book } from '../models/book.model';

let books: Book[] = [
  {bookId: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien'},
];

export const getAllBooks = (req: Request, res: Response) => {
  try {
    res.status(200).json(books);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export const getBookById = (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(book => book.bookId === bookId);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).send('Book not found');
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export const createBook = (req: Request, res: Response) => {
  try {
    const book: Book = req.body;
    books.push(book);
    res.status(201).json(book);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export const updateBook = (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.bookId);
    const updatedBook: Book = req.body;
    const index = books.findIndex(book => book.bookId === bookId);
    if (index !== -1) {
      books[index] = updatedBook;
      res.status(200).json(updatedBook);
    } else {
      res.status(404).send('Book not found');
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export const deleteBook = (req: Request, res: Response) => {
  try {
    const bookId = parseInt(req.params.bookId);
    const index = books.findIndex(book => book.bookId === bookId);
    if (index !== -1) {
      books = books.filter(book => book.bookId !== bookId);
    } else {
      res.status(404).send('Book not found');
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

 