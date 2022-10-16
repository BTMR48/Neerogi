const express = require('express');

const{
    AddNewQuestion,
    getAllQuestions,
    getQuestionById,
    updateQuestion,
    deleteQuestion

} = require('../controllers/activityQuestionsController');

const router = express.Router();

router.post('/addNewQuestion', AddNewQuestion);
router.get('/getAllQuestions', getAllQuestions);
router.get('/getQuestionById/:id', getQuestionById);
router.put('/updateQuestion/:id', updateQuestion);
router.delete('/deleteQuestion/:id', deleteQuestion);


module.exports = { routes : router}