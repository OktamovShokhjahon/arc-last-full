const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  firstName: String,
  phone: String,
  message: String,
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
