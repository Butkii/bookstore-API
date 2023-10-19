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

export const createBook = (req: Request, res: Response) => {
  try {
    const book: Book = req.body;
    books.push(book);
    res.status(201).json(book);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
