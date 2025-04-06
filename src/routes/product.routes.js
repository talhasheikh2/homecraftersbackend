const express =require('express')
const router = express.Router();
const upload = require('../middleware/multer.middleware.js'); // Adjust the path if needed
const {createProduct,getAllProducts}  = require('../controllers/product.handler.js');
// const getAllProducts  = require('../controllers/product.handler.js');

// router.post('/', upload.single('image'), createProduct); // Correct route with middleware
router.route('/').get( getAllProducts); // Ensure the GET route exists
router.route('/').post(upload.single('image'), createProduct);
module.exports = router;
