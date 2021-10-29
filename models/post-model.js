import mongoose from "mongoose";
import { CommentSchema } from "./comment-model";
const { Schema, model } = mongoose;

export const PostSchema = new Schema({

  //title of post
  title: {
    type: String,
    required: true,
  },

  //details of blog
  details: {
    type: String,
  },

  //date
  date: {
    type: Date,
    default: Date.now(),
  },

  //author of post
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "author",
  },

  //banner for the post
  banner: {
    type: String,
  },

  //displays all comments on post
  comments: {
    type: [CommentSchema],
  },

  //likes for a specific post
  likes: {
    type: Number,
    default: 0,
  },

  //unlikes pertaining to post
  Unlikes: {
    type: Number,
    default: 0,
  },
});

const PostModel = model("post", postSchema);

export default PostModel;
