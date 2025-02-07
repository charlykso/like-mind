import mongoose from "mongoose";

const AccountDetailSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    accountName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.AccountDetail || mongoose.model('AccountDetail', AccountDetailSchema);