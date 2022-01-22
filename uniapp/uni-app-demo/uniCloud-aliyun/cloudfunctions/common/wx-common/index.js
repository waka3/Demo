const appId = "xxxx";  // 敏感信息隐藏
const appSecret = "xxxxx"; // 敏感信息隐藏

const jwt = require('jsonwebtoken')

function getToken(openid){
	return jwt.sign({ openid: openid }, appSecret, { expiresIn: 60 * 60 *24 })
}

function verifyToken(token){
	return jwt.verify(token, appSecret);
}

module.exports = {
	appId,
	appSecret,
	getToken,
	verifyToken
}
