class ActivityQuestions {
    constructor(id,questionId, questionNum, question, imageOne, imageTwo, imageThree, voiceRecord){
        this.id = id;
        this.questionId = questionId;
        this.questionNum = questionNum;
        this.question = question;
        this.imageOne = imageOne;
        this.imageTwo = imageTwo;
        this.imageThree = imageThree;
        this.voiceRecord = voiceRecord
    }
}

module.exports = ActivityQuestions;