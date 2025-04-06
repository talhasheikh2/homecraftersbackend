const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp'); // Directory to save uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Save file with its original name
  },
});

const upload = multer({
  storage,
});

module.exports = upload; // Export the upload instance
