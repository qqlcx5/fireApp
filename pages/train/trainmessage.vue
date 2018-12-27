<template>
	<view class="page">
		<view class="header" style="position: fixed;z-index:10000 ;">
			<view class="header-left" @tap="backs">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				任务完成情况
			</view>
			<view class="header-right" @tap="addlife">
				<text></text>
			</view>
		</view>
		<view class="list" v-if=" lifelist !='' " style="margin-top:120px;">

			<view v-for="(value,index) in lifelist" :key="index">
				<view class="item-time-box">
					<view class="item-time">{{index}} </view>
				</view>
				<view class="item" v-for="(value1,index1) in value" :key="index1" @tap="traindetail(value1.lifeid)">
					<view class="item-title">任务完成情况确认</view>
					<view class="item-info-box">
						<view class="item-info">
							<view class="item-info-title">所属</view>
							<view class="item-info-desc">{{value1.framename}}</view>
						</view>
						<view class="item-info">
							<view class="item-info-title">发布人</view>
							<view class="item-info-desc">{{value1.personname}}</view>
						</view>
						<view class="item-info">
							<view class="item-info-title">完成时间</view>
							<view class="item-info-desc">{{value1.createtime}}</view>
						</view>
					</view>
				</view>

			</view>


		</view>

		<view class="msg-box" v-else>
			<image class="msg-img" src="../../static/notrain.png" mode=""></image>
			<text class="msg-title">暂无内容</text>
			<text class="msg-desc"></text>
		</view>
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
				lifelist: [],
				lifecat: "",
				title: "",
				pushid: ""
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
			traindetail: function(lifeid) {
				uni.navigateTo({
					url: "traindetail?lifeid=" + lifeid
				})
			},
			getlist: function(e) {
				let that = this;
				//console.log(this.user.user.token);
				uni.request({
					url: common.hosturl + "life/getlifemessage.html",
					method: "POST",
					data: {
						token: this.user.user.token,
						pushid: this.pushid
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
						console.log(JSON.stringify(res.data));
						if (res.data.code == 0) {
							that.lifelist = res.data.list;

						} else {
							uni.showToast({
								icon: 'none',
								title: '出错啦，请联系客服'
							});
						}
					},
					fail: function() {
						uni.showToast({
							icon: 'none',
							title: '网络错误'
						});
					}
				})
			},



		},
		onLoad: function(e) {
			this.pushid = e.pushid;
			this.islogin();

		},
		onShow: function(e) {
			this.getlist();

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

	.mbtn {
		width: 100px;
		height: 54px;
	}

	.msg-box {
		min-height: 100px;
		width: 750px;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 300px;
	}

	.msg-img {
		width: 160px;
		height: 160px;
		margin-bottom: 40px;
	}

	.msg-title {
		color: #999;
	}

	.header-right text {
		font-size: 28px;
		color: #ffffff;
	}

	.list {
		min-height: 200px;
		width: 750px;
		display: flex;
		flex-direction: column;
	}

	.item-time-box {
		height: 78px;
		width: 750px;
		display: flex;
		align-items: flex-end;
	}

	.item-time {
		width: 221px;
		height: 48px;
		line-height: 48px;
		text-align: center;
		background-color: #FF8379;
		border-radius: 0 30px 30px 0;
		font-size: 28px;
		color: #666666;
	}

	.item {
		display: flex;
		flex-direction: column;
		width: 750px;
		height: 245px;
		background-color: #ffffff;
		margin-top: 20px;
	}

	.item-title {
		width: 750px;
		height: 105px;
		font-size: 32px;
		color: #333333;
		padding: 30px;
		box-sizing: border-box;
		font-weight: bold;
	}

	.item-info-box {
		display: flex;
	}

	.item-info {
		flex: 0 0 33.33%;
		height: 140px;
		font-size: 28px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.item-info::before {
		content: '';
		width: 3px;
		height: 93px;
		background-color: #999999;
		display: block;
		position: absolute;
		top: 30px;
		right: 0;
	}

	.item-info:last-child::before {
		display: none;
	}

	.item-info-title {
		color: #d0021b;
		margin-bottom: 20px;
	}

	.item-info-desc {
		color: #666666;
	}
</style>
