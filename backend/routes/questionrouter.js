const router = require("express").Router();
const { addQuestion,getAllQuestions,getQuestion,updateQuestion,deleteQuestion } = require('../controllers/questioncontroller.js')
 

router.post('/addQuestion', addQuestion);
router.get('/questions', getAllQuestions);
router.get('/question/:id', getQuestion);
router.put('/question/:id', updateQuestion);
router.delete('/question/:id', deleteQuestion);
 

 
module.exports = router;