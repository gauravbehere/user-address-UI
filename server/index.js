const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 5000;
const { users, addresses } = require('./mockData');
app.use(cors())

/**
 * Endpoint to return the list of users in db
 */
app.get('/getUsers', (req, res) => {
  const err = "There was an error reading users from the db";

  // Read users here - from mock data in this case, else a query goes to the db
  try {
    console.log(users);
    if (users && users.length) {
      res.send(users);
    }
    else {
      res.send([]);
    }
  }
  catch {
    console.log(err);
    res.status(500).send(err)
  }
});

/**
 * Endpoint to return the address list of a given user
 */
app.get('/getAddress/:userId', (req, res) => {
  let userId = req.params && req.params.userId;
  const badRequestErr = "User id missing in the request";
  if (userId) {
    userId = parseInt(userId);

    // Filter addresses for the given user id
    const userAddresses = addresses.filter(record => record.userId === userId);
    if(userAddresses && userAddresses.length) {
      res.send(userAddresses[0].addresses);
    }
    else{
      res.send([]);
    }
  }
  else {
    console.log(badRequestErr);
    res.status(400).send(badRequestErr)
  }
});

app.listen(PORT, function () {
  console.log('Server Started : http://localhost:' + PORT);
});
