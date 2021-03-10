const express = require('express')
const multer = require('multer')
const path = require('path')
const app = express();
const port = process.env.PORT || 3000
app.use(express.json());

app.use(express.static(path.join(__dirname,'/public')))

  const upload = multer();

app.post('/api/fileup', upload.single('upfile'), function (req, res, next) {;
    const x = {
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    }
    // console.log(req.file.filename);
    res.send(x);
})

app.listen(port, () => {
    console.log('server is up ' + port);
})