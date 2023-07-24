const express = require('express');
const router = express.Router();
const MapMarker = require('../models/MapMarker');

// Get all markers
router.get('/', async (req, res) => {
  try {
    const markers = await MapMarker.find();
    res.json(markers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one marker
router.get('/:id', getMarker, (req, res) => {
  res.json(res.marker);
});

// Create one marker
router.post('/', async (req, res) => {
  const marker = new MapMarker({
    coordinates: req.body.coordinates,
    image: req.body.image
  });

  try {
    const newMarker = await marker.save();
    res.status(201).json(newMarker);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware function for get by ID
async function getMarker(req, res, next) {
  let marker;
  try {
    marker = await MapMarker.findById(req.params.id);
    if (marker == null) {
      return res.status(404).json({ message: 'Cannot find marker' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.marker = marker;
  next();
}

module.exports = router;