const express = require('express');
const router = express.Router();
const User = require('../model/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error ' + err));
});


router.post('/add', async (req, res) => {
    const user = new User({
        username: req.body.username
    });
    try {
        const savedUser = await user.save();
        res.json("User added!");
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;