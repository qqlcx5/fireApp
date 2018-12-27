<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @tap="backs">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				用户信息
			</view>
			<view class="header-right">
				<!-- <text class="icon">&#xe622;</text> -->
			</view>
		</view>
		<view class="list">
			<view class="item-user">
				<view class="item-user-border">
					<text class="item-user-name">头像</text>
					<image :src="userinfo.headimg" class="item-user-img" />
				</view>

			</view>
			<view class="item">
				<view class="border">
					<text class="item-name">姓名</text>
					<text class="picker-name">{{userinfo.personname}}</text>
				</view>
			</view>
			<view class="item">
				<view class="border">
					<text class="picker-name">性别</text><text class="picker-name">{{userinfo.sex}}</text>
				</view>
			</view>
			<view class="item">
				<view class="border">
					<text class="item-name">职务</text><text class="picker-name">{{userinfo.framename}}-{{userinfo.dutiesname}}</text>
				</view>
			</view>
			<view class="item">
				<view class="border">
					<text class="item-name">手机</text>
					<text class="picker-name">{{userinfo.mobile}}</text>
				</view>
			</view>
		</view>
		<!-- <view class="account">
      <view class="btn mgt40">
        保存
      </view>
    </view >-->
	</view>

</template>
<script>
	import common from '../../common/common.js';
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				userinfo: [],
				array: ['男', '女'],
				textValue: 0,
				array2: ['消防一队队长', '消防2队队长', '消防3队队长'],
				textValue2: 0
			}
		},
		computed: {
			...mapState(['user']),
		},
		methods: {
			islogin: function() {
				if (this.user.user === null) {
					uni.redirectTo({
						url: '../../pages/manage/login'
					})
					return;
				}
			},
			textChange: function(evt) {

				this.textValue = evt.detail.value;
			},
			textChange2: function(evt) {
				this.textValue2 = evt.detail.value;
			},
			getuser: function() {
				if (this.user.user === null) {
					this.userinfo = null
					return false
				}

				let that = this;
				uni.request({
					url: common.hosturl + "user/getuserinfo.html",
					method: "POST",
					data: {
						token: this.user.user.token,
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {

						//console.log(JSON.stringify(res.data))
						if (res.data.code == 0) {

							that.userinfo = res.data.userinfo;

						} else {
							that.userinfo = null;
							return false
						}
					},
					fail: function() {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					}
				})

			}
		},
		onLoad: function() {
			this.islogin();
		},
		onShow: function() {
			this.getuser();
		}
	}
</script>
<style>
	.list {
		min-height: 200px;
		width: 710px;
		margin: 20px;
		background-color: #fff;
		display: flex;
		font-size: 28px;
		flex-direction: column;
	}

	.item-user {
		height: 140px;
		width: 710px;
		display: flex;
		padding: 0 40px;
		box-sizing: border-box;
	}

	.item-user-name {
		flex: 1;
		font-size: 32px;
		color: #666666;
	}

	.item-user-border {
		height: 140px;
		width: 710px;
		display: flex;
		align-items: center;
		border-bottom: 2px solid #eee;
	}

	.item-user-img {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		background-color: #d8d8d8;
	}

	.item {
		height: 88px;
		width: 710px;
		display: flex;
		padding: 0 40px;
		box-sizing: border-box;
	}

	.item .border {
		height: 88px;
		width: 630px;
		display: flex;
		align-items: center;
		border-bottom: 2px solid #eee;
	}

	.picker-item {
		width: 630px;
		height: 88px;
		line-height: 88px;
		font-size: 32px;
		color: #999999;
	}

	.picker-name {
		min-width: 60px;
		font-size: 32px;
		color: #666666;
		margin-right: 60px;
	}

	.item-name {
		min-width: 120px;
		font-size: 32px;
		color: #666666;
	}

	.item-input {
		flex: 1;
		text-align: center;
		height: 88px;
	}

	.account {
		width: 750px;
		min-height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
