'use strict';

const { appId, appSecret, getToken } = require('wx-common');

exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event: ', event)
	
	// jscode2session
	const {code} = event;
	
	const db = uniCloud.database();
	
	const dbm = db.command;
	
	const res = await uniCloud.httpclient.request(
		`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`,
		{
			dataType: 'json'
		}
	)
	
	const { openid, session_key } = res.data;
	
	const token = getToken(openid)
	
	const userData = {
		openid: openid,
		nickName: '微信用户',
		avatarUrl: ''
	}
	
	// await db.collection("user").add(userData)
	
	userData['token'] = token;
	//返回数据给客户端
	return userData
};
