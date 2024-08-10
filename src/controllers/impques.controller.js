import { Impques } from "../models/impques.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const uploadImpques = asyncHandler(async (req,res) => {
  console.log(req.body);
    try {
      console.log(req.body);
        const newImpques = new Impques(req.body);
        await newImpques.save();
        return res.status(201).json(
            new ApiResponse(200, newImpques, "Impques uploaded successfully")
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

const getAllImpques = asyncHandler(async (req, res) => {
  try {
      const impques = await Impques.find({});
      return res.status(200).json(
          new ApiResponse(200, impques, "Important questions retrieved successfully")
      );
  } catch (error) {
      throw new ApiError(500, 'Server error');
  }
});

const getImpquesBySemester = asyncHandler(async (req, res) => {
  const { semesterId } = req.params;

  try {
      const impques = await Impques.find({ semesterId }).lean();
      if (!impques.length) {
          throw new ApiError(404, `No important questions found for semesterId: ${semesterId}`);
      }
      return res.status(200).json(
          new ApiResponse(200, impques, `Important questions retrieved for semesterId: ${semesterId}`)
      );
  } catch (error) {
      throw new ApiError(500, 'Server error');
  }
});


export {uploadImpques,getAllImpques,getImpquesBySemester}