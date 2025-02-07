import mongoose from "mongoose";

const UserContributionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        contributionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Contribution",
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        isPaid: {
            type: Boolean,
            default: false,
        },
        month: {
            type: String,
            required: true,
        },
        proveOfPayment: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.models.UserContribution || mongoose.model("UserContribution", UserContributionSchema);