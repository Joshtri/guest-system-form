import multer from "multer";
import path from "path";

const storage = multer.memoryStorage();
const fileLimit = { fileSize: 1000000 };

const uploadMultiple = multer({
  storage,
  limits: fileLimit,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).array("file", 12);

const upload = multer({
  storage,
  limits: fileLimit,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
}).single("file");

function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb("Error: Images Only !!!");
  }
}

export { uploadMultiple, upload };
