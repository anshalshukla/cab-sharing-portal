const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://db:27017/cab-sharing-portal", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});