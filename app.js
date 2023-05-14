require('./db/connect')
const express = require('express');
const router = require('./routes/router')
const notFound = require('./middleware/not-found')

const app = express();


app.use(express.json());





app.use('/api/task', router)

app.use(notFound)
 
const port = 3003;
app.listen(port, () => {
    console.log(`port successful at http://localhost:${port}...`)
});