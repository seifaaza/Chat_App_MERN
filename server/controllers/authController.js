module.exports.signUp = (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    res.send('new sign up')
}