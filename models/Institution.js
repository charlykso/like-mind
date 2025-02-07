import mongoose from 'mongoose'

const InstitutionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    LGA: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Institution || mongoose.model('Institution', InstitutionSchema)