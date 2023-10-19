import express, { response } from "express";
import type { Request, Response } from "express";
import * as bookController from "../controllers/book.controller";

export const bookRouter = express.Router();

bookRouter
    .route("/books")
    .get(bookController.getAllBooks)
    .post(bookController.createBook);

export default bookRouter;
    
