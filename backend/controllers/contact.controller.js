const Contact = require("../models/contact");
const { sendContact } = require("../services/main.service");

const getAll = async (req, res) => {
  try {
    const contacts = await Contact.find();

    const data = {
      ok: true,
      data: contacts,
    };

    res.status(200).send(data);
  } catch (err) {
    res.send(err);
  }
};

const createContact = async (req, res) => {
  try {
    const { firstName, phone, message } = req.body;

    const contact = new Contact({
      firstName,
      phone,
      message,
    });

    const newContact = await contact.save();

    const data = {
      ok: true,
      data: newContact,
    };

    res.status(201).send(data);

    sendContact(newContact);
  } catch (err) {
    res.send(err);
  }
};

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const existContact = await Contact.findById(id);

    if (!existContact) {
      const data = {
        ok: false,
        text: "Bunday id li contact mavjud emas",
      };

      res.send(data);
      return;
    }

    await Contact.findByIdAndDelete(id);
    const data = {
      ok: true,
      text: "Muvaffaqiyatli o'chirib yuborikdi",
    };

    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  deleteContact,
  createContact,
  getAll,
};
