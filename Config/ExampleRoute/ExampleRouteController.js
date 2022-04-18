//Declaração da arquitetura
var express = require('express')
var router = express.Router()

//Actions
const ReturnLoremIpsum = require('./Actions/ReturnLoremIpsum')
const returnLoremIpsum = new ReturnLoremIpsum()

//Rotas
router.get('/lorem-ipsum', (req, res) => {
    let loremIpsum = returnLoremIpsum.returnLoremIpsum()
    res.json({ loremIpsum })
})

router.post('/lorem-ipsum', (req, res) => {
    let loremIpsum = req.body
    res.json({ loremIpsum })
})



module.exports = router