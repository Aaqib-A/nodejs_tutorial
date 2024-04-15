const User = require('../model/User.js');

const handleLogout = async (req,res) => {
    // On client, also delete the access Token

    const cookies = req.cookies;
    //if (!cookies?.jwt)
    if (!cookies.jwt) return res.sendStatus(204); //No content
    const refreshToken = cookies.jwt;

    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser){
        res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
        return res.sendStatus(204);
    }

    //Delete the refresh token in the database
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);

    res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true}); //secure:true - only serves on https
    res.sendStatus(204);
}

module.exports = {handleLogout}