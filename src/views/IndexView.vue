<template>
	<div>
		<!-- 头部 -->
		<div class="top">
			<!-- 待办事项  -->
			<div class="todo">
				<ul>
					<li><span class="title">待办事项</span><span class="SeeMore">查看更多</span></li>
					<li><span class="item"> [待办事项] 您申请的报销还未审批,请及时查看,防止过期 </span><span>2020年8月</span></li>
					<li><span class="item"> [待办事项] 您申请的报销还未审批,请及时查看,防止过期 </span><span>2020年8月</span></li>
					<li><span class="item"> [待办事项] 您申请的报销还未审批,请及时查看,防止过期 </span><span>2020年8月</span></li>
					<p>暂无待办事项</p>
				</ul>
			</div>
			<!-- 日历 -->
			<div class="calendar">
				<el-date-picker v-model="calendarvalue" type="week" format="yyyy 第 WW 周" placeholder="选择周">
				</el-date-picker>
			</div>
		</div>
		<!-- 中部 -->
		<div class="center">
			<!-- 员工数据 -->
			<div class="staffData">
				<p class="title">员工数据</p>
				<div class="item">
					<ul>
						<li style="border-right: 2px solid #ccc">
							<p>员工总人数</p>
							<p>2000人</p>
						</li>
						<li style="border-right: 2px solid #ccc">
							<p>正式员工</p>
							<p>1000人</p>
						</li>
						<li>
							<p>实习生</p>
							<p>15人</p>
						</li>
						<li style="border-right: 2px solid #ccc">
							<p>本月待入职</p>
							<p>15人</p>
						</li>
						<li style="border-right: 2px solid #ccc">
							<p>本月待离职</p>
							<p>2000人</p>
						</li>
						<li>
							<p>本月待转正</p>
							<p>3人</p>
						</li>
					</ul>
				</div>
			</div>
			<!-- 员工地区分布 -->
			<div class="EmployeeArea">
				<p class="title">员工地区分布</p>
				<div id="main"></div>
			</div>
		</div>
		<!-- 尾部 -->
		<div class="footer">
			<div class="title">员工生日</div>
			<div id="mains"></div>
		</div>
	</div>
</template>

<script>
import * as echarts from 'echarts'
export default {
	components: {},
	data() {
		return {
			// 日历
			calendarvalue: ''
		}
	},
	created() {},
	mounted() {
		// 员工地区数据
		var chartDom = document.getElementById('main')
		var myChart = echarts.init(chartDom)
		var option
		option = {
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				left: 'right',
				padding: 50
			},
			series: [
				{
					name: 'Access From',
					type: 'pie',
					radius: '80%',
					data: [
						{ value: 1048, name: '河南' },
						{ value: 735, name: '东北' },
						{ value: 580, name: '山西' },
						{ value: 484, name: '河北' },
						{ value: 300, name: '内蒙' }
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					},
					center: ['28%', '50%']
				}
			]
		}
		option && myChart.setOption(option)
		// 员工生日
		var chartDoms = document.getElementById('mains')
		var myCharts = echarts.init(chartDoms)
		var options
		options = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [
				{
					type: 'category',
					data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					axisTick: {
						alignWithLabel: true
					}
				}
			],
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					name: 'Direct',
					type: 'bar',
					barWidth: '50%',
					data: [120, 200, 150, 80, 70, 110, 130, 30, 80, 60, 80, 70],
					itemStyle: {
						color: '#cca2fc'
					}
				}
			]
		}
		options && myCharts.setOption(options)
	},
	methods: {}
}
</script>
<style scoped lang="scss">
// 头部
.top {
	width: 100%;
	display: flex;
	justify-content: space-between;
	// 待办事项
	.todo {
		width: 65%;
		border: 1px solid #ccc;
		ul {
			li {
				display: flex;
				justify-content: space-between;
				padding: 10px 25px;
				border-bottom: 1px solid #ccc;
				.title {
					font-size: 20px;
					color: #333;
				}
				.SeeMore {
					color: #458bf3;
				}
			}
			p {
				text-align: center;
				padding: 10px 25px;
			}
		}
	}
	// 日历
	.calendar {
		width: 30%;
	}
}
// 中部
.center {
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
	height: 280px;
	.title {
		font-size: 20px;
		color: #333;
		padding: 10px 25px;
		border-bottom: 1px solid #ccc;
	}
	// 员工数据
	.staffData {
		width: 48%;
		border: 1px solid #ccc;
		.item {
			padding: 25px;
			ul {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				li {
					width: 33%;
					margin: 10px 0;
					text-align: center;
					p {
						margin: 10px 0;
					}
				}
			}
		}
	}
	// 员工地区分布
	.EmployeeArea {
		width: 48%;
		border: 1px solid #ccc;
		#main {
			width: 100%;
			height: 82%;
		}
	}
}
// 尾部
.footer {
	width: 100%;
	height: 400px;
	border: 1px solid #ccc;
	.title {
		font-size: 20px;
		color: #333;
		padding: 10px 25px;
	}
	#mains {
		width: 100%;
		height: 350px;
	}
}
</style>
