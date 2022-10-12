const router = require("express").Router();
const { addAnswer } = require('../controllers/detailsAnswersdacontroller')
 

router.post('/addAnswer', addAnswer);
// router.get('/AllAnswers', getAllAnswers);

 
module.exports = router;