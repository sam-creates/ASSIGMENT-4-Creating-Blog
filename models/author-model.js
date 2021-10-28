import mongoose from "mongoose";
import { postSchema } from "./post-model";
const { Schema, model } = mongoose;

const authorSchema = new Schema({
  //name of author
  name: {
    type: String,
    required: true,
  },

  //details of the post
  posts: {
    type: [postSchema],
  },
});

const authorModel = model("author", authorSchema);

export default authorModel;
