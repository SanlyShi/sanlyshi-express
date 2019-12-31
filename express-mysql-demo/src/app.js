const express = require('express')
const app = express()

const models = require('../models') //模型对象

//models.User
//models.Sequlize
//models.sequlize
app.get('/create',async (req,res)=>{
    let {name} = req.query
    //promise user-->sequlize 对象
    let user = await models.User.create({
        name
    })
    console.log(user)
    res.json({
        message:"user 创建成功",
        user
    })
})

app.get('/list',async (req,res)=>{
   let list = await models.User.findAll()
   res.json({
       list
   })
})

app.get('/detail/:id',async (req,res)=>{
    let {id} = req.params
    let user = await models.User.findOne({
        where:{
            id
        }
    })
    res.json({
        user
    })
 })


app.listen(3000,()=>{
    console.log('express 服务启动成功')
})

// npm i sequelize -S

// npm i sequelize-cli -D

// npm install -g npx

// npx sequelize-cli init

// npx sequelize-cli model:generate --name User --attributes name:string

// npm i mysql2 -S

// npx sequelize-cli db:migrate --env=development