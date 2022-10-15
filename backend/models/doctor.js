class Doctor {
    constructor(id, name, phoneNumber, email, specialty, hospitals, imgUrl ) {
            this.id = id;
            this.name = name;
            this.phoneNumber = phoneNumber;
            this.email = email;
            this.specialty = specialty;
            this.hospitals = hospitals;
            this.imgUrl = imgUrl;
    }
}

module.exports = Doctor;