<template>
	<!-- 登录页面 -->
	<div class="login-box">
		<div class="login-item">
			<!-- 登录标题 -->
			<p>OA系统登录</p>
			<!-- 登录表单 -->
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<!-- 用户名 -->
				<el-form-item prop="account">
					<el-input
						class="login-input"
						v-model="ruleForm.account"
						placeholder="请输入用户名"
						prefix-icon="el-icon-user-solid"
					></el-input>
				</el-form-item>
				<!-- 密码 -->
				<el-form-item prop="password">
					<el-input
						class="login-input"
						v-model="ruleForm.password"
						placeholder="请输入密码"
						prefix-icon="el-icon-lock"
					></el-input>
				</el-form-item>
				<!-- 验证码  -->
				<el-form-item prop="img" class="code-item">
					<el-input class="login-input code" v-model="ruleForm.img" placeholder="验证码"></el-input>
					<p class="codeImg" @click="getCode">验证码图片</p>
				</el-form-item>
				<!-- 登录按钮 -->
				<el-form-item>
					<el-button class="login-btn" @click="submitForm('ruleForm')">登录</el-button>
				</el-form-item>
			</el-form>
			<!-- 忘记密码 -->
			<p class="password" @click="dialogVisible = true">忘记密码?</p>
		</div>
		<!-- 登录底部 -->
		<p class="footer-p">@2022美团版权所有京ICP证070791号京公网安备11010502025545号</p>
		<!-- 对话框组件 -->
		<Dialog :dialogVisible="dialogVisible" @submit="submit"></Dialog>
	</div>
</template>

<script>
import { v4 as uuid4 } from 'uuid'
import Dialog from '../components/DialogView'
export default {
	components: { Dialog },
	data() {
		// 自定义正则
		// 用户名
		var checkAccount = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('用户名不能为空'))
			} else {
				callback()
			}
		}
		// 密码
		var validatepassword = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('密码不能为空'))
			} else {
				callback()
			}
		}
		// 验证码
		var validateimg = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('验证码不能为空'))
			} else {
				callback()
			}
		}
		return {
			// 记住密码对话框
			dialogVisible: false,
			// 登录表单数据
			ruleForm: {
				account: '', //用户名
				password: '', //密码
				img: '', //验证码
				unid: null //unid
			},
			// 登录校验
			// 正则
			rules: {
				password: [{ validator: validatepassword, trigger: 'blur' }],
				img: [{ validator: validateimg, trigger: 'blur' }],
				account: [{ validator: checkAccount, trigger: 'blur' }]
			}
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 点击获取验证码图片
		getCode() {
			// 获取unid
			this.ruleForm.unid = uuid4()
		},
		// 修改对话框状态
		submit() {
			this.dialogVisible = false
		},
		// 点击登录
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					// 登录接口
					this.$http.post('/effect/user/login/', this.ruleForm).then((res) => {
						// console.log(res)
						if (res.data.status == 200) {
							// 成功提示
							this.$message({
								message: res.data.msg,
								type: 'success'
							})
						}
					})
					// 跳转首页
					this.$router.push('/public')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		}
	}
}
</script>

<style scoped lang="scss">
// 登录背景图片
.login-box {
	overflow: hidden;
	width: 100vw;
	height: 100vh;
	background: url('../assets/login-background.png');
	background-size: 100% 100%;
	// 登录模块
	.login-item {
		position: relative;
		width: 420px;
		height: 360px;
		margin: 180px auto;
		background-color: #fff;
		text-align: center;
		padding: 10px 40px;
		border-radius: 25px;
		// 记住密码
		.password {
			position: absolute;
			right: 46px;
			top: 176px;
			font-size: 12px;
			color: #f3c437;
		}
		// 标题
		p {
			font-size: 24px;
			margin: 20px 0;
		}
		// 登录input
		.login-input {
			border-radius: 20px !important;
			margin: 2px 0;
		}
		// 登录按钮
		.login-btn {
			width: 85%;
			background-color: #d3bef6;
			color: #fff;
			border-radius: 10px;
		}
		// 验证码
		.code {
			width: 200px;
			text-align: left;
			float: left;
		}
		// 验证码图片
		.codeImg {
			width: 105px;
			height: 40px;
			border-radius: 17px;
			float: right;
			font-size: 14px;
			color: #ccc;
			margin: 0;
			border: 1px solid #dcdfe6;
			line-height: 40px;
			text-align: center;
		}
	}
	// 尾部内容
	.footer-p {
		position: fixed;
		bottom: 60px;
		left: 545px;
		color: #aaa;
		font-size: 14px;
	}
}
</style>
