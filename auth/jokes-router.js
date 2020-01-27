const router = require('express').Router();
const Jokes = require('./jokes-model.js');

router.get('/', (req, res) => {
    Jokes.find()
        .then(joke => {
             res.json(joke);
         })
         .catch(err => res.send(err));
});

module.exports = router;