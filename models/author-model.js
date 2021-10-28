import mongoose from "mongoose";
import { postSchema } from "./post-model";
const { Schema, model } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  posts: {
    type: [postSchema],
  },
});

const authorModel = model("author", authorSchema);

export default authorModel;
