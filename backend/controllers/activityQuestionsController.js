'use strict';

const firebase = require('../db');
const ActivityQuestions = require('../models/activityQuestions');
const firestore = firebase.firestore();

const AddNewQuestion = async(req, res, next) => {
    try{
        const data = req.body;
        await firestore.collection('activityQuestions').doc().set(data);
        res.send("Successfully Added new question");
    }catch(error){
        res.status(400).send(error.message("Record can not be Added"));
    }
}

const getAllQuestions = async (req, res, next) => {
    try{
        const allQuestions = await firestore.collection('activityQuestions');
        const data = await allQuestions.get();
        const allQuestionArray = [];

        if(data.empty){
            res.status(404).send('No Data Available');
        }else {
            data.forEach(doc => {
                const allQuestion = new ActivityQuestions(
                    doc.id,
                    doc.data().questionId,
                    doc.data().questionNum,
                    doc.data().question,
                    doc.data().imageOne,
                    doc.data().imageTwo, 
                    doc.data().imageThree,
                    doc.data().voiceRecord
                );
                allQuestionArray.push(allQuestion);
            });
            res.send(allQuestionArray);
        }
    }catch(error){
        res.status(400).send(error.message);
    }
}


const getQuestionById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const questions =  await firestore.collection('activityQuestions').doc(id);
        const data = await questions.get();
        if(!data.exists) {
            res.status(404).send("Question couldn't Found");
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateQuestion = async (req, res, next) => {
    try{
        const id = req.params.id;
        const data = req.body;
        const question =  await firestore.collection('activityQuestions').doc(id);
        await question.update(data);
        res.send('Successfully Updated'); 
    }catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteQuestion = async(req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('activityQuestions').doc(id).delete();
        res.send('Successfully Deleted');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    AddNewQuestion,
    getAllQuestions,
    getQuestionById,
    updateQuestion,
    deleteQuestion
}