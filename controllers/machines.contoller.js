const express=require("express")
const machine=express.Router()
const machineArray=require("../models/machine.model")


machine.get("/equipment", (req,res)=>{


res.json(machineArray)

})

module.exports=machine