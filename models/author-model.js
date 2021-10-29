import mongoose from "mongoose";
import { PostSchema } from "./post-model";
const { Schema, model } = mongoose;

const authorSchema = new Schema({
  //name of author
  author_name: {
    type: String,
    required: true,
  },

  //details of the post
  posts: {
    type: [PostSchema],
  },
});

const AuthorModel = model("author", authorSchema);

export default AuthorModel;
