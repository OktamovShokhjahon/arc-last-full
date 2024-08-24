// packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const expressFileUpload = require("express-fileupload");
require("dotenv").config();

// routes
const ProjectRoute = require("./routes/projects.route");
const ContactRoute = require("./routes/contact.route");
const BlogRoute = require("./routes/blog.route");
const ClientRoute = require("./routes/clients.route");

// app
const app = express();

// config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(expressFileUpload({}));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

// middlewares
app.use("/api/projects", ProjectRoute);
app.use("/api/contact", ContactRoute);
app.use("/api/blogs/", BlogRoute);
app.use("/api/clients/", ClientRoute);

// start
const start = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    const PORT = process.env.PORT;

    app.listen(PORT, () =>
      console.log(`App has been started on http://localhost:${PORT}`)
    );
    mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

start();
