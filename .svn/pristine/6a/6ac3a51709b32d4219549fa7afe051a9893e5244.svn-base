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
		<!-- 编辑图片 -->
		<view v-if="!showVideo">
			<editImage />
		</view>
		<!-- 编辑视频 -->
		<view v-else>
			<editVideo />
		</view>
	</view>
</template>

<script>
	import editImage from '../../components/editImage.vue'
	import editVideo from '../../components/editVideo.vue'
	export default {
		data() {
			return {
				showVideo: false
			}
		},
		components: {
			editVideo,
			editImage
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

	/* 两个组件公用一套样式 */
	.imgList {

		display: flex;
		min-height: 260px;
		min-width: 750px;
		flex-wrap: wrap;
		padding: 37.5px 0 0 37.5px;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}

	.imgItem {
		margin: 0 37.5px 37.5px 0;
		/* padding: 0 37.5px 37.5px 0; */
		position: relative;
		/* width: 237.5px;
		height: 237.5px; */
		width: 200px;
		height: 200px;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	/* 添加icon边框 */
	.imgItemBorder {
		border: solid 4px #999999;
	}

	.imgsize {
		width: 200px;
		height: 200px;
		/* background-color: #d8d8d8; */
		border-radius: 6px;
	}

	.close {
		position: absolute;
		top: -25px;
		right: -25px;
		width: 50px;
		height: 50px;
	}

	/* 添加图片的样式 */
	.addIcon {
		font-size: 100px;
	}

	.remarks-title {
		height: 107px;
		width: 750px;
		font-size: 32px;
		color: #666666;
		padding: 0 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}


	.remarks-content {
		min-height: 80px;
		width: 750px;
		background-color: #FFFFFF;
		padding: 30px;
		box-sizing: border-box;
	}

	.remarks-content textarea {
		width: 100%;
		min-height: 375px;
		font-size: 28px;
		line-height: 44px;
		color: #666666;
	}

	/* 输入常用语 */
	.isFix {
		height: 100vh;
		width: 100%;
		z-index: 10;
		background-color: rgba(0, 0, 0, .2);
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.fixmsg {
		position: fixed;
		bottom: 0;
		width: 750px;
		min-height: 0;
	}

	.fix-title,
	.fix-end,
	.fix-item {
		width: 750px;
		height: 88px;
		background-color: #ffffff;
		position: relative;
		border-bottom: 2px solid #f7f7f7;
		padding-left: 30px;
		box-sizing: border-box;
	}

	.fix-title {
		font-size: 36px;
		line-height: 88px;
		text-align: center;
		color: #4a90e2;
	}

	.fix-end {
		font-size: 36px;
		line-height: 88px;
		text-align: center;
		color: #6c6c6c;
	}

	.fix-item {
		line-height: 88px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: 32px;
		color: #6c6c6c;
	}
</style>
