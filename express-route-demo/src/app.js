const express = require('express')
const app = express()

/*
1.通过 请求类型
*/
app.get('/routeDemo',(req,res)=>{
    res.json({
        routeDemo:"get-test-routeDemo"
    })
})

app.post('/routeDemo',(req,res)=>{
    res.json({
        routeDemo:"post-test-routeDemo"
    })
})

/*
2.通过uri
*/
app.get('/user/byname',(req,res)=>{
    let {name} = req.query;
    res.json({
        userName:name
    })
})

app.get('/user/byid',(req,res)=>{
    let {id} = req.query;
    res.json({
        userId:id
    })
})

/**
 * 无论通过什么请求方式，都可以得到响应，使用app.all
 */
app.all('/all',(req,res)=>{
   res.json({
       methods:"all"
   })
})

/**
 * 无论客户端使用 任何uri，服务都可以响应
 */
// app.all('*',(req,res)=>{
//     res.json({
//         anyThing:"all*"
//     })
//  })

 /**
  * 使用app.use(本来是做中间件使用)，但是也可以做路由使用，路由本身也是一个中间件的一种
  */

//  app.use('/useMid',(req,res)=>{
//     res.json({
//        message:"middleUseRoute",
//        methods:req.method
//     })
// })

//  app.use((req,res)=>{
//      res.json({
//         message:"middleUseRoute",
//         methods:req.method,
//         uri:req.path
//      })
//  })

 /**
  * 路由的拆分
 */
//注册路由
const memberRouter = require('./member.router')

const  skuRouter = require('./sku.router')
app.use('/member',memberRouter) //跟一个路由的根，前缀，类似命名空间的概念
app.use('/sku',skuRouter)

app.listen(3000,()=>{
    console.log("服务启动成功")
})