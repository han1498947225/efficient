let express = require('express')
let Mock = require('mockjs')
const loginData = require('./common/login.json') //登录
const forgotLogin = require('./common/forgotLogin.json') //修改密码
const menu = require('./common/menu.json') //菜单
let app = express()

// 登录接口
app.use('/user/login/', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '登录成功',
			loginData
		})
	)
})

// 修改密码接口
app.use('/user/retrieve/', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '修改登录成功',
			forgotLogin
		})
	)
})

// 菜单
app.use('/home/menus/', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '菜单栏',
			menu
		})
	)
})

app.listen(9999, () => {
	console.log('监听接口 9999')
})
