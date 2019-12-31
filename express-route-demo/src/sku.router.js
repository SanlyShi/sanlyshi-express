const express = require('express')
const router = express.Router()

router.get('/list',(req,res)=>{
   res.json({
       list:[
           {
               name:"yanli",
               age:'27'
           }
       ]
   })
})

module.exports = router

