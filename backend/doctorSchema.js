var mongoose = require('mongoose');

const DoctorSchema = mongoose.Schema({
    doctorName: {
        type: String,
        required: true
    },
    doctorTimeStamp: {
        type: String,
        required: true
    },
    doctorPrice: {
        type: String,
        required: true
    },
    doctorDone:{
        type: Boolean,
        required: true
    }
});

const Doctor = module.exports = mongoose.model('Doctor', DoctorSchema);