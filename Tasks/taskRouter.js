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


  router.post('/', (req, res) => {
    const data = req.body;
    if (!data.Description) {
        res.status(400).json( { errorMessage: "Please provide description for the post." })
    } else {
        Tasks 
        .insert(data, req.params.id) 
        .then(tasks => {
             res.status(201).json(tasks)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "Error adding the post"})
        })
    }
    
});







  module.exports = router;