import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const commentSchema = new Schema({
  //username of person who posted a comment
  userName: {
    type: String,
    required: true,
  },

  //posted comment
  comment: {
    type: String,
  },
});

const commentModel = model("comment", commentSchema);

export default commentModel;
