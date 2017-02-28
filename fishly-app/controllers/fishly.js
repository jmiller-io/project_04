const User = require('../models/userProfile.js');
const Lake = require('../models/lake.js');


// GET USERS
function getAllUsers(request, response) {
  User.find(function(error, users) {
    if(error) response.json({message: 'Could not find any users'});
  })
}

// POST USERS
function createUser(request, response) {
  var user = new User(request.body);
  user.save(function(error) {
    if (error) response.json({message: 'Could not create user b/c: ' + error})
  })
}

// GET USER
function getUser(request, response) {
  var id = request.params.id;
  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c: ' + error})

      response.json({user: user})
  })
}

// UPDATE USER
function updateUser(request, response) {
  var id = request.params.id;

  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c: ' + error})
  })
}


// GET LAKES
function getAllLakes(request, response) {
  Lake.find(function(error, users) {
    if(error) response.json({message: 'Could not find any lakes'});
  })
}


// POST LAKES
function createLake(request, response) {
  var lake = new Lake(request.body);
  lake.save(function(error) {
    if (error) response.json({message: 'Could not create lake b/c: ' + error})
  })
}


module.exports = {
  getAllUsers: getAllUsers,
  createUser: createUser,

}
