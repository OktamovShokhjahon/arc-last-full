// packages
const path = require("path");
const fs = require("fs");
require("dotenv").config();

// models
const Project = require("../models/Project");

// services
const { save } = require("../services/main.service");

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    const data = {
      ok: true,
      data: projects,
    };

    res.status(200).send(data);
  } catch (err) {
    res.send(err);
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
      const data = {
        ok: false,
        text: "Bunday id bilan project mavjud emas",
      };

      res.send(data);
      return;
    }

    const data = {
      ok: true,
      data: project,
    };

    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

const updateProject = async (req, res) => {
  try {
    const reqBody = req.body;
    const { id } = req.params;

    const existProject = await Project.findById(id);

    if (!existProject) {
      const data = {
        ok: false,
        text: "Bunady id li project mavjud emas",
      };
      res.send(data);
      return;
    }

    const updProject = await Project.findByIdAndUpdate(id, reqBody, {
      new: true,
    });

    const data = {
      ok: true,
      data: updProject,
    };

    res.status(200).send(data);
  } catch (err) {
    res.send(err);
  }
};

const createProject = async (req, res) => {
  try {
    const { media } = req.files;

    const allDirectories = [];

    media.forEach((image) => {
      const imageName = save(image);
      allDirectories.push(imageName);
    });

    let imageDir;
    allDirectories.forEach((dir) => {
      if (dir.includes("jpg")) {
        imageDir = dir;
      }
    });

    const project = new Project({
      image: imageDir,
      images: allDirectories,
    });

    const newProject = await project.save();

    const data = {
      ok: true,
      data: newProject,
    };

    res.status(201).send(data);
  } catch (err) {
    res.send(err);
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const existProject = await Project.findById(id);

    if (!existProject) {
      const data = {
        ok: false,
        text: "Bunday id bilan project mavjud emas",
      };
      res.send(data);
      return;
    }

    await Project.findByIdAndDelete(id);

    const data = {
      ok: true,
      text: "O'chirib tashlandi",
    };

    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

const getOneImage = async (req, res) => {
  const directoryPath = path.join(__dirname, "../uploads");

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ message: "Unable to scan directory" });
    }

    const images = files.map((file) => ({
      name: file,
      url: `http://localhost:${process.env.PORT}/uploads/${file}`,
    }));

    res.json(images);
  });
};

module.exports = {
  getAllProjects,
  getOne,
  updateProject,
  createProject,
  deleteProject,
  getOneImage,
};
