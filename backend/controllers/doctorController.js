'use strict';

const firebase = require('../db');
const Doctor = require('../models/doctor');
const firestore = firebase.firestore();

//add new doctor 
const addDoctor = async (req, res, next) => {
    try {
        var emailCheck = false;
        const data = req.body;
        const email = req.body.email;
        const doctors = await firestore.collection('doctors');
        const dataCheck = await doctors.where('email', '==', email).get();
        dataCheck.forEach(doc => {
            emailCheck = true;
          });
        if(emailCheck) {
            res.status(409).send('Doctor with this email already exists');
        }else {    
            await firestore.collection('doctors').doc().set(data);
            res.send('Doctor saved successfuly');
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//get all doctors 
const getAllDoctors = async (req, res, next) => {
    try {
        const doctors = await firestore.collection('doctors');
        const data = await doctors.get();
        const doctorsArray = [];
        if(data.empty) {
            res.status(404).send('No doctor record found');
        }else {
            data.forEach(doc => {
                const doctor = new Doctor(
                    doc.id,
                    doc.data().name,
                    doc.data().phoneNumber,
                    doc.data().email,
                    doc.data().specialty,
                    doc.data().hospitals,
                    doc.data().imgUrl,
                );
                doctorsArray.push(doctor);
            });
            res.send(doctorsArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//get a single doctor
const getDoctor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const doctor = await firestore.collection('doctors').doc(id);
        const data = await doctor.get();
        if(!data.exists) {
            res.status(404).send('Doctor with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//update a doctor
const updateDoctor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const doctor =  await firestore.collection('doctors').doc(id);
        await doctor.update(data);
        res.send('Doctor record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

//delete a doctor
const deleteDoctor = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('doctors').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addDoctor,
    getAllDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor
}