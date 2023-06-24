var express = require('express')
var router = express.Router();

router.get('/' ,(req , res) => {
    res.send('GET route initialized')
})
router.post('/', (req , res)=>{
    res.send('POST route initialized')
})

module.exports =router;