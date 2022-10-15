class User {
    constructor(name, email, password, imgUrl ) {
            this.name = name
            this.email = email;
            this.password = password;
            this.imgUrl = imgUrl;
            this.role = "0";
    }
}

module.exports = User;