<!-- eslint-disable vue/no-mutating-props -->
<template>
	<div>
		<!-- 修改密码对话框 -->
		<el-dialog title="修改密码" :visible.sync="dialogVisible" width="30%">
			<el-form
				:model="ruleForm"
				status-icon
				:rules="rules"
				ref="ruleForm"
				label-width="100px"
				class="demo-ruleForm"
				style="overflow: hidden"
			>
				<el-form-item label="用户名" prop="account">
					<el-input v-model.number="ruleForm.account"></el-input>
				</el-form-item>
				<el-form-item label="新密码" prop="password">
					<el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="再次输入" prop="password2">
					<el-input type="password" v-model="ruleForm.password2" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<!-- 按钮 -->
					<el-button class="confirm" @click="submitForm('ruleForm')">确认</el-button>
					<el-button @click="resetForm('ruleForm')">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props: ['dialogVisible'],
	components: {},
	data() {
		// 用户名
		var checkAccount = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('用户名不能为空'))
			} else {
				callback()
			}
		}
		// 新密码
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'))
			} else {
				if (this.ruleForm.checkPass !== '') {
					this.$refs.ruleForm.validateField('password2')
				}
				callback()
			}
		}
		// 再次输入
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'))
			} else if (value !== this.ruleForm.password) {
				callback(new Error('两次输入密码不一致!'))
			} else {
				callback()
			}
		}
		return {
			// 表单数据
			ruleForm: {
				password: '',
				checkPass: '',
				account: ''
			},
			// 正则
			rules: {
				password: [{ validator: validatePass, trigger: 'blur' }],
				password2: [{ validator: validatePass2, trigger: 'blur' }],
				account: [{ validator: checkAccount, trigger: 'blur' }]
			}
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 确定
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					// 改对话框状态
					this.$emit('submit')
					// 修改密码接口
					this.$http.post('/effect/user/retrieve/', this.ruleForm).then((res) => {
						// console.log(res)
						if (res.data.status == 200) {
							this.$message({
								message: res.data.msg,
								type: 'success'
							})
						}
					})
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		// 清空
		resetForm(formName) {
			// 改对话框状态
			this.$emit('submit')
			this.$refs[formName].resetFields()
		}
	}
}
</script>
<style scoped lang="scss">
.confirm {
	float: right;
	background-color: #b886f8;
	color: white;
}
</style>
