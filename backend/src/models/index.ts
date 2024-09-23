import mongoose, { Schema } from "mongoose";

const SinnerSchema = new Schema({
  sinner: {
    type: String,
    trim: true,
    required: true,
  },
  room: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Please insert the room number"],
  },
});

const Sinner = mongoose.model("Sinner", SinnerSchema);

export { Sinner };
