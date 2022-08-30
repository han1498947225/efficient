import Cookis from 'js-cookie'
const tokenKey = 'Authorization'

export function getToken() {
	return Cookis.get(tokenKey)
}
export function setToken(token) {
	Cookis.set(tokenKey, token)
}
export function removeToken() {
	Cookis.remove(tokenKey)
}
