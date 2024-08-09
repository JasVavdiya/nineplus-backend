import mongoose, {Schema} from "mongoose";


const bookSchema = new Schema({

    semesterId: {
        type: Number,
        required: [true, "Semester is required!"]
    },
    subjectName: {
        type: String,
        required: [true, "Subject name is required!"]
    },
    subjectCode: {
        type: BigInt,
        required: [true, "Subject code is required!"]
    },
    noOfPage: {
        type: Number,
        required: [true, "No. of page is required!"]
    },
    coverImageLink: {
        type: String,
        required: [true, "Cover image link is required!"]
    },
    pdfLink: {
        type: String,
        required: [true, "Pdf link is required!"]
    },
},
{
    timestamps: true
}
)

export const Book = mongoose.model("Book",bookSchema);