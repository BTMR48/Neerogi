class User {
    constructor(id,name, email, password, imgUrl,date ) {
        this.id = id
            this.name = name
            this.email = email;
            this.password = password;
            this.imgUrl = imgUrl;
            this.date = date;
            this.role = "0";
    }
}

module.exports = User;