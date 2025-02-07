import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin'],
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    emailVerificationCode: {
      type: String,
      default: null,
    }
    // followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    // likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }]
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model('User', UserSchema)
