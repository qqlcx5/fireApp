<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @tap="backs">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				战备检查
			</view>
			<view class="header-right" @tap="ways('edit')">
				<text>添加</text>
			</view>
		</view>
		<view class="list">
			<view>
				<view class="item-time">
					2018-11-01
				</view>
				<view class="item">
					<view class="item-left">
						<text>任务完成情况确认</text>
						<text>照片3张、1个视频</text>
					</view>
					<view class="item-right">
						<text class="state-color">待推送</text>
						<view class="btn-box mgt20">
							<view class="mbtn btn-danger mgr20" @tap="ways('trainchakan')">查看</view>
							<view class="mbtn btn-info" @tap="ways('tuisong')">推送</view>
						</view>
					</view>
				</view>
			</view>
			<view>
				<view class="item-time">
					2018-11-01
				</view>
				<view class="item">
					<view class="item-left">
						<text>任务完成情况确认</text>
						<text>照片3张、1个视频</text>
					</view>
					<view class="item-right">
						<text class="state-color push-color">已推送</text>
						<view class="btn-box mgt20">
							<view class="mbtn btn-danger mgr20">查看</view>
							<view class="mbtn btn-info">推送</view>
						</view>
					</view>
				</view>
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
	.header-right text {
		font-size: 28px;
		color: #ffffff;
	}

	.list {
		min-height: 110px;
		width: 750px;
		display: flex;
		flex-direction: column;
	}

	.item-time {
		height: 84px;
		width: 750px;
		line-height: 84px;
		font-size: 24px;
		color: #999999;
		padding-left: 30px;
		box-sizing: border-box;
	}

	.item {
		width: 750px;
		height: 174px;
		background-color: #ffffff;
		display: flex;
		padding: 0 30px;
		box-sizing: border-box;
	}

	.item-left {
		flex: 1;
		height: 174px;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.item-left text:nth-of-type(1) {
		font-size: 32px;
		color: #666666;
		font-weight: bold;
	}

	.item-left text:nth-of-type(2) {
		margin-top: 15px;
		font-size: 24px;
		color: #999999;
	}

	.item-right {
		width: 220px;
		height: 174px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}

	.state-color {
		font-size: 28px;
		color: #e30000;
	}

	.push-color {
		color: #67ba61;
	}

	.btn-box {
		display: flex;
	}
	.mbtn{
		width: 100px;
		height: 54px;
	}
</style>
