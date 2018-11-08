<template>
	<view class="page">
		<view class="header">
			<view class="header-left"></view>
			<view class="header-content">
				党建工作
			</view>
			<view class="header-right"></view>
		</view>
		<view class="banner">
			<image src="../../static/dangjian.jpg" />
		</view>
		<view class="list">
			<view class="item" @tap="ways('jigoushezhi')">
				<image src="../../static/party1.png" />
				<text class="item-name">机构设置</text>
			</view>
			<view class="item" @tap="ways('zuzhishenghuo')">
				<image src="../../static/party2.png" />
				<text class="item-name">组织生活</text>
			</view>
			<view class="item" @tap="ways('xuexijingyan')">
				<image src="../../static/party3.png" />
				<text class="item-name">党建经验</text>
			</view>
			<view class="item" @tap="ways('xuexijingyan')">
				<image src="../../static/party4.png" />
				<text class="item-name">学习经验</text>
			</view>
		</view>
	</view>

</template>
<script>
	export default {
		data() {
			return {}
		}
	}
</script>
<style>


	.banner {
		height: 390px;
		width: 750px;
		padding: 30px;
		box-sizing: border-box;
		overflow: hidden;
	}

	.banner image {
		width: 100%;
		height: 100%;
		border-radius: 12px;
	}

	.list {
		min-height: 100px;
		width: 720px;
		/* margin: 30px 0 0 30px; */
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		margin-left: 30px;
	}

	.item {
		width: 330px;
		height: 330px;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;		
		margin: 0 30px 30px 0;
	}

	.item image {
		width: 120px;
		height: 120px;
	}

	.item-name {
		margin-top: 20px;
		font-size: 32px;
		color: #999999;
	}
</style>
