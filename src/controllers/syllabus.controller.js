import { Syllabus } from "../models/syllabus.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const uploadSyllabus = asyncHandler(async (req,res) => {
  console.log(req.body);
    try {
      console.log(req.body);
        const newSyllabus = new Syllabus(req.body);
        await newSyllabus.save();
        return res.status(201).json(
            new ApiResponse(200, newSyllabus, "Syllabus uploaded successfully")
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

// For Syllabus
const getAllSyllabus = asyncHandler(async (req, res) => {
  try {
      const syllabus = await Syllabus.find({});
      return res.status(200).json(
          new ApiResponse(200, syllabus, "Syllabus retrieved successfully")
      );
  } catch (error) {
      throw new ApiError(500, 'Server error');
  }
});

const getSyllabusBySemester = asyncHandler(async (req, res) => {
  const { semesterId } = req.params;

  try {
      const syllabus = await Syllabus.find({ semesterId }).lean();
      if (!syllabus.length) {
          throw new ApiError(404, `No syllabus found for semesterId: ${semesterId}`);
      }
      return res.status(200).json(
          new ApiResponse(200, syllabus, `Syllabus retrieved for semesterId: ${semesterId}`)
      );
  } catch (error) {
      throw new ApiError(500, 'Server error');
  }
});


export {uploadSyllabus, getAllSyllabus, getSyllabusBySemester}