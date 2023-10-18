const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    const {username, email, password} = req.body;
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = bcrypt.hashSync(password, salt)
        const user = await User.create({username, email, password : hashedPassword})

        const exp = Date.now() + 1000 * 60 * 60 * 24;
        const token = jwt.sign({sub: user._id, exp}, process.env.SECRET)
        res.cookie("authentication", token, {
        expires : new Date(exp),
        httpOnly : true,
        sameSite : "lax",
        // secure : process.env.NODE_ENV === 'production',
        secure : true,
        })
        res.status(200).json(user)
    }catch(error){
        console.log(error);
        res.sendStatus(400)
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        loggedUserId = user._id

        if(user) {
            const passwordMatch = bcrypt.compareSync(password, user.password);
            if(passwordMatch) {
                const exp = Date.now() + 1000 * 60 * 60 * 24;
                const token = jwt.sign({sub: user._id, exp}, process.env.SECRET)
                
                res.cookie("authentication", token, {
                    expires : new Date(exp),
                    httpOnly : true,
                    sameSite : "lax",
                    // secure : process.env.NODE_ENV === 'production',
                    secure : true,
                })
                res.status(200).json(loggedUserId)
            } else {
                res.sendStatus(401)
            }
        } 
    } catch(error){
        console.log(error);
        res.sendStatus(400)
    }
}

const logout = async (req, res) => {
      try {
        res.cookie("authentication", "", { expires: new Date() });
        res.sendStatus(200);
      } catch (error) {
        res.sendStatus(400);
      }
}

const checkAuth = (req, res) => {
    try{
      res.sendStatus(200)
    } catch(error){
        res.sendStatus(400)
    }
  }

module.exports = { signUp, login, logout, checkAuth }