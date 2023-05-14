// const mongoose = require('mongoose')
// mongoose.set('strictQuery', false)

// const connectionString = 'mongodb://localhost/data'



// mongoose.connect(connectionString).then(() => console.log('CONNECTED TO DB..'))
// .catch((err) => console.log(err))

// mongoose.set('strictQuery', false)
// mongoose.connect('mongodb://localhost/movies');




//    OR

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)


mongoose.connect('mongodb://localhost/data').then(() => console.log('CONNECTED TO DB..'))
.catch((err) => console.log(err))

// mongoose.set('strictQuery', false)
// mongoose.connect('mongodb://localhost/movies');

