const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  profileImage: {
    type: String,
    default: "profile.jpg",
  },
  text: String,
  name: String,
});

const Client = model("Client", blogSchema);

module.exports = Client;
