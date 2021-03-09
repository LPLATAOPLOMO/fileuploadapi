const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express();
const port = process.env.PORT || 3000
app.use(express.json());

app.use(express.static(path.join(__dirname,'/public')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "/uploads/"));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

app.post('/api/fileup', upload.single('upfile'), function (req, res, next) {
    res.send(req.file)
})

app.listen(port, () => {
    console.log('server is up ' + port);
})