const bcrypt = require("bcrypt");

const activity = new activity({
    
    activityId : {
        type: String,
        require : true
    },
    activityName: {
        type : String,
        require: true
    },
    activityCode: {
        type : String,
        require: true
    },

})

module.exports = activity