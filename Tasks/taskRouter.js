const express = require('express');

const Tasks = require('./taskModel');


const router = express.Router();



router.get('/', (req, res) => {
    Tasks.get()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get list tasks' });
    });
  });

  module.exports = router;