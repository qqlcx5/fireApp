<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @tap="backs()">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				战备教育
			</view>
			<view class="header-right">
				<text class="icon">&#xe622;</text>
			</view>
		</view>
		<view class="tab-title">
			<view class="tab-title">
				<view class="tab " :class="{select:!showVideo}" @click="showVideo=false">照片</view>
				<view class="tab " :class="{select:showVideo}" @click="showVideo=true">视频</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showVideo: false
			}
		}
	}
</script>
<style>
	.tab-title {
		width: 750px;
		height: 80px;
		display: flex;
		background-color: #fff;
		box-shadow: 0px 2px 4px 0px #e9e9e9;
	}

	.tab-title .tab {
		width: 375px;
		height: 80px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		color: #666666;
		position: relative;
	}

	.tab-title .select::after {
		position: absolute;
		content: '';
		width: 100px;
		height: 6px;
		background-color: #d0021b;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
