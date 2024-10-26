// routes/authRoutes.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await user.save();

        res.status(201).json({
            message:
                'User registered successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error:
                'Internal server error'
        });
    }
});

router.post('/logout', (req, res) => {
    /* 
    You may want to perform additional
    cleanup or session invalidation here
     */
    res.clearCookie('token').send('Logged out successfully');
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                error:
                    'Invalid credentials'
            });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password,
            user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                error:
                    'Invalid credentials'
            });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id },
            process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error:
                'Authentication failed. Internal server error'
        });
    }
});

module.exports = router;
