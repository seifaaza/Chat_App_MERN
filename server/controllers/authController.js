const User = require('../models/User')
const bcrypt = require('bcrypt')

const signUp = async (req, res) => {
    const {username, email, password} = req.body;
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = bcrypt.hashSync(password, salt)
        const user = await User.create({username, email, password : hashedPassword})
        res.status(200).json(user)
    }catch(error){
        res.sendStatus(400)
    }
}
const login = async (req, res) => {
    const {email, password} = req.body;
    res.send({email, password})
}

module.exports = { signUp, login }