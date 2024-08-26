const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");

const Bot = new TelegramBot(process.env.TOKEN, { polling: true });

const save = (file) => {
  console.log(file);

  try {
    const fileName =
      uuidv4() + `${file.mimetype.includes("video") ? ".mp4" : ".jpg"}`;
    const currentDir = __dirname;
    const staticDir = path.join(currentDir, "..", "uploads");
    const filePath = path.join(staticDir, fileName);

    if (!fs.existsSync(staticDir)) {
      fs.mkdirSync(staticDir, { recursive: false });
    }

    file.mv(filePath);

    return fileName;
  } catch (err) {
    throw new Error(`Error saving file: ${err}`);
  }
};

const saveVideo = (req) => {
  let fileName = "";
  req.on("data", (chunk) => {
    fileName += chunk.toString();
  });

  req.on("end", () => {
    const videoBuffer = Buffer.from(fileName);
    const videoPath = path.join(__dirname, "uploads", `${uuidv4()}.mp4`);

    fs.writeFile(videoPath, videoBuffer, (err) => {
      if (err) {
        return `Something went wrong`;
      }

      return videoPath;
    });
  });
};

const sendContact = (contact) => {
  const username = "@arc_zayavka_group";

  Bot.sendMessage(
    username,
    `Yangi xabar 💬\n\nIsmi: ${contact.firstName}\nTelefon raqami: ${contact.phone}\nXabar: ${contact.message}`
  );
};

module.exports = { save, saveVideo, sendContact };
