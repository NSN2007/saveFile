const express = require('express');
const app = express();
const fs = require('fs');

const multer = require('multer')
const upload = multer({ dest: 'files/' })

const port = 80

app.use(express.static('public'))

app.use(express.json());

app.post('/uploadFile', upload.single('fname'), function (req, res) {
    fs.rename(`files/${req.file.filename}`, `files/${req.file.originalname}`, function (err) {
        if (err) throw err;
        console.log(`${req.file.filename} -> ${req.file.originalname}`);
    });
});

app.listen(port, () => {
    console.log(`${port}`)
});