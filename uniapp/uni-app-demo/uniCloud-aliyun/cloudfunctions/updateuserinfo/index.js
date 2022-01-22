'use strict';
const { verifyToken } = require('wx-common')

exports.main = async (event, context) => {
	//event为客户端上传的参数
	const { userInfo } = event;
	const { token = '' } = userInfo;
	console.log(event)
	console.log(token)
	
	const db = uniCloud.database();
	
	const dbCmd = db.command;
	
	const payload = verifyToken(token);
	
	const userData = {
		nickName: userInfo.nickName,
		avatarUrl: userInfo.avatarUrl,
		gender: userInfo.gender,
		country: userInfo.country,
		province: userInfo.province,
		city: userInfo.city
	}
	
	await db.collection("user").where({openid: dbCmd.eq(payload.openid)}).update(userData)
	
	userData['token'] = token
	
	//返回数据给客户端
	return event
};
