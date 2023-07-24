const mongoose = require('mongoose');

const MapMarkerSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('MapMarker', MapMarkerSchema);