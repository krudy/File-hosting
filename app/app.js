const express = require('express');
const path = require('path');
const app = express();
const port = 9999;
const multer = require('multer');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/../views'));
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null , 'public/uploads/');
  },
  filename( req, file, cb) {
    const name = `${Date.now()}-${file.originalname}`;
    cb(null, name);
  }
})



app.get('/', (req, res) => {
  res.render('home');
});

app.post('/', multer({storage}).single('file'), (req, res) => {
  res.render('home', {
    fileURL: req.headers.host + '/uploads/' + req.file.filename
  });
});



app.listen(port, () => {
  console.log(`Server uruchomiony na porcie: ${port}`);
});