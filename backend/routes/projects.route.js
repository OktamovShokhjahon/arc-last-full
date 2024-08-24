const { Router } = require("express");

// controllers
const {
  getAllProjects,
  getOne,
  updateProject,
  createProject,
  deleteProject,
  getOneImage,
} = require("../controllers/projects.controller");

// router
const router = Router();

// main routes
router.get("/", getAllProjects);
router.get("/id/:id", getOne);
router.get("/images/:name", getOneImage);
router.post("/update/:id", updateProject);
router.post("/delete/:id", deleteProject);
router.post("/create", createProject);

module.exports = router;
