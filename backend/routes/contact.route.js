const { Router } = require("express");

// controllers
const {
  getAll,
  createContact,
  deleteContact,
} = require("../controllers/contact.controller");

// router
const router = Router();

// main routes
router.get("/", getAll);
router.post("/create", createContact);
router.post("/delete/:id", deleteContact);

module.exports = router;
