<template>
	<div id="app">
		<!-- 路由容器 -->
		<router-view />
	</div>
</template>

<style lang="scss">
// 通用样式
* {
	margin: 0;
	padding: 0;
	list-style: none;
	box-sizing: border-box;
}
.login-box {
	// 高亮input边框
	.el-input__inner {
		border-radius: 15px;
	}
	.el-input__inner:focus {
		border-color: #d9bffb;
	}
	// 高亮button边框
	.el-button:focus,
	.el-button:hover {
		background-color: #d9bffb;
		border-color: #d9bffb;
	}
	.el-input__inner:focus {
		border-color: #d9bffb;
	}
}
// 侧边栏下箭头
.el-menu {
	i {
		color: #fff !important;
	}
	.el-icon-arrow-down:before {
		color: #fff !important;
	}
	.el-menu-item.is-active {
		background-color: #f4c438 !important;
	}
}
</style>
