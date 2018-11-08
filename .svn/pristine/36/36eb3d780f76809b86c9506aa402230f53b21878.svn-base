<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @tap="backs()">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				推送
			</view>
			<view class="header-right">
				<text>添加</text>
			</view>
		</view>
		<view class="tab-title">
			<view class="tab " :class="{select:!showVideo}" @click="showVideo=false">战备训练</view>
			<view class="tab " :class="{select:showVideo}" @click="showVideo=true">日常管理</view>
		</view>
		<!-- 显示图片页面 -->
		<view v-if="!showVideo">
			<view class="list">
				<view class="item">
					<picker class="select-item" mode="selector" :range="textList" @change="textChange">
						<view>重复：{{textList[textValue]}}</view>
					</picker>
					<picker class="time-item" mode="time" start="0:00" end="23:59" @change="timeChange">
						<view>{{time}}</view>
					</picker>
					<view class="remarks">
						<text>{{remarks}}</text>
						<switch />
					</view>
				</view>
				<!-- 复制 -->
				<view class="item">
					<picker class="select-item" mode="selector" :range="textList" @change="textChange">
						<view>重复：{{textList[textValue]}}</view>
					</picker>
					<picker class="time-item" mode="time" start="0:00" end="23:59" @change="timeChange">
						<view>{{time}}</view>
					</picker>
					<view class="remarks">
						<text>{{remarks}}</text>
						<switch />
					</view>
				</view>
				<view class="item">
					<picker class="select-item" mode="selector" :range="textList" @change="textChange">
						<view>重复：{{textList[textValue]}}</view>
					</picker>
					<picker class="time-item" mode="time" start="0:00" end="23:59" @change="timeChange">
						<view>{{time}}</view>
					</picker>
					<view class="remarks">
						<text>{{remarks}}</text>
						<switch />
					</view>
				</view>
				<view class="item">
					<picker class="select-item" mode="selector" :range="textList" @change="textChange">
						<view>重复：{{textList[textValue]}}</view>
					</picker>
					<picker class="time-item" mode="time" start="0:00" end="23:59" @change="timeChange">
						<view>{{time}}</view>
					</picker>
					<view class="remarks">
						<text>{{remarks}}</text>
						<switch />
					</view>
				</view>


			</view>
		</view>
		<!-- 显示视频页面 -->
		<view v-else>

			<view class="list">
				<view class="item">
					<picker class="select-item" mode="selector" :range="textList" @change="textChange">
						<view>重复：{{textList[textValue]}}</view>
					</picker>
					<picker class="time-item" mode="time" start="0:00" end="23:59" @change="timeChange">
						<view>{{time}}</view>
					</picker>
					<view class="remarks">
						<text>{{remarks}}</text>
						<switch />
					</view>
				</view>
				<!-- 复制 -->

				<view class="item">
					<picker class="select-item" mode="selector" :range="textList" @change="textChange">
						<view>重复：{{textList[textValue]}}</view>
					</picker>
					<picker class="time-item" mode="time" start="0:00" end="23:59" @change="timeChange">
						<view>{{time}}</view>
					</picker>
					<view class="remarks">
						<text>{{remarks}}</text>
						<switch />
					</view>



				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showVideo: false,
				textList: [
					'每日',
					'每周',
					'每月'
				],
				textValue: '每周',
				time: '09:00',
				remarks: '战备教育'
			}
		},
		methods: {
			textChange(evt) {
				this.textValue = evt.detail.value;
			},
			timeChange(evt) {
				this.time = evt.detail.value;
			}
		}
	}
</script>
<style>
	.header-right text {
		font-size: 28px;
		color: #ffffff;
	}

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
		width: 120px;
		height: 6px;
		background-color: #d0021b;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.list {
		display: flex;
		flex-direction: column;
		min-height: 0px;
		width: 750px;
		flex-wrap: wrap;
		padding: 30px 30px 0;
		box-sizing: border-box;
	}

	.item {
		width: 690px;
		height: 235px;
		background-color: #ffffff;
		border-radius: 12px;
		padding: 30px;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;
	}

	.select-item {
		font-size: 28px;
		color: #999999;
	}

	.time-item {
		margin-top: 10px;
		font-size: 50px;
		color: #67ba61;
	}

	.remarks {
		display: flex;
	}

	.remarks>text {
		font-size: 32px;
		color: #4a90e2;
		flex: 1;
		line-height: 70px;
	}
</style>
