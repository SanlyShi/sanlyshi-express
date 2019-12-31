const express = require('express')
const router = express.Router()

router.get('/list',(req,res)=>{
   res.json({
       list:[
           {
               name:"sanly",
               age:'26'
           }
       ]
   })
})

module.exports = router

