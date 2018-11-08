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
			<view class="tab " :class="{select:!showVideo}" @click="showVideo=false">照片</view>
			<view class="tab " :class="{select:showVideo}" @click="showVideo=true">视频</view>
		</view>
		<!-- 显示图片页面 -->
		<view v-if="!showVideo">
			<view class="imgList">
				<view class="img-item">
					<image class="imgsize" src="../../static/dangjian.jpg" mode=""></image>
				</view>
				<view class="img-item">
					<image class="imgsize" src="../../static/dangjian.jpg" mode=""></image>
				</view>
				<view class="img-item">
					<image class="imgsize" src="../../static/dangjian.jpg" mode=""></image>
				</view>
			</view>
			<view class="remarks">
				<view class="remarks-title">
					备注消息
				</view>
				<view class="remarks-content">
					<text decode="true">
						&emsp;&emsp;战备教育是为作好战争准备而进行的思想教育。中国人民解放军经常性的思想政治工作内容。任务是使官兵认识战争的性质、敌人的反动本质，树立无产阶级战争观，坚定战斗队的思想，做到一声令下立即出动，完成保卫祖国的职责。
					</text>
				</view>
			</view>
		
		</view>
		<!-- 显示视频页面 -->
		<view v-else>
				<view class="imgList">
					<view class="img-item">
						<image class="imgsize" src="../../static/dangjian.jpg" mode=""></image>
					</view>
				</view>
				<view class="remarks">
					<view class="remarks-title">
						备注消息
					</view>
					<view class="remarks-content">
						<text decode="true">
							&emsp;&emsp;战备教育是为作好战争准备而进行的思想教育。中国人民解放军经常性的思想政治工作内容。任务是使官兵认识战争的性质、敌人的反动本质，树立无产阶级战争观，坚定战斗队的思想，做到一声令下立即出动，完成保卫祖国的职责。
						</text>
					</view>
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
		margin-bottom: 4px;
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
	.tab-title .select {
		color: #d0021b;
		font-weight: 700;
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

	.imgList {

		display: flex;
		min-height: 260px;
		min-width: 750px;
		flex-wrap: wrap;
		padding: 37.5px 0 0 37.5px;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}

	.imgsize {
		width: 200px;
		height: 200px;
		background-color: #d8d8d8;
		border-radius: 6px;
		margin: 0 37.5px 37.5px 0;
	}

	.remarks-title {
		height: 107px;
		line-height: 107px;
		font-weight: bold;
		width: 750px;
		font-size: 32px;
		color: #666666;
		padding-left: 30px;
		box-sizing: border-box;
	}


	.remarks-content {
		min-height: 80px;
		width: 750px;
		background-color: #FFFFFF;
		padding: 30px;
		box-sizing: border-box;
	}

	.remarks-content text {
		font-size: 28px;
		line-height: 44px;
		color: #666666;
	}
</style>
