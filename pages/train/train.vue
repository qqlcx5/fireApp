<template>
	<view class="page">
		<view class="header">
			<view class="header-left"></view>
			<view class="header-content">
				战备训练
			</view>
			<view class="header-right"></view>
		</view>
		<view class="banner">
			<image src="../../static/banner.jpeg" />
		</view>
		<view class="notify">
			<text class="icon notifyIcon mgl20 mgr20">&#xe600;</text>
			<text>第四届全国119消防奖拟表彰对象公示</text>

		</view>
		<view class="list">
			<view class="item" @tap="ways('tranInfo')">
				<image src="../../static/train1.png" />
				<view class="item-name ">战备教育</view>
			</view>
			<view class="item" @tap="ways('tranInfo')">
				<image src="../../static/train2.png" />
				<view class="item-name ">交接班</view>
			</view>
			<view class="item" @tap="ways('tranInfo')">
				<image src="../../static/train3.png" />
				<view class="item-name ">战备检查</view>
			</view>
			<view class="item" @tap="ways('tranInfo')">
				<image src="../../static/train4.png" />
				<view class="item-name ">车场日</view>
			</view>
			<view class="item" @tap="ways('tranInfo')">
				<image src="../../static/train5.png" />
				<view class="item-name ">支部议训</view>
			</view>
			<view class="item" @tap="ways('tranInfo')">
				<image src="../../static/train6.png" />
				<view class="item-name ">训练计划</view>
			</view>
			<view class="item" @tap="ways('tranInfo')">
				<image src="../../static/train7.png" />
				<view class="item-name ">训练安全</view>
			</view>
			<view class="item" @tap="ways('tranInfo')">
				<image src="../../static/train8.png" />
				<view class="item-name ">日常训练</view>
			</view>
			<view class="item" @tap="ways('tranInfo')">
				<image src="../../static/train9.png" />
				<view class="item-name ">六熟悉</view>
			</view>
			<view class="item" @tap="ways('tranInfo')">
				<image src="../../static/train10.png" />
				<view class="item-name ">周考核</view>
			</view>
			<view class="item" @tap="ways('tranInfo')">
				<image src="../../static/train11.png" />
				<view class="item-name ">训练档案</view>
			</view>
			<view class="item" @tap="ways('xunlianjihua')">
				<image src="../../static/train12.png" />
				<view class="item-name ">业务理论</view>
			</view>
		</view>
	</view>

</template>
<script>
	export default {
		data() {
			return {}
		},
		methods: {

		}
	}
</script>
<style>
	.page {
		background-color: #fff;
		width: 100%;
		min-height: 100vh;
	}

	.banner {
		height: 375px;
		width: 750px;
		overflow: hidden;
	}

	.banner image {
		width: 100%;
		height: 100%;
	}

	.notify {
		height: 100px;
		width: 750px;
		background-color: #fff;
		display: flex;
		align-items: center;
		font-size: 28px;
		color: #666666;
		border-bottom: 2px solid #e9e9e9;
	}

	.notifyIcon {
		color: #d0021b;
	}

	.list {
		min-height: 100px;
		width: 750px;
		display: flex;
		flex-wrap: wrap;
	}

	.item {
		width: 186px;
		height: 186px;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		border-right: 2px solid #e9e9e9;
		border-bottom: 2px solid #e9e9e9;
		flex-direction: column;
		overflow: hidden;
		box-sizing: content-box;
	}

	.item:nth-child(4n) {
		border-right: none;
	}

	.item image {
		width: 75px;
		height: 75px;
	}

	.item-name {
		margin-top: 10px;
		font-size: 24px;
		color: #666666;
	}
</style>
