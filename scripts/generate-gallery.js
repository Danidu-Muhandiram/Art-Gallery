const fs = require("fs");
const path = require("path");

const folders = [
  {
    folder: "public/wallpapers",
    category: "wallpaper",
    width: 900,
    height: 1600,
  },
  {
    folder: "public/backgrounds",
    category: "background",
    width: 1600,
    height: 900,
  },
];

const imageExtensions = [".png", ".jpg", ".jpeg", ".webp"];

const formatTitle = (filename) =>
  filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

let gallery = [];

folders.forEach(
  ({ folder, category, width, height }) => {
    const fullPath = path.join(process.cwd(), folder);

    if (!fs.existsSync(fullPath)) return;

    const files = fs
      .readdirSync(fullPath)
      .filter((file) =>
        imageExtensions.includes(
          path.extname(file).toLowerCase()
        )
      );

    files.forEach((file) => {
      const filePath = path.join(fullPath, file);
      const stats = fs.statSync(filePath);

      gallery.push({
        src: `/${folder.replace("public/", "")}/${file}`,
        title: formatTitle(file),
        width,
        height,
        category,
        createdAt: stats.birthtime,
      });
    });
  }
);

// newest first
gallery.sort(
  (a, b) =>
    new Date(b.createdAt) -
    new Date(a.createdAt)
);

const dataFolder = path.join(
  process.cwd(),
  "src",
  "data"
);

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder, {
    recursive: true,
  });
}

const galleryPath = path.join(
  dataFolder,
  "gallery.json"
);

fs.writeFileSync(
  galleryPath,
  JSON.stringify(gallery, null, 2)
);

console.log("Gallery generated!");