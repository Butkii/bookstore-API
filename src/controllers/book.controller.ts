import express, { Request, Response } from 'express';
import { Book } from '../models/book.model';

let books: Book[] = [
  {bookId: 1, title: 'Deception Point', author: 'Dan Brown'},
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

    //ensure data is valid and of the correct type
    if (book.bookId === undefined || book.title === undefined || book.author === undefined || isNaN(book.bookId)) {
      res.status(400).send('Invalid data');
      return;
    } 

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
    
    //check if book id exists in the array
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
    
    //check if book id exists in the array
    const index = books.findIndex(book => book.bookId === bookId);
    
    if (index !== -1) {
      books = books.filter(book => book.bookId !== bookId); //remove book from array
      res.status(200).send('Deleted');
    } else {
      res.status(404).send('Book not found');
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

 