import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
	// 登录
	{
		path: '/',
		name: 'login',
		component: () => import('../views/LoginView.vue')
	},
	// 公共部分
	{
		path: '/public',
		name: 'public',
		component: () => import('../components/PublicView.vue'),
		redirect: 'index',
		children: [
			// 主页
			{
				path: '/index',
				name: 'index',
				component: () => import('../views/IndexView.vue')
			},
			// 用户管理
			{
				path: '/user',
				name: 'user',
				component: () => import('../views/UserView.vue')
			},
			// 角色管理
			{
				path: '/role',
				name: 'role',
				component: () => import('../views/RoleView.vue')
			},
			// 邮件处理
			{
				path: '/mail',
				name: 'mail',
				component: () => import('../views/MailView.vue')
			},
			// 权限管理
			{
				path: '/power',
				name: 'power',
				component: () => import('../views/PowerView.vue')
			},
			// 菜单管理
			{
				path: '/menu',
				name: 'menu',
				component: () => import('../views/MenuView.vue')
			},
			// 部门管理
			{
				path: '/department',
				name: 'department',
				component: () => import('../views/DepartmentView.vue')
			},
			// 待办事项
			{
				path: '/agency',
				name: 'agency',
				component: () => import('../views/AgencyView.vue')
			},
			// 职级岗位
			{
				path: '/rank',
				name: 'rank',
				component: () => import('../views/RankView.vue')
			},
			// 岗位管理
			{
				path: '/job',
				name: 'job',
				component: () => import('../views/JobView.vue')
			},
			// 已办事项
			{
				path: '/done',
				name: 'done',
				component: () => import('../views/DoneView.vue')
			},
			// 操作日志
			{
				path: '/operationlog',
				name: 'operationlog',
				component: () => import('../views/OperationlogView.vue')
			},
			// 登录日志
			{
				path: '/loginlog',
				name: 'loginlog',
				component: () => import('../views/LoginlogView.vue')
			},
			// 工资条录入
			{
				path: '/payslip',
				name: 'payslip',
				component: () => import('../views/PayslipvView.vue')
			},
			// 材料管理
			{
				path: '/sonmaterials',
				name: 'sonmaterials',
				component: () => import('../views/SonmaterialsView.vue')
			},
			// 配置审批流程
			{
				path: '/approvalprocess',
				name: 'approvalprocess',
				component: () => import('../views/ApprovalprocessView.vue')
			},
			// 配置审批类型
			{
				path: '/approvaltype',
				name: 'approvaltype',
				component: () => import('../views/ApprovaltypeView.vue')
			},
			// 我发起的
			{
				path: '/launch',
				name: 'Launch',
				component: () => import('../views/LaunchView.vue')
			}
		]
	}
]

const router = new VueRouter({
	routes
})

export default router
