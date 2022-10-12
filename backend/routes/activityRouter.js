const express = require('express');

const{
    addNewActivity,
    getAllActivities,
    getActivityById,
    updateActivity,
    deleteActivity

} = require('../controllers/activityController');

const router = express.Router();

router.post('/newActivity', addNewActivity);
router.get('/getAllActivities', getAllActivities);
router.put('/updateActivity/:id', updateActivity);
router.delete('/deleteActivity/:id', deleteActivity);
router.get('/getActivityById/:id',getActivityById);

module.exports = { routes : router}