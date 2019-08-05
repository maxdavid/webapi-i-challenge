const express = require('express');
const cors = require('cors');
const db = require('./data/db');

const server = express();

server.use(express.json());
server.use(cors());

// GET /api/users
server.get('/api/users', (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'The users information could not be retrieved.' });
    });
});

// POST /api/users
server.post('/api/users', (req, res) => {
  if (!req.body.name || !req.body.bio) {
    res
      .status(400)
      .json({ message: 'Please provide name and bio for the user.' });
  } else {
    db.insert(req.body)
      .then(userId => {
        res.status(201).json(userId);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error adding user' });
      });
  }
});

// GET /api/users/:id
server.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(user => {
      if (user) res.status(200).json(user);
      else
        res
          .status(404)
          .json({ message: 'The user with the specified ID does not exist.' });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'The user information could not be retrieved.' });
    });
});

// DELETE /api/users/:id
server.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(user => {
      if (user) res.status(200).json(user);
      else
        res
          .status(404)
          .json({ message: 'The user with the specified ID does not exist.' });
    })
    .catch(err => {
      res.status(500).json({ message: 'The user could not be removed' });
    });
});

// PUT /api/users/:id
server.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  if (!req.body.name || !req.body.bio) {
    res
      .status(400)
      .json({ message: 'Please provide name and bio for the user.' });
  } else {
    db.update(id, req.body)
      .then(user => {
        if (user) res.status(200).json(user);
        else
          res.status(404).json({
            message: 'The user with the specified ID does not exist.'
          });
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: 'The user information could not be modified.' });
      });
  }
});

server.listen(8000, () => console.log('server running'));
