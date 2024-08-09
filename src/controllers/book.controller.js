import { Book } from "../models/book.model.js"
import { ApiError } from "../utils/ApiError.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const uploadBook = asyncHandler(async (req,res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        return res.status(201).json(
            new ApiResponse(200, newBook, "Book uploaded successfully")
        );
      } catch (error) {
        if (error.name === 'ValidationError') {
          const messages = Object.values(error.errors).map((err) => err.message);
          throw new ApiError(400, messages);
    
        } else {
            throw new ApiError(500, 'Server error');
        }
      }
})


export {uploadBook}