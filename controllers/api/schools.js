const School = require('../../models/School')

//find all schools
const index = async(req, res) =>{
    try {
        const schools = await School.find({})
        res.status(200).json(schools)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

//Create a school
const create = async (req, res) => {
    try {
        const createdSchool = await School.create(req.body)
        res.status(200).json(createdSchool)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

//Update a school
const update = async (req, res) => {
    try {
        const updatedSchool = await School.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedSchool)

    } catch(e) {
        res.status(400).json({msg: e.message})

    }
}

//Delete a school
const remove = async (req, res) => {
    try {
        const deletedSchool = await School.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedSchool)

    } catch(e) {
        res.status(400).json({msg: e.message})

    }
}

module.exports = {
    index,
    create,
    update,
    remove
}
