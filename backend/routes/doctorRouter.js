const express = require('express');
const {addDoctor, 
       getAllDoctors, 
       getDoctor,
       updateDoctor,
       deleteDoctor
      } = require('../controllers/doctorController');

const auth = require('../middleware/auth')

const router = express.Router();

router.post('/', addDoctor);
router.get('/', getAllDoctors);
router.get('/:id', getDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);


module.exports = {
    routes: router
}