const batchesModel = require("../models/batchesModel")
const developersModel = require("../models/developersModel")
//const bookModel= require("../models/bookModel")

const createBatch= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchesModel.create(batch)
    res.send({data: batchCreated})
}

const createDeveloper=async function (req,res){
    let developer=req.body
    let developerCreated = await developersModel.create(developer)
    res.send({data:developerCreated})
}

const scholarshipDevelopers=async function(req,res){
   let eligibleDeveloper=await developersModel.find({percentage:{$gte:70},gender:"female"})
   res.send({data:eligibleDeveloper})
}


const developers=async function(req,res){
    const getDetails=req.query
    const data=await developersModel.find({percentage:{$gte:getDetails.percentage}})//.select({batch:1,_id:0})
    const find= await batchesModel.find({_id:data[0].batch,program:getDetails.program})
    res.send({data:data})
}


// router.get("/developers", async function(req,res){
//     const getDetails=req.query
//     const data=await developerDetails.find({percentage:{$gte:getDetails.percentage}})//.select({batch:1,_id:0})
//     const find=await batchDetails.find({_id:data[0].batch,program:getDetails.program})
//     res.send(find )
// } )


module.exports.createBatch=createBatch
module.exports.createDeveloper=createDeveloper
module.exports.scholarshipDevelopers=scholarshipDevelopers
module.exports.developers=developers
