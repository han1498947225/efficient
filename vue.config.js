const { defineConfig } = require('@vue/cli-service')
// console.log(process)
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	productionSourceMap: false,
	publicPath: './',
	outputDir: 'dist',
	assetsDir: 'static',
	devServer: {
		port: 8888,
		https: false,
		open: false,
		proxy: {
			[process.env.VUE_APP_BASE_API]: {
				target: process.env.VUE_APP_MOCK_ENABLE === 'true' ? 'http://localhost:9999' : process.env.VUE_APP_CONSOLE_URL,
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.VUE_APP_BASE_API]: ''
				}
			}
		}
	}
})
