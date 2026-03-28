const adminModel = require('../models/adminModel')
const { responseReture } = require('../Utilities/response')
const bcrypt = require('bcrypt')

class authControllers{
    admin_login = async(req,res) => {
        const {email,password} = req.body
   
        try {
            console.log('email = ' + email)
            const admin = await adminModel.findOne({email}).select('+password')
            //console.log(admin)
            if(admin) {
                const match = await bcrypt.compare(password, admin.password)
                console.log(match)
            } else {
                responseReture(res,500,{error: "Email not found"})
            }
        } catch (error) {
            responseReture(res,500,{error: error.message})
        }
    }
}

module.exports = new authControllers()