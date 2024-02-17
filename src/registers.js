const express = require('express');
const User = require('./models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const accountNumber = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit number
        const newUser = await User.create({ name, email, password, accountNumber });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;