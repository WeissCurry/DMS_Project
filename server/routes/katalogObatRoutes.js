const routes = require('express').Router()
const katalogObatController = require('../controllers/katalogObatControllers')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const dotenv = require('dotenv');

dotenv.config();

const cloudinaryApiKey = process.env.CLOUDINARY_API_KEY;
const cloudinaryApiSecret = process.env.CLOUDINARY_API_SECRET;
const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME;

// console.log(cloudinaryApiKey);

cloudinary.config({ 
    cloud_name: cloudinaryCloudName, 
    api_key: cloudinaryApiKey, 
    api_secret: cloudinaryApiSecret
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'GambarObat',
        formats: ['jpeg', 'png', 'jpg', 'webp'],
        resource_type: 'auto'
    }
});

const upload = multer({storage: storage});


routes.get('/katalog/view', katalogObatController.katalogView) 
routes.get('/katalog/formObat', katalogObatController.katalogViewInput)

routes.post('/katalog', upload.single('Gambar'), katalogObatController.insert)
// routes.post('/katalog', katalogObatController.insert)


routes.get('/katalog', katalogObatController.selectAll)
routes.get('/katalog/:id', katalogObatController.select)


routes.put('/katalog/:id', katalogObatController.update)

routes.delete('/katalog/:id', katalogObatController.delete) 

module.exports = routes