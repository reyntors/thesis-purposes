const User = require('../models/user.model');



exports.register = async (req, res) => {
    try {

        const {username, password} = req.body;

        const user = new User({username, password})


        await user.save();


        return res.status(200).json({message: 'Successfully registered!'})
        
    } catch (error) {
        console.error('Error during user registration:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }


}


exports.login = async (req, res) => {
    try {

        const {username, password} = req.body;

        const user = await User.findOne({username});

        if(!user){

            return res.status(404).json({message: 'User is not found!'});
        }

        if(user.password != password){

            return res.status(401).json({message: 'Invalid Username or password'});
        }


        return res.status(200).json({message: 'Successfully login!'})
        
    } catch (error) {

        throw error
        
    }
}