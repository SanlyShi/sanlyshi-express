const express = require("express")
const app = express()

// app.use((req,res)=>{
//     res.json({
//         name:"sanly",
//         age:"26" 
//     })
// })

app.get('/name/:id',(req,res)=>{
    let {id} = req.params
    res.json({
        room:"特房大厦",
        id:id
    })
})

// app.post('/age/:age',(req,res)=>{
//     let {age} = req.params
//     res.json({
//         name:'师胜利',
//         age:age
//     })
// })
//demo
app.listen(3000,()=>{
    console.log("express 运行成功")
})