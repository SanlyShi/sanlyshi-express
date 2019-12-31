const express = require('express')
const app = express()

// const userRouter = require('../router/user_router')

//中间件完整的结构
//1.是一个函数
//2.err,req,res,next-->function

// function demo_middleware(err,req,res,next){
//     //1.异常处理
//     //2.处理业务功能，然后转交控制权
//     //3.响应请求--结束响应 --> 当做路由的处理函数
// }

// //一.app级别的使用
// //app 级别的中间件
// function log_middleware(req,res,next) {
//     console.log("请求来了")
//     next()
// }
// app.use(log_middleware)
// //加载一个 static 的中间件(第一个public是类似的命名空间【虚拟的，实际不存在，路由访问的uri】，第二个static是文件实际所在目录)
// app.use('/public',express.static('static',{
//     extensions:['html','htm']
// }))

//二，路由级别的使用
// app.use('/user',userRouter)


// // 2.
// function valid_name_middleware(req,res,next){
//     let {name} =req.query
//     if( !name || name.length){
//         res.json({
//             message:"缺少name参数"
//         })
//     }else{
//         next()
//     }
// }
// // 1.
// app.all('*',valid_name_middleware)
// // 3.
// app.get('/test',(req,res)=>{
//     res.json({
//         message:req.query.name
//     })
// })


// 异常处理(tips：异常处理 一定是收口的，统一写在一个地方，异常处理相对清晰)
function demo_middleware(req,res,next) {
    // try {
        
    // } catch (error) {
    //     next(error)
    // }

    //Promise.then().catch(next)
}
app.get('/demo',(req,res)=>{
    throw new Error("测试异常功能")
    // res.json({
    //     message
    // })
})
function err_handler_middleware(err,req,res,next) {
    if(err){
        let {message} = err
        res.status(500).json({
            message:`${message || '服务器异常'}`
        })
    }else{

    }
}
app.use(err_handler_middleware)
// 404
function node_found_handler_middleware(req,res,next) {
    res.json({
        message:"api不存在"
    })
}
app.use(node_found_handler_middleware)



app.listen(3000,(req,res)=>{
    console.log("express  服务启动成功")
})