/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
const conn = require('./connection')

function getAllBirds(db = conn) {
  return db('birds').select()
}

// NEED TO COMPLETE FRIDAY

// function getAllBirdsUsers(db = conn) {
//   return db('users_birds')
//     .join('user_id', 'users.id')
//     .select('users.id as user_id')
//     .join('bird_id', 'birds.id')
//     .select('birds.id as bird_id')
// }

function addBird(newBirdSighting, db = conn) {
  return db('users_birds').insert(newBirdSighting)
}

module.exports = {
  getAllBirds,
  addBird,
  // getAllBirdsUsers,
}
