const route = require("express").Router()

route.get("/customer", (req, res)=>{
    res.json({
        id: 1,
        name:"Patricia",
        desciption: "software engineer",
        age: 42
    })
})

module.exports = route;