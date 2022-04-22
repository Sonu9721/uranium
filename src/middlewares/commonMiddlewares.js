

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    //counter
    next()
}


const isFreeAppUserMiddleware = function (req,res,next){
    //console.log(req.headers["isfreeappuser"])
   // console.log(req.headers)
     // console.log((req.headers.isfreeappuser) == 'false')
 
// if(req.headers["isfreeappuser"] !== null && ('true' == req.headers["isfreeappuser"] || 'false' == req.headers["isfreeappuser"]) ){
  
let isFreeAppUser = req.headers["isfreeappuser"]

if(isFreeAppUser != undefined && isFreeAppUser != ''){

    // req.body.isFreeAppUser = isFreeAppUser
     console.log("controle goes to to middleware to controller");
     next()
 }else{
     res.status(426).send({msg:"request is missing a mandatory header value and value must be Boolean"})
 }

}


module.exports.isFreeAppUserMiddleware = isFreeAppUserMiddleware

module.exports.mid4= mid4
