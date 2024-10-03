import mongoose from 'mongoose';

const { Schema } = mongoose;

const carSchema = new Schema(
  {
    model: { type: String, required: true, minLength: 3 },
    price: { type: Number, required: true },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{11}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    noOfImg: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    images: { type: [String], required: false },
  },
  { timestamps: true }
);

export default mongoose.model('Car', carSchema);
