<template>
	<div class="header">
		<!-- 左边 -->
		<div class="header-left"><i class="el-icon-s-fold" @click="change"></i></div>
		<!-- 右边 -->
		<div class="header-right">
			<div class="header-icon"><span class="one">1</span><i class="el-icon-s-flag"></i></div>
			<div class="header-icon"><span class="two">1</span><i class="el-icon-message-solid"></i></div>
			<div class="header-icon"><span class="three">1</span><i class="el-icon-message"></i></div>
			<!-- 全屏 -->
			<i class="el-icon-full-screen" @click="toggle"></i>
			<!-- 用户信息 -->
			<div class="superAdmin"><i class="el-icon-user-solid"></i>超级管理员</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		toggle() {
			this.$emit('toggle')
		},
		change() {
			this.$emit('change')
		}
	}
}
</script>
<style scoped lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	.header-left {
		font-size: 25px;
		color: #cecece;
	}
	.header-right {
		height: 60px;
		display: flex;
		align-items: center;
		.header-icon {
			position: relative;
			span {
				position: absolute;
				top: 8px;
				right: 2px;
				padding: 0 4px;
				border-radius: 5px;
				text-align: center;
				line-height: 15px;
				color: #fff;
				font-size: 12px;
			}
			.one {
				background-color: #f77d6c;
			}
			.two {
				background-color: #f4c438;
			}
			.three {
				background-color: #c2c2fb;
			}
		}
		color: #cecece;
		display: flex;
		.item {
			margin: 0 10px;
		}
		.superAdmin {
			display: inline-block;
			font-size: 14px;
		}
		i {
			font-size: 23px;
			margin: 0 10px;
		}
	}
}
</style>
