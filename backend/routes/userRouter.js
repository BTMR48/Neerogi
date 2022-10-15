  
const express = require('express');
const {
    signinUser,
    signupUser
} = require('../controllers/userController')

const auth = require('../middleware/auth')

const router = express.Router();

router.post('/signup', signupUser)

router.post('/login', signinUser)

module.exports = {
    routes: router
}