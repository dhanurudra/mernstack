import mongoose from "mongoose";

const User = mongoose.Schema({
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
  img: {
    type: String,
  },
  glink: {
    type: String,
  },
  llink: {
    type: String,
  },
  flink: {
    type: String,
  },
  ilink: {
    type: String,
  },
  ylink: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  date: {
    type: String,
  },
});

export default mongoose.model("Users", User);
