import mongoose from "mongoose";

const LeaderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        institutionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Institution",
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.models.Leader || mongoose.model("Leader", LeaderSchema);