<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @click="goback()">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				用户信息
			</view>
			<view class="header-right">
				<text class="icon">&#xe622;</text>
			</view>
		</view>
		<view class="list">
			<view class="item-user">
				<view class="item-user-border">
					<text class="item-user-name">头像</text>
					<image src="../../static/user.jpeg" class="item-user-img" />
					<text class="gIcon">&#xe661;</text>
				</view>

			</view>
			<view class="item">
				<view class="border">
					<text class="item-name">姓名</text>
					<input class="item-input" type="text" placeholder="李志强">
				</view>
			</view>
			<view class="item">
				<view class="border">
					<picker class="picker-item" mode="selector" :range="array" @change="textChange">
						<view><text class="picker-name">性别</text>{{arrayName}}</view>
					</picker>
				</view>
			</view>
			<view class="item">
				<view class="border">
					<text class="item-name">职务</text>
					<input class="item-input" type="text" placeholder="消防一队队长">

				</view>
			</view>
			<view class="item">
				<view class="border">
					<text class="item-name">手机</text>
					<input class="item-input" type="text" placeholder="15965845217">
				</view>
			</view>
		</view>
		<view class="account">
			<view class="btn mgt40">
				保存
			</view>
		</view>
	</view>

</template>
<script>
	export default {
		data() {
			return {
				array: ['男', '女'],
				textValue: 0,
				arrayName: ''
			}
		},
		methods: {
			goback: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			textChange(evt) {
				console.log(evt.detail.value)
				this.textValue = evt.detail.value;
				this.arrayName = evt.detail.value > 0 ? '女' : '男'
			},
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
