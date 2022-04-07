const express = require('express');
const welcome = require('../logger/logger.js');
const sonu=require('../util/helper.js');
const trim=require('../validator/formatter.js');
const lodash= require('lodash');
const router = express.Router();

router.get('/sonu', function (req, res) {
    welcome.welcome()
    res.send('My second ever api!')
});


router.get('/test-me5', function (req, res) {
    sonu.sonu()
    sonu.printMonth()
    sonu.getBatchInfo()
    res.send('My final ever api!')
});

router.get('/test-me3', function (req, res) {
    trim.trim()
    trim.toLowerCase()
    trim.toUppercase()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    const month =["jan","feb","march","april","may","jun","july","agust","sept","oct","nov","dec"]
    console.log(lodash.chunk(month,3))

    const odd=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(odd))

const arr1 = [1,2,3,4,5,6,7];
const arr2 = [1,4,2,5,67,8];
const arr3=[5,8,6,9,0,3,4];
const arr4 = [54,76,09,89,3];
const arr5 = [34,23,12,4,7,9]
console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))



const obj = [
    ['horror','The shinning'],
    ['drama','Titanic'],
    ['thriller','shutter Island'],
    ['fantacy','pans labyrinth']
]

let a = lodash.fromPairs(obj);
console.log(a)

    res.send('My first ever api!')

});

module.exports = router;
// adding this comment for no reason