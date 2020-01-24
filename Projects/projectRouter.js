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


  router.post('/', (req, res) => {
    const data = req.body;
    if (!data.Name || !data.Description) {
        res.status(400).json( { errorMessage: "Please provide name and description for the post." })
    } else {
        Projects 
        .insert(data, req.params.id) 
        .then(projects => {
             res.status(201).json(projects)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "Error adding the post"})
        })
    }
    
});












module.exports = router;