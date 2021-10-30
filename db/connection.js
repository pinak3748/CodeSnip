const mongoose = require('mongoose');

const db = process.env.DATABASE

mongoose.connect(db).then(() => {
    console.log('connection succesful');
}).catch((err) => console.log(err));
