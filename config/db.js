const mongoose = require('mongoose')
const db = 'mongodb://localhost/firework'
 const connectDb = async () =>{
    try {
        await mongoose.connect(db)
        console.log('connected to mongo');
    } catch (err) {
        console.error(err);
        process.exit(1)
    }
}

module.exports = connectDb;