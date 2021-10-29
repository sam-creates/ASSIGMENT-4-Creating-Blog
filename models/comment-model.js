import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const CommentSchema = new Schema({
  //username of person who posted a comment
  user_name: {
    type: String,
    required: true,
  },

  //posted comment
  comment_posts: {
    type: String,
  },
});

const CommentModel = model("comment", CommentSchema);

export default CommentModel;
