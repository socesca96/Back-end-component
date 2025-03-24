const multer = require ('multer')
const path = require ('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req,file, cb){
        const ext = path.extname(file.originalname);
        const filename = Date.now() + '-'+file.filename + ext;
            cb(null, filename)
    }
});

const fileFilter = (req, file,cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/jpg'];
    if(allowed.includes(file.mimetype)) {
        cb(null,true)
    } else {
        cb(new Error('Solo se permiten imágenes .jpg,.jpeg y .png'), false)
    }
}

const upload = multer({storage, fileFilter})

module.exports= upload