<template>
	<div>
		<!-- logo标题 -->
		<div class="title">
			<img src="../assets/logo.png" alt="" />
			<p>OA管理系</p>
		</div>
		<!-- 侧边栏 -->
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			background-color="#7aabf6"
			text-color="#fff"
			active-text-color="#fff"
			:collapse="isCollapse"
			router
		>
			<!-- 首页 -->
			<el-menu-item index="/index">
				<i class="el-icon-s-home"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<!-- 基本配置 -->
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-setting"></i>
					<span>基础配置</span>
				</template>
				<el-menu-item index="/user">用户管理</el-menu-item>
				<el-menu-item index="/role">角色管理</el-menu-item>
				<el-menu-item index="/menu">菜单管理</el-menu-item>
				<el-menu-item index="/rank">职级管理</el-menu-item>
				<el-menu-item index="/job">岗位管理</el-menu-item>
				<el-menu-item index="/operationlog">操作日志</el-menu-item>
				<el-menu-item index="/Loginlog">登录日志</el-menu-item>
				<el-menu-item index="/department">部门管理</el-menu-item>
			</el-submenu>
			<!-- 配置工作流 -->
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-tickets"></i>
					<span>配置工作流</span>
				</template>
				<el-menu-item index="/approvalprocess">配置审批流程</el-menu-item>
				<el-menu-item index="/approvaltype">配置审批类型</el-menu-item>
			</el-submenu>
			<!-- 材料管理 -->
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-bank-card"></i>
					<span>材料管理</span>
				</template>
				<el-menu-item index="/sonmaterials">材料管理</el-menu-item>
			</el-submenu>
			<!-- 企业通讯  -->
			<el-submenu index="4">
				<template slot="title">
					<i class="el-icon-phone-outline"></i>
					<span>企业通讯</span>
				</template>
				<el-menu-item index="/mail">邮件处理</el-menu-item>
				<el-menu-item index="/payslip">工资条录入</el-menu-item>
			</el-submenu>
			<!-- OA审批  -->
			<el-submenu index="6">
				<template slot="title">
					<i class="el-icon-user"></i>
					<span>OA审批</span>
				</template>
				<el-menu-item index="/agency">待办事项</el-menu-item>
				<el-menu-item index="/done">已办事项</el-menu-item>
				<el-menu-item index="/launch">我发起的</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
export default {
	props: ['isCollapse'],
	components: {},
	data() {
		return {
			menuData: [] //menu数据
		}
	},
	created() {
		// 请求menu数据
		this.$http.get('/effect/home/menus/').then((res) => {
			// console.log(res.data.menu.data)
			this.menuData = res.data.menu.data
		})
	},
	mounted() {},
	methods: {}
}
</script>
<style scoped lang="scss">
//  title
.title {
	display: flex;
	padding: 15px;
	text-align: center;
	img {
		width: 36px;
		height: 36px;
	}
	p {
		width: 101px;
		height: 31px;
		font-size: 18px;
		font-family: SourceHanSansSC-regular;
		margin-top: 7px;
	}
}
.el-submenu__icon-arrow el-icon-arrow-down,
.icon {
	color: #fff !important;
}
</style>
