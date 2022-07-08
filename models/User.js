const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 200,
        required: true
    },
    myList: [
        {
            type: Schema.Types.ObjectId,
            ref: 'School'
        }

    ]
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, saltRounds)
    return next()
})

module.exports = mongoose.model('User', userSchema)