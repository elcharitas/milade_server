const User = require('../../models/userschema');
const {Logger} = require('../../routes/index');

module.exports = async(req,res) => {
    try{
        const{id} = req.params
        const user = await User.findOne({_id: id})
        const{firstname, lastname,gender, profile_image, phonenumber,
        username, email} = req.body

        if(email == user.email){
            return res.status(409).send({status:"ERROR", message: "Email already exists"})
        } 

       else if(!user) return res.status(404).send({
            status: "ERROR",
            message: 'User not found'
        })
        else{
            await user.updateOne({
                firstname: firstname || user.firstname,
                lastname: lastname || user.lastname,
                gender: gender || user.gender,
                profile_image: profile_image || user.profile_image,
                phonenumber: phonenumber || user.phonenumber,
                username: username || user.username,
                email: email || user.email
            })
            return res.status(200).send({
                status: "OK",
                message: "User profile updated successfully"
            })
        }
    }
    catch(error){
        Logger('update_profile', error);
        return res.status(400).send({
            status: "ERROR",
            payload: error.message
        })
    }
}