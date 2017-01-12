"use strict";
////////////////////////
///  Art Movements   ///
////////////////////////

// Your team has been tasked with making an educational app for
// a museums's website. When a user clicks on a particular piece of art,
// they'll be able to see the movement that piece was part of, as well as
// a list of other related movements.

// Your job is to build the piece of the system for doing CRUD on the different
// art movements; the API for this part of the system must be standardized so
// so that other parts of the application can use it.

// Each Movement needs to have the following features:
// - A name (required).
// - A description (no longer than 200 characters).
// - Starting and ending years (as strings) for the time when the movement
//    was most prominent.
// - An 'ancestor', another art movement that this movement descends from.

// Please implement the CRUD functions below, using Promises to handle the
//  specified success and failure behaviors.
// Your Mongoose model has already been created for you in models/movement.js

/// STARTER CODE - DO NOT ALTER!
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongoose-crud-diagnostic');

const Movement = require('./models/movement.js');

/// ADD YOUR CODE BELOW

const create = function(name, description, startYear, endYear) => {
  Movement.create({
    'name':name,
    'description':description,
    startYear: startYear,
    endYear: endYear
  }).then(function(movement){
    console.log(movement.toJSON());
    done();
  }).catch(function(err){
    console.error(err);
  }).then(done);
};
// Success -> console.log new Movement as JSON
// Failure -> Console.error

const index = () => {
  Movement.find({}).then(function(movement) {
    movement.forEach(function(person) {
      console.log(movement.toJSON());
    });
  }).catch(console.error).then(done);
};
// Success -> console.log all Movements as JSON
// Failure -> Console.error

const show = (id) => {
  Movement.findById(id).then(function(){
    console.log(movement.toJSON());
  }).catch(console.error).then(done);
};
// Success -> If the specified Movement exists, console.log it as JSON;
//              otherwise, console.log "Not Found" and exit.
// Failure -> Console.error

const update = (id, field, value) => {
  let modify = {};
  modify[field] = value;
  Movement.findById(id)
    .then(function(movement) {
      movement[field] = value;
      return movement.save();
  }).then(function(movement) {
    console.log(movement.toJSON());
  }).catch(console.error).then(done);
};
// Success -> If the specified Movement exists, update it and console.log the
//              updated Movement as JSON; otherwise, console.log "Not Found" and exit.
// Failure -> Console.error

const destroy = (id) => {
  Movement.findById(id).then(function(movement){
    movement.remove();
    console.log("removed")
  }).catch(console.error).then(done);
  console.log("Not Found");
};
// Success -> If the specified Movement exists, destroy it and console.log 'removed';
//              otherwise, console.log "Not Found" and exit.
// Failure -> Console.error

module.exports = {
  create,
  index,
  show,
  update,
  destroy
};
