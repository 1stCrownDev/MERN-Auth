// routes/protectedRoute.js

const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authMiddleware');

//Route
router.get('/profile', Auth, (req, res) => {
    //Access user data through req.userData
    res.json({message: 'You are authenticated!'});
});

module.exports = router;