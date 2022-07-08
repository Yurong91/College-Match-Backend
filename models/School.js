const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schoolSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    graduation_rate: {
        type: String,
        required: true
    },
    tuition: {
        type: String,
        required: true
    },
    student_size: String,
    attenddence_year: String,
    median_family_income: String,
    school_url: String
}, {
    timestamps: true
})

module.exports = mongoose.model('School', schoolSchema)