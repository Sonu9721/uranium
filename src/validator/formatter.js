let text = "       functionUp!        ";
let result = text.trim();
let trim=function(){
    console.log(text.trim())
}

let text1 = "HELLO WORLD!";
let result1 = text1.toLocaleLowerCase();
let toLowerCase=function(){
    console.log(text1.toLocaleLowerCase())
}

let text2 = "i am a greatest person ever born on this planet!";
let result2 = text2.toLocaleUpperCase();
let toUppercase=function(){
    console.log(text2.toLocaleUpperCase())
}



module.exports.trim=trim
module.exports.toLowerCase=toLowerCase
module.exports.toUppercase=toUppercase