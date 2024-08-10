import { Book } from "../models/book.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const uploadBook = asyncHandler(async (req,res) => {
  console.log(req.body);
    try {
      console.log(req.body);
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

const getAllBook = asyncHandler(async (req,res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json(
            new ApiResponse(200, books, "Books retrieved successfully")
        );
      } catch (error) {
            throw new ApiError(500, 'Server error');
      }
})

const getBooksBySemester = asyncHandler(async (req, res) => {
  const { semesterId } = req.params;

  try {
      const books = await Book.find({ semesterId: semesterId }).lean();
      if (!books.length) {
          throw new ApiError(404, `No books found for semesterId: ${semesterId}`);
      }
      return res.status(200).json(
          new ApiResponse(200, books, `Books retrieved for semesterId: ${semesterId}`)
      );
  } catch (error) {
      // if (error instanceof ApiError) {
      //     throw error;
      // }
      throw new ApiError(500, 'Server error');
  }
});

export {uploadBook}
export {getAllBook}
export {getBooksBySemester}