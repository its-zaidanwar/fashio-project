import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 5, // max number of images
  },

  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if(allowedTypes.includes(file.mimetype)){
        cb(null , true)
    }else{
        cb(new Error("Only JPEG, PNG and WEBP images are allowed"));
    }
  },
});

export default upload;