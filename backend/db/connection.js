const mongoose = require('mongoose');
mongoose.Promise = Promise

let mongoURI = ''
if (process.env.NODE_ENV === 'production') {
    mongoURI = process.env.DB_URL
} else {
    mongoURI = "mongodb://localhost/foodie"
}

mongoose.connect(mongoURI, {useNewUrlParser: true})
    .then(instance => {
        console.log(`connected to db: ${instance.connections[0].name}`)
    }).catch(error => {
        console.log('connection failed', error)
    })

module.exports = mongoose

// heroku config:set DB_URL="mongodb+srv://dbadmin:dbadmin@cluster0-eupfx.mongodb.net/test?retryWrites=true&w=majority"
// 