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

const create = (name, description, startYear, endYear) => {
  var name = new Movement({
    name: name,
    description: description,
    startYear: startYear,
    endYear: endYear
  })
  name.save((err, name) => {
    if (err){///console.log new Movement as JSON
      console.log(err); // Not sure this will log as JSON
    } else {  // Failure -> Console.error
      console.log(restaurants);
    }
  })
};


// Success -> console.log new Movement as JSON
// Failure -> Console.error

const index = () => {
  // Success -> console.log all Movements as JSON
  // Failure -> Console.error
  Movement.find({}).then(function(req, res){

    if (err){
      console.log(err);
    } else {
      console.log(movements: movements);//REALLY NOT SURE IF THIS WILL RETURN ALL
    }
  });

};

const show = (id) => {
  // Success -> If the specified Movement exists, console.log it as JSON;
  //              otherwise, console.log "Not Found" and exit.
  // Failure -> Console.error

  Movement.findOne({id: id}).then(function(req, res){///THis one I'm lost on!!!
    if (err){
      console.log(err);
    } else {
      console.log(movements: movements);//REALLY NOT SURE IF THIS WILL RETURN ALL
    }
  });
};



const update = (id, field, value) => {};
// Success -> If the specified Movement exists, update it and console.log the
//              updated Movement as JSON; otherwise, console.log "Not Found" and exit.
// Failure -> Console.error

const destroy = (id) => {};
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
