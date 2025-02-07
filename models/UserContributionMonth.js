import mongoose from "mongoose";

const UserContributionMonthSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        month: {
            type: String,
            required: true,
        },
        institutionId: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Institution",
        }
    },
    { timestamps: true }
);

export default mongoose.models.UserContributionMonth || mongoose.model("UserContributionMonth", UserContributionMonthSchema);