import mongoose, {Schema} from "mongoose";


const impquesSchema = new Schema({

    semesterId: {
        type: Number,
        required: [true, "Semester is required!"]
    },
    subjectName: {
        type: String,
        required: [true, "Subject name is required!"]
    },
    subjectCode: {
        type: Number,
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

export const Impques = mongoose.model("Impques",impquesSchema);