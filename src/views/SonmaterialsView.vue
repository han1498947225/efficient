<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<ul>
			<li>材料名称</li>
			<li><el-input placeholder="请输入内容" class="inp"></el-input></li>
			<li><el-button icon="el-icon-search">查询</el-button></li>
			<li><el-button icon="el-icon-refresh-right">重置</el-button></li>
			<li>
				<el-button icon="el-icon-circle-plus-outline" class="xin" @click="tan">新增材料</el-button>
			</li>
		</ul>
		<!-- 表格 -->
		<el-table
			:data="tableData"
			border
			:header-cell-style="{ 'text-align': 'center' }"
			:cell-style="{ 'text-align': 'center' }"
		>
			<el-table-column prop="id" label="id"> </el-table-column>
			<el-table-column prop="name" label="材料名称"> </el-table-column>
			<el-table-column prop="address" label="材料地址"> </el-table-column>
			<el-table-column label="操作">
				<!-- <template slot-scope="scope"> -->
				<el-button class="xia">下载</el-button>
				<el-button>删除</el-button>
				<!-- </template> -->
			</el-table-column>
		</el-table>
		<div class="footer">
			<div class="right">
				<!-- 分页 -->
				<ul>
					<li><p>共20条</p></li>
					<li><el-button>上一页</el-button></li>
					<li>2/5</li>
					<li><el-button>下一页</el-button></li>
				</ul>
			</div>
		</div>
		<!-- 新增材料弹框 -->
		<el-dialog title="新增材料" :visible.sync="dialogVisible" width="40%">
			<p>材料名称 <el-input class="inp"></el-input></p>
			<p class="bb">
				材料地址
				<el-upload
					class="upload-demo"
					action="https://jsonplaceholder.typicode.com/posts/"
					:on-preview="handlePreview"
					:on-remove="handleRemove"
					:before-remove="beforeRemove"
					multiple
					:limit="3"
					:on-exceed="handleExceed"
					:file-list="fileList"
				>
					<el-button size="small" type="primary" class="sahng">上传材料</el-button>
				</el-upload>
			</p>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			tableData: [
				{
					id: '1',
					name: '1',
					address: '1'
				}
			],
			dialogVisible: false, //弹框状态
			fileList: []
		}
	},
	//过滤器
	filters: {},
	created() {},
	//计算属性
	computed: {},
	mounted() {},
	methods: {
		// 新增按钮
		tan() {
			this.dialogVisible = true //弹框状态
		},
		// 上传文件属性
		handleRemove(file, fileList) {
			console.log(file, fileList)
		},
		handlePreview(file) {
			console.log(file)
		},
		handleExceed(files, fileList) {
			this.$message.warning(
				`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`
			)
		},
		beforeRemove(file) {
			return this.$confirm(`确定移除 ${file.name}？`)
		}
	}
}
</script>
<style scoped lang="scss">
.inp {
	width: 300px;
	margin-left: 30px;
}
ul {
	height: 40px;
	display: flex;
	line-height: 40px;
	margin-bottom: 40px;
	li {
		margin-right: 15px;
	}
}
.xin {
	background-color: #c2c2fb;
	color: #fff;
}
.footer {
	margin-top: 20px;
	.right {
		float: right;
		ul {
			height: 40px;
			line-height: 40px;
			display: flex;
			li {
				margin-left: 27px;
			}
		}
	}
}
.bb {
	display: flex;
	margin-top: 20px;
}
.sahng {
	margin-left: 30px;
}
</style>
