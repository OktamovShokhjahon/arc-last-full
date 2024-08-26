// packages
const path = require("path");
const fs = require("fs");
require("dotenv").config();

// models
const Blog = require("../models/Blog");

// services
const { save } = require("../services/main.service");

const getAllProjects = async (req, res) => {
  try {
    const projects = await Blog.find();

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

    const project = await Blog.findById(id);

    if (!project) {
      const data = {
        ok: false,
        text: "Bunday id bilan blog mavjud emas",
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
    const { desc_uz, desc_en, desc_ru, image } = req.body;
    const { id } = req.params;
    const reqFiles = req.files;

    let newImage = null;

    if (reqFiles !== null) {
      newImage = reqFiles.newImage;
    }

    const existProject = await Blog.findById(id);

    console.log(existProject);

    if (!existProject) {
      const data = {
        ok: false,
        text: "Bunady id li project mavjud emas",
      };
      res.send(data);
      return;
    }

    let imagePath = image;

    console.log(newImage);
    if (newImage) {
      imagePath = save(newImage);
    }

    const updProject = await Blog.findByIdAndUpdate(
      id,
      {
        desc_uz,
        desc_en,
        desc_ru,
        image: imagePath,
      },
      {
        new: true,
      }
    );

    console.log(updProject);

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
    const { desc_uz, desc_ru, desc_en } = req.body;
    const { images } = req.files;

    const image = save(images);

    const project = new Blog({
      image,
      desc_uz,
      desc_en,
      desc_ru,
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

    const existProject = await Blog.findById(id);

    if (!existProject) {
      const data = {
        ok: false,
        text: "Bunday id bilan project mavjud emas",
      };
      res.send(data);
      return;
    }

    await Blog.findByIdAndDelete(id);

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
