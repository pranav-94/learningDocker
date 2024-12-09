const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('healthy server')
})

app.listen(3000)