<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @click="goback()">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				登录
			</view>
			<view class="header-right">
				<text class="icon">&#xe622;</text>
			</view>
		</view>
		<view class="list">
			<view class="item  ">
				<text class="gIcon mgl30 mgr20">&#xe615;</text>
				<input type="text" class="item-name" placeholder="请输入账号">
			</view>
			<view class="item  ">
				<text class="gIcon mgl30 mgr20">&#xe640;</text>
				<input type="text" class="item-name" placeholder="请输入密码">
			</view>
		</view>
		<view class="keep">
			<view class="btn">
				登录
			</view>
		</view>

	</view>

</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goback: function() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>
<style>
	.list {
		min-height: 110px;
		width: 750px;
		display: flex;
		flex-direction: column;
		margin: 100px 0 0;
	}

	.item {
		width: 690px;
		height: 110px;
		margin: 40px auto 0;
		border-bottom: 2px solid #e6e6e6;
		background-color: #fff;
		display: flex;
		align-items: center;
		font-size: 32px;
		color: #6c6c6c;
		border-radius: 50px;
	}

	.item-name {
		flex: 1;
	}
	.keep {
		width: 750px;
		min-height: 100px;
		display: flex;
		justify-content: center;
		margin-top:100px;
	}
</style>
