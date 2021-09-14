<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<view class="title">{{ userInfo.nickName }}</view>
			<button @click="getUserInfo">微信授权</button>
		</view>
	</view>
</template>

<script>
	import {
		call
	} from '../../common/cloudApi.js'
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		async onLoad(options) {
			uni.login({
				provider: "weixin",
				success: (res) => {
					const code = res.code; // 页面加载完成 利用 wx.login 获取用户登录凭证
					call({
						name: 'login',
						data: {
							code: code
						},
						success: (res) => {
							this.userInfo = res.result
						},
						fail: (res)=>{
							console.log(res)
						}
					})
				}
			})
		},
		methods: {
			getUserInfo() {
				console.log('getUserInfo');
				uni.getUserProfile({
					desc: '允许当前小程序获取你的微信信息',
					success: (res) => {
						this.userInfo = JSON.parse(res.rawData);
						call({
							name: 'updateuserinfo',
							data: this.userInfo
						})
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
