<template>
	<div>
		<!-- 里面是要全屏的内容 -->
		<fullscreen :fullscreen.sync="fullscreen">
			<el-container>
				<el-aside :width="isCollapse ? '52px' : '200px'">
					<!-- 侧边栏组件 -->
					<sidebar-view :isCollapse="isCollapse"></sidebar-view>
				</el-aside>
				<el-container>
					<el-header>
						<!-- 头部组件 -->
						<head-view @toggle="toggle" @change="change"></head-view>
					</el-header>
					<el-main>
						<!-- 路由容器 -->
						<router-view></router-view>
					</el-main>
				</el-container> </el-container
		></fullscreen>
	</div>
</template>

<script>
import HeadView from '../components/HeadView.vue'
import SidebarView from '../components/SidebarView.vue'
export default {
	components: { HeadView, SidebarView },
	data() {
		return {
			fullscreen: false,
			isCollapse: false
		}
	},
	created() {},
	mounted() {},
	methods: {
		change() {
			this.isCollapse = !this.isCollapse
		},
		toggle() {
			this.fullscreen = !this.fullscreen
		}
	}
}
</script>
<style scoped lang="scss">
.el-header,
.el-footer {
	background-color: #ffffff;
	color: #333;
	line-height: 60px;
	border-bottom: 1px solid #ccc;
}

.el-aside {
	background-color: #7aabf6;
	color: #fff;
	height: 100vh;
}

.el-main {
	background-color: #ffffff;
	color: #666;
	height: calc(100vh - 60px);
}
</style>
