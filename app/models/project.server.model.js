'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Project Schema
 */
var ProjectSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Project name',
    trim: true
  },
  description: {
    type: String,
    default: '',
    required: 'Please fill Project desc',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  images: [{
    type: String,
    default: '',
    trim: true
  }],
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Project', ProjectSchema);
