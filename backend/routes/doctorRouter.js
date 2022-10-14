const express = require('express');
const {addDoctor, 
       getAllDoctors, 
       getDoctor,
       updateDoctor,
       deleteDoctor
      } = require('../controllers/doctorController');

const router = express.Router();

router.post('/doctor', addDoctor);
router.get('/doctors', getAllDoctors);
router.get('/doctor/:id', getDoctor);
router.put('/doctor/:id', updateDoctor);
router.delete('/doctor/:id', deleteDoctor);


module.exports = {
    routes: router
}