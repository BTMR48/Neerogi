'use strict';

const firebase = require('../db');
const Users = require('../models/user')
const firestore = firebase.firestore();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//user sign in  
exports.signinUser = async(req,res) => {
    const{ email, password } = req.body;

        try{
            //find the user by email
            var userCheck = false;
            var id ;
            const findEmails = await firestore.collection('users');
            const dataCheck = await findEmails.where('email', '==', email).get();
            dataCheck.forEach(doc => {
                userCheck = true;
                id = doc.id;
            });

            //if the email doesn't exist
            if (!userCheck)
                return res.status(404).json({message: "Such email doesn't exist"});

            const userc = await firestore.collection('users').doc(id).get();
            const user = await userc.data();

            //compare the password with provided password
            const ispasswordMatch = await bcrypt.compare(password, user.password);

            //if passwords didn't match
            if (!ispasswordMatch)
            return res.status(400).json({message: "Invalid password"});

            //creating a token
            const token = jwt.sign({email: user.email, id: user.id}, process.env.JWT_SECRET, {expiresIn:"1h"} )

            //joining the user object and token
            res.status(200).json({result: user, token})
        }catch(error){
            res.status(500).json({message: "Something went wrong", error: error.message})
        }
}

//user sign up () 
exports.signupUser = async(req,res, next) => {
    
    try {
        const {name, email, password, imgUrl, role} = req.body;
        // const data = req.body;

        //checking email already exists
        var userCheck = false;
        const findEmails = await firestore.collection('users');
        const dataCheck = await findEmails.where('email', '==', email).get();
        dataCheck.forEach(doc => {
            userCheck = true;
          });

        if (userCheck) { 
            res.status(409).json({message: "User with this email already exists"});
        } 
        else {

            //encrypt password
            const hashedPassword = await bcrypt.hash(password, 12);

            //creating a new user
            const user = await firestore.collection('users').add({name:name, email:email, password:hashedPassword, imgUrl:imgUrl, role:role});
            
            //creating a token
            const token = jwt.sign({email: user.email, id: user.id}, process.env.JWT_SECRET, {expiresIn: "1h"})

            //sending the user object and token as the response
            res.status(200).json({success: true, result: user, token})
            }
    } catch (error) {
        res.status(500).json({message: "Something went wrong", error: error.message})
    }
}

//user update
// exports.updateUser = async(req,res) => {

//     let doctorID = req.params.id;
//     const { name, speciality, languages, qualification, doctorfee, availableDay, practicingLocations, } = req.body;

//     let to=new Date(req.body.availableTimeTo)
//     let from=new Date(req.body.availableTimeFrom)
    
//     const availableTimeTo = (to.getHours() + ":" + to.getMinutes())
//     const availableTimeFrom = (from.getHours() + ":" + from.getMinutes())

//     const updateUser= { name, speciality, languages, qualification, doctorfee, availableDay, availableTimeTo, availableTimeFrom, practicingLocations} 
    
//     try{
//         //find user by ID  
//          await Doctor.findByIdAndUpdate(doctorID ,updateUser);

//         res.status(200).json({message:"user updated"})
//     }catch(error){
//         res.status(500).json({message:"Error with updating data",error:error.message});
//     }

// }

// //user delete
// exports.deleteDoctor = async(req,res) => {
    
//     let doctorId = req.params.id;
    
//     try{
//         await Doctor.findByIdAndDelete(doctorId);

//         res.status(200).json({message:"delete successful"});
//     }catch(error){
//         res.status(500).json({message: "delete failed",error:error.message});
//     }
// }

// exports.fetchAll =async(req,res) =>{

//     Doctor.find().then((doctors)=>{
        
//         res.status(200).json(doctors)
//     }).catch((error)=>{
//         res.status(500).json({message:"fetching failed", error:error.message});
//     })
// }

// exports.fetchOne =async(req,res) =>{
//     let doctorId = req.params.id;

//     await Doctor.findById(doctorId)
//     .then( (user) =>{
//         res.status(200).json(user)
//     }).catch( (error) =>{
//         res.status(500).json({message:"Fetching failed", error:error.message});
//     })
// }
