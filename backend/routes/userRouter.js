  
const express = require('express');
const {
    signinUser,
    signupUser,
    getAllUsers
} = require('../controllers/userController')

const auth = require('../middleware/auth')

const router = express.Router();

router.post('/signup', signupUser)

router.post('/login', signinUser)
router.get('/', getAllUsers)

module.exports = {
    routes: router
}