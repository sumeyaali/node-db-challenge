const express = require('express');

const Projects = require('./projectModel');


const router = express.Router();



router.get('/', (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });















module.exports = router;