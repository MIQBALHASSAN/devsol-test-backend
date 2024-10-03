import express from 'express';
import upload from '../utils/file-upload';
import { car } from '../controllers';

const router = express.Router();

router.post('/login', (...args) => car.login(...args));

router.post('/add-car', (...args) => car.addCarInfo(...args));

router.post('/upload-image', upload.array('images', 3), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send({ message: 'No files uploaded' });
  }
  const filePaths = req.files.map((file) => file.path);

  res.status(200).send({
    message: 'Files uploaded successfully',
    data: {
      paths: filePaths,
    },
  });
});

module.exports = router;
