import mongoose from 'mongoose'

const ProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    staffNumber: {
      type: String,
      required: true,
    },
    staffIdCardImg: {
      type: String,
    },
    contributionMonth: {
      type: String,
    },
    avatar: {
      type: String,
    },
    institutionId: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Institution',
    },
    passwordResetToken: {
      type: String,
    }
  },
  { timestamps: true }
)

export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema)