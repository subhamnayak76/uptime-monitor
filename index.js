const express = require('express')
const app = express()
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(compression())

app.get('/api/health',(req,res) =>{
    res.json('healthy endpoint')
})
const PORT = 3000
app.listen(PORT,() =>{
    console.log('serving from port 3000')
})

