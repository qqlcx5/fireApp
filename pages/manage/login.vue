<template>
	<view class="page">
		<view class="banner">
			<image src="../../static/login.png" />
		</view>
		<view class="list">
			<view class="item  ">
				<text class="gIcon mgl30 mgr20">&#xe615;</text>
				<input type="text" class="item-name" placeholder="请输入账号" v-model="username">
			</view>
			<view class="item  ">
				<text class="gIcon mgl30 mgr20">&#xe640;</text>
				<input type="text" class="item-name" password="true" v-model="password" placeholder="请输入密码">
			</view>
		</view>
		<view class="keep">
			<view class="btn" @tap="bindlogin">
				登录
			</view>
		</view>

	</view>

</template>
<script>
	import validate from '../../common/validate.js';
	import common from '../../common/common.js';
	import {
		mapMutations
	} from 'vuex';

	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},

		methods: {
			...mapMutations(['login']),
			goback: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			bindlogin: function() {
				if (!validate.validateUsername(this.username)) {
					uni.showToast({
						icon: 'none',
						title: '账号必须为6-15位，字母和数字组合'
					});
					return;
				}
				if (!validate.validateUsername(this.password)) {
					uni.showToast({
						icon: 'none',
						title: '密码必须为6-15位，字母和数字组合'
					});
					return;
				}

				let data = {
					'username': this.username,
					'password': this.password
				};
				var that = this;
				uni.request({
					url: common.hosturl + "login/dologin.html",
					method: "post",
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					data: data,
					success: function(res) {
						if (res.data.code == 0) {
							let regdata = {
								token: res.data.token
							};
							that.toMain(regdata);
						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.msg
							});

						}

					},
					fail: function() {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					}

				})
			},
			toMain: function(user) {
				this.login(user);
				uni.showToast({
					title: '登录成功',
					success: function() {
						uni.reLaunch({
							url: "../../pages/manage/manage"
						});
					}
				});

			}
		}
	}
</script>
<style>
	.page {
		height: 100vh;
		width: 750px;
		background-color: #fff;
	}

	.banner {
		width: 750px;
		height: 386px;
		overflow: hidden;
	}

	.banner image {
		width: 100%;
		height: 100%;
	}

	.list {
		min-height: 110px;
		width: 750px;
		display: flex;
		flex-direction: column;
		margin-top: 30px;
	}

	.item {
		width: 750px;
		height: 110px;
		display: flex;
		align-items: center;
		font-size: 32px;
		color: #6c6c6c;
		border-bottom: solid 2px #e6e6e6;
	}

	.item-name {
		flex: 1;
	}

	.keep {
		width: 750px;
		min-height: 100px;
		display: flex;
		justify-content: center;
		margin-top: 80px;
	}
</style>
