const express = require('express');

const Resources = require('./resourceModel');


const router = express.Router();



router.get('/', (req, res) => {
    Resources.get()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

  router.post('/', (req, res) => {
    const data = req.body;
    if (!data.Name || !data.Description) {
        res.status(400).json( { errorMessage: "Please provide name and description for the post." })
    } else {
        Resources 
        .insert(data, req.params.id) 
        .then(resources => {
             res.status(201).json(resources)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "Error adding the post"})
        })
    }
    
});




  module.exports = router;