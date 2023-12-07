const express = require('express')
const cors = require("cors")
const port = 3000;
const app = express();

app.use("/ruta1",(req,res)=>{
    res.json({mesage:"soy una respuesta"})
});

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/api", require('./routes/index'))
app.use(cors())

app.listen(3000,(err) =>{
    if(err)console.log("an error ocurred")
    console.log(`Server running on port: ${port}`)
});