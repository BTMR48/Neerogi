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
router.get('/getQuestionById', getQuestionById);
router.put('./updateQuestion', updateQuestion);
router.delete('./deleteQuestion', deleteQuestion);


module.exports = { routes : router}