const routes = require('express').Router()
const katalogObatController = require('../controllers/katalogObatControllers')
const cartRoutes = require('./cartRoutes')

const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// cloudinary.config({ 
//     cloud_name: 'djjzsn7pa', 
//     api_key: '373724578635194', 
//     api_secret: 'KSEzRiBbM0TK-_lz6PIDxzQzBsc' 
// });

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'GambarObat',
        formats: ['jpeg', 'png', 'jpg', 'webq'],
        resource_type: 'auto'
    }
});
const upload = multer({storage: storage });


routes.post('/katalog', upload.single('image'), katalogObatController.insert)
// routes.post('/katalog', katalogObatController.insert)


routes.get('/katalog', katalogObatController.selectAll)
routes.get('/katalog/:id_Obat', katalogObatController.select)


routes.put('/katalog/:id_Obat', katalogObatController.update)

routes.delete('/katalog/:id_Obat', katalogObatController.delete) 
// routes.delete('/katalog', katalogObatController.deleteAll) 

// routes.post('/katalog/cart', cartRo)

module.exports = routes