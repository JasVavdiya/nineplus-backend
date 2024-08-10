import { Oldpaper } from "../models/Oldpaper.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const uploadOldpaper = asyncHandler(async (req,res) => {
  console.log(req.body);
    try {
      console.log(req.body);
        const newOldpaper = new Oldpaper(req.body);
        await newOldpaper.save();
        return res.status(201).json(
            new ApiResponse(200, newOldpaper, "Oldpaper uploaded successfully")
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

const getAllOldpaper = asyncHandler(async (req, res) => {
  try {
      const oldpapers = await Oldpaper.find({});
      return res.status(200).json(
          new ApiResponse(200, oldpapers, "Old papers retrieved successfully")
      );
  } catch (error) {
      throw new ApiError(500, 'Server error');
  }
});

const getOldpaperBySemester = asyncHandler(async (req, res) => {
  const { semesterId } = req.params;

  try {
      const oldpapers = await Oldpaper.find({ semesterId }).lean();
      if (!oldpapers.length) {
          throw new ApiError(404, `No old papers found for semesterId: ${semesterId}`);
      }
      return res.status(200).json(
          new ApiResponse(200, oldpapers, `Old papers retrieved for semesterId: ${semesterId}`)
      );
  } catch (error) {
      throw new ApiError(500, 'Server error');
  }
});


export {uploadOldpaper,getAllOldpaper,getOldpaperBySemester}