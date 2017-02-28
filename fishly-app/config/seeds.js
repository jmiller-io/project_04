var mongoose = require('./database');
var User = require('../models/userProfile.js');
var Lake = require('../models/lake.js');

var users = [
{name: 'Jake', avatar: 'http://i0.wp.com/gogirlfinance.com/wp-content/uploads/2013/11/keanu-reeves1.jpg', catch: [{date: 2/27/2017, img: 'https://forum.americanexpedition.us/images/northern-pike/photo-of-northern-pike-up-close.jpg', lake: 'Lake Minnetonka', length: 24, species: 'Northern Pike'}, {date: 2/28/2017, img: 'http://farm8.static.flickr.com/7421/8726989096_6269508e2d.jpg', lake: "Pelican Lake", length: 18, species: "Largemouth Bass"}]},
{name: 'Jesse', avatar: 'http://www.fillmurray.com/200/300', catch: [{date: 1/27/2017, img: 'https://forum.americanexpedition.us/images/bluegill/bluegill-held-in-hands.jpg', lake: 'Lake Superior', length: 4, species: 'Bluegill'}, {date: 3/2/2017, img: 'http://farm8.static.flickr.com/7421/8726989096_6269508e2d.jpg', lake: "Red Lake", length: 18, species: "Largemouth Bass"}]},

]

var lakes = [{name: 'Lake Superior'}, {name: 'Pelican Lake'}]
Lake.remove({}, function(err) {
  if (err) console.log(err);
  Lake.create(lakes, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + lakes.length  + " lakes.");
      mongoose.connection.close();
    }
    process.exit();
  });
});


User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
      mongoose.connection.close();
    }
    process.exit();
  });
});
