import { Papersolution } from "../models/Papersolution.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const uploadPapersolution = asyncHandler(async (req,res) => {
  console.log(req.body);
    try {
      console.log(req.body);
        const newPapersolution = new Papersolution(req.body);
        await newPapersolution.save();
        return res.status(201).json(
            new ApiResponse(200, newPapersolution, "Papersolution uploaded successfully")
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

const getAllPapersolution = asyncHandler(async (req, res) => {
  try {
      const papersolutions = await Papersolution.find({});
      return res.status(200).json(
          new ApiResponse(200, papersolutions, "Paper solutions retrieved successfully")
      );
  } catch (error) {
      throw new ApiError(500, 'Server error');
  }
});

const getPapersolutionBySemester = asyncHandler(async (req, res) => {
  const { semesterId } = req.params;

  try {
      const papersolutions = await Papersolution.find({ semesterId }).lean();
      if (!papersolutions.length) {
          throw new ApiError(404, `No paper solutions found for semesterId: ${semesterId}`);
      }
      return res.status(200).json(
          new ApiResponse(200, papersolutions, `Paper solutions retrieved for semesterId: ${semesterId}`)
      );
  } catch (error) {
      throw new ApiError(500, 'Server error');
  }
});


export {uploadPapersolution,getAllPapersolution,getPapersolutionBySemester}