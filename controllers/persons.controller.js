const express=require('express')
const person=express.Router()
const personArray=require("../models/person.model")

person.get("/people",(req,res)=>{


    res.json(personArray)
})

module.exports=person