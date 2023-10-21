"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
// src/controllers/BookController.ts
const tsoa_1 = require("tsoa");
let BookController = class BookController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.books = [
            { bookId: 1, title: 'Deception Point', author: 'Dan Brown' },
        ];
    }
    // Endpoint to get all books
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.books;
        });
    }
    // Endpoint to get a specific book by ID
    getBookById(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = this.books.find((b) => b.bookId === bookId);
            if (!book) {
                throw new Error('Book not found');
            }
            return book;
        });
    }
    // Endpoint to create a new book
    createBook(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = request.body;
            if (book.bookId === undefined || book.title === undefined || book.author === undefined || isNaN(book.bookId)) {
                response(400);
                throw new Error('Invalid data');
            }
            this.books.push(book);
            response(201);
            return book;
        });
    }
    // Endpoint to update an existing book
    updateBook(bookId, request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedBook = request.body;
            const index = this.books.findIndex((b) => b.bookId === bookId);
            if (index === -1) {
                response(404);
                throw new Error('Book not found');
            }
            this.books[index] = updatedBook;
            response(200);
            return updatedBook;
        });
    }
    // Endpoint to delete a book
    deleteBook(bookId, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.books.findIndex((b) => b.bookId === bookId);
            if (index === -1) {
                response(404);
                throw new Error('Book not found');
            }
            this.books = this.books.filter((b) => b.bookId !== bookId);
            response(200);
            return 'Deleted';
        });
    }
};
exports.BookController = BookController;
__decorate([
    (0, tsoa_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAllBooks", null);
__decorate([
    (0, tsoa_1.Get)('{bookId}'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBookById", null);
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Request)()),
    __param(1, (0, tsoa_1.Response)(201)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
__decorate([
    (0, tsoa_1.Put)('{bookId}'),
    __param(1, (0, tsoa_1.Request)()),
    __param(2, (0, tsoa_1.Response)(200)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, tsoa_1.Delete)('{bookId}'),
    __param(1, (0, tsoa_1.Response)(200)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
exports.BookController = BookController = __decorate([
    (0, tsoa_1.Route)('books')
], BookController);
