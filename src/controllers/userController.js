const BookModel= require("../models/userModel")

const createNewBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
}

module.exports.createNewBook= createNewBook
module.exports.getBookData= getBookData