import mongoose from "mongoose";

const ContributionSchema = new mongoose.Schema(
    {
        initiator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        numOfIndividual: {
            type: Number,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        }
    },
    { timestamps: true }
)

export default mongoose.models.Contribution || mongoose.model("Contribution", ContributionSchema);