const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  image: String,
  title: String,
  desc: String,
  btnText: String,
  images: Array,
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const Project = model("Project", projectSchema);

module.exports = Project;
