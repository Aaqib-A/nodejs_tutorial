const User = require('../model/User');

const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required' });

    console.log(user)
    //console.log( User.findOne({ username: user }) )
    
    //check for duplicate usernames in our database
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict
    try {
        //encrypt password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //create and store the new user
        const result = await User.create({
            "username": user,
            "password": hashedPwd
        });

        /*
        //Anothr way to create new record;
        const newUser = new User();
        newUser.username = user
        const result = await newUser.save();

        //3rd Way to create new record;
         const newUser = await User.create({
            "username": user,
            "password": hashedPwd
        });
        const result = await newUser.save();
        */

        console.log(result);
        res.status(201).json({ 'success': `New user ${user} created` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };