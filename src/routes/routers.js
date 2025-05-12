const express = require('express');
const router = express.Router();
const Researcher = require('../models/Researcher');

//Get all researchers
router.get('/', async (req, res) => {
    const researchers = await Researcher.find();
    res.json(researchers);
});

router.post('/', async (req, res) => {
    const newResearcher = new Researcher(req.body);
    await newResearcher.save();
    res.status(201).json(newResearcher);
});

module.exports = router;