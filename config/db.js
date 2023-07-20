const mongoose = require('mongoose');
const link = "mongodb+srv://Maksos:rntpRLgtE5D0kYB7@cluster0.xgh3vcl.mongodb.net/?retryWrites=true&w=majority";

const connectDb = () => {
    return mongoose.connect(link, {useNewUrlParser : true});
}

module.exports = connectDb;