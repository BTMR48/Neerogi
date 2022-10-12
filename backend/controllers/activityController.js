'use strict';

const firebase = require('../db');
const Activity = require('../models/activity');
const firestore = firebase.firestore();

const addNewActivity = async( req, res, next) =>{
    try{
        const data = req.body;
        await firestore.collection('activities').doc().set(data);
        res.send("Successfully Added new Activity");

    }catch(error){
        res.status(400).send(error.message("Record can not be Added"));
    }
}

const getAllActivities = async (req, res, next) => {
    try {
        const activities = await firestore.collection('activities');
        const data = await activities.get();
        const activityArray = [];
        if(data.empty){
            res.status(404).send('No Data Available');
        }else {
            data.forEach(doc => {
                const activity = new Activity(
                    doc.id,
                    doc.data().activityId,
                    doc.data().activityName,
                    doc.data().activityCode
                );
                activityArray.push(activity);
            });
            res.send(activityArray);
        }
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getActivityById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const activity =  await firestore.collection('activities').doc(id);
        const data = await activity.get();
        if(!data.exists) {
            res.status(404).send("Activity couldn't Found");
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateActivity = async (req, res, next) => {
    try{
        const id = req.params.id;
        const data = req.body;
        const activity =  await firestore.collection('activities').doc(id);
        await activity.update(data);
        res.send('Successfully Updated'); 
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteActivity = async(req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('activities').doc(id).delete();
        res.send('Successfully Deleted');
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    addNewActivity,
    getAllActivities,
    getActivityById,
    updateActivity,
    deleteActivity
}