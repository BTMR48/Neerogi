'use strict';

const firebase = require('../db');
const Answer = require('../models/question');
const firestore = firebase.firestore();


// should add parenID

const addAnswer = async (req, res, next) => {
    const ans = req.body;
    try {
        
        await firestore.collection('answersdas').doc().set(ans);
        res.send('Submitted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllAnswers = async (req, res, next) => {
    try {
        const answers = await firestore.collection('answersdas');
        const data = await answers.get();
        const answersArray = [];
        if(data.empty) {
            res.status(404).send('No Answers  found');
        }else {
            data.forEach(doc => {
                const answer = new Answer(
                    doc.id,
                    doc.data().name,
                    doc.data().ans,
                    
                );
                answersArray.push(answer);
                
            });
            res.send(answersArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addAnswer,
    getAllAnswers,
}