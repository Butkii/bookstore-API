import request from 'supertest';
import app from '../src/index';

describe('API Tests', () => {
  it('GET /books should return a list of books', async () => {
    const response = await request(app).get('/books');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('GET /books/:bookId should return a book', async () => {
    const response = await request(app).get('/books/1');
    expect(response.status).toBe(200);
    expect(response.body.bookId).toBe(1);
  });

  it('Get /books/:bookId should return error for invalid book', async() => {
    const response = await request(app).get('/books/100');
    expect(response.status).toBe(404);
    expect(response.text).toBe('Book not found');
  });

  it('POST /books should create a new book', async () => {
    const newBook = {
      bookId: 4,
      title: 'All The Bright Places',
      author: 'Jennifer Niven'
    };
    const response = await request(app).post('/books').send(newBook);
    
    expect(response.status).toBe(201);
    expect(response.body.bookId).toBe(newBook.bookId);
    expect(response.body.title).toBe(newBook.title);
    expect(response.body.author).toBe(newBook.author);
  });  

  it('POST /books should return error for invalid data', async () => {
    const newBook = {
      bookId: 'N213',
      title: 'All The Bright Places',
      author: 'Jennifer Niven'
    };
    const response = await request(app).post('/books').send(newBook);

    expect(response.status).toBe(400);
  });

  it('PUT /books/:bookId should update a book', async () => {
    const updatedBook = {
      bookId: 1,
      title: 'The Da Vinci Code',
      author: 'Dan Brown'
    };

    const response = await request(app).put('/books/1').send(updatedBook);
    expect(response.status).toBe(200);
    expect(response.body.bookId).toBe(updatedBook.bookId);
    expect(response.body.title).toBe(updatedBook.title);
    expect(response.body.author).toBe(updatedBook.author);
  });

  it('PUT /books/:bookId should return error for invalid book', async () => {
    const updatedBook = {
      bookId: 100,
      title: 'The Da Vinci Code',
      author: 'Dan Brown'
    };

    const response = await request(app).put('/books/100').send(updatedBook);
    expect(response.status).toBe(404);
  });

  it('DELETE /books/:bookId should delete a book', async () => {
    const response = await request(app).delete('/books/1');
    expect(response.status).toBe(200);
  });

  it('DELETE /books/:bookId should return error for invalid book', async () => {
    const response = await request(app).delete('/books/100');
    expect(response.status).toBe(404);
  });


});
