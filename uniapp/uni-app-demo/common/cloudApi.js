let token;

function call(option) {
	console.log('uniCloud:', option)
	return new Promise((resolve, reject) => {
		if (!option.data) option.data = {};
		if (token) {
			option.data.token = token;
		}
		uni.showLoading();
		uniCloud.callFunction({
			name: option.name,
			data: option.data,
			success: (res) => {
				console.log('uniCloud:', res.result)
				if (res.result.token) token = res.result.token
				if (option.success) option.success(res);
				resolve(res)
			},
			fail: (res) => {
				console.log('uniCloud:', res)
				if (option.fail) option.fail(res);
				reject()
			},
			complete: ()=>{
				uni.hideLoading();
				if (option.complete) option.complete(res);
			}
		})
	})
}

module.exports = {
	call
}
