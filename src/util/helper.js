


let currentdate = new Date(); 
let printDate=function(){
     console.log(new Date())
}

// let currentMonth = moment(new Date).format("MMMM YYYY");
// let printMonth =function(){
//      console.log(moment(new Date).format("MMMM YYYY"))
// }

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];
let printMonth=function(){
    console.log(month[d.getMonth()])
}
    
let getBatchInfo=function(){
    console.log('Uranium, W3D3, the topic for today is Nodejs module system')
}

module.exports.sonu=printDate
 module.exports.printMonth =printMonth
 module.exports.getBatchInfo=getBatchInfo