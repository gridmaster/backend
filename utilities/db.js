const mongoose = require('mongoose');

module.exports.dbConnect = async(req, res)=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/ecommerce')
            .then(() => console.log('Connected to database.'))
            .catch((err) => console.log('Could not connect to database.', err));
        console.log("Database connected...")
    } catch(error) {
        console.log(error.message)
    }
}