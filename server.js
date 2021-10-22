const express = require('express')
const connectDb = require('./config/db')
const cors = require('cors')
const app = express()

app.use(express.json({ extended: false }))


connectDb()
app.use(cors())

app.get('/', async (req, res) => {
    console.log("server is on the home ");
})

app.use('/getpacks', require('./routs/packs/pack'))
app.use('/getpacks',require('./routs/packs/pack'))
app.use('/packs',require('./routs/packs/pack'))
app.use('/get',require('./routs/packs/pack'))



const PORT = 5000 || process.env


app.listen(PORT, () => console.log(`server is listing on ${PORT}`))