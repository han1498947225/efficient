import axios from 'axios'
import MessageBox from 'element-ui'
import { getToken } from './auth'
const http = axios.create({
	baseURL: '/',
	timeout: 3000,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json;charset=utf-8'
	}
})

// 请求拦截
http.interceptors.request.use(
	(config) => {
		config.headers.token = getToken()
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

// 响应拦截
http.interceptors.response.use(
	(res) => {
		return res
	},
	(error) => {
		let title = ''
		let message = ''
		if (error && error.response) {
			// eslint-disable-next-line no-unused-vars
			message = error.response.data.message
			switch (error.response.status) {
				case 400:
					title = '错误请求'
					break
				case 401:
					title = '资源未授权'
					break
				case 403:
					title = '禁止访问'
					break
				case 404:
					title = '未找到所请求的资源'
					break
				case 405:
					title = '不允许使用该方法'
					break
				case 408:
					title = '请求超时'
					break
				case 500:
					title = '内部服务区错误'
					break
				case 501:
					title = '未实现'
					break
				case 502:
					title = '网关错误'
					break
				case 503:
					title = '服务不可以'
					break
				case 504:
					title = '网关超时'
					break
				case 505:
					title = 'HTTP版本不受支持'
					break
				default:
					// eslint-disable-next-line no-unused-vars
					title = error.response.status
			}
		} else {
			return MessageBox.alert('请联系系统管理员，或稍后再试！', '未知错误', {
				type: 'error'
			})
		}
	}
)
export default http
