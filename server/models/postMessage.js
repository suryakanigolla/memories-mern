import mongoose from "mongoose";

const postMessageSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  selectedFile: String,
  isLiked: {
    type: Boolean,
    default: false,
  },
  tags: [{ x: Number, y: Number }],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postMessageSchema);

export default PostMessage;
