<template>
	<view class="page">
		<view class="header" style="position: fixed;z-index: 10000;">
			<view class="header-left" @tap="backs">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				任务列表
			</view>
			<view class="header-right">
			</view>
		</view>
		<!-- 开始任务和历史任务tab栏 -->
		<view class="tab-title" style="margin-top:120px;">
			<view class="tab-title">
				<view class="tab " :class="{select:!showTask}" @click="showTask=false">开始任务</view>
				<view class="tab " :class="{select:showTask}" @click="showTask=true">历史任务</view>
			</view>
		</view>
		<view class="list" v-if=" totallist !='' ">
			<view class="picker-data">
				<picker class="picker-item" mode="date" start="2018-01-01" end="2019-01-01" @change="startDateChange">
					<view class="picker-data-text">开始时间<view class="picker-data-num">{{startDate}}</view>
					</view>
				</picker>
				<picker class="picker-item" mode="date" start="2018-01-01" end="2019-01-01" @change="endDateChange">
					<view class="picker-data-text">结束时间<view class="picker-data-num">{{endDate}}</view>
					</view>
				</picker>
				<view class="mbtn findbtn">查询</view>
			</view>
			<view class="item" v-for="(value,key) in totallist" :key="key">
				<view class="item-left" @tap="add(value.lifecat,value.pushid)">
					<image class="item-left-image" :src="'../../static/task'+value.lifecat+'.png'" mode=""></image>
				</view>
				<view class="item-middle" @tap="add(value.lifecat,value.pushid)">
					<text class="item-name">{{value.pushcontent}}</text>
					<text class="item-desc">开始时间:{{value.starttime}}</text>
					<text class="item-desc">结束时间:{{value.endtime}}</text>
				</view>
				<view class="item-right">
					<image class="item-right-image" :src="'../../static/renwu'+value.status+'.png'" mode=""></image>
					<view class="item-btn-warn" @tap="message(value.pushid)">详情</view>
				</view>
			</view>


			<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
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
	import uniLoadMore from '../../components/uni-load-more.vue'

	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				// tab显示栏
				showTask: false,
				startDate: '2018-01-01',
				endDate: '2018-02-02',
				pushlist: [],
				lifecat: "",
				totallist: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				page: 1,
			}
		},
		computed: {
			...mapState(['user']),

		},

		methods: {
			startDateChange(evt) {
				this.startDate = evt.detail.value;
			},
			endDateChange(evt) {
				this.endDate = evt.detail.value;
			},
			islogin: function() {
				if (this.user.user === null) {
					uni.reLaunch({
						url: '../../pages/manage/login'
					})
					return;
				}

			},
			message: function(pushid) {
				uni.navigateTo({
					url: "trainmessage?pushid=" + pushid
				})
			},
			getpush: function(page) {

				let that = this;
				let list = [];
				//console.log(this.user.user.token);
				uni.request({
					url: common.hosturl + "index/getpush.html",
					method: "POST",
					data: {
						token: this.user.user.token,
						lifecat: this.lifecat,
						page: page

					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
						//console.log(JSON.stringify(res.data));
						if (res.data.code == 0) {
							that.pushlist = res.data.list;
							res.data.list.forEach(function(value, key) {

								//console.log(JSON.stringify(value));
								that.totallist.push(value);
							})



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
			add: function(lifecat, pushid) {
				console.log(pushid);
				let that = this;
				uni.request({
					url: common.hosturl + "index/checkpush.html",
					method: "POST",
					data: {
						token: this.user.user.token,
						pushid: pushid
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
						console.log(JSON.stringify(res.data));
						if (res.data.code == 0) {


							let param = {

								lifecat: lifecat,
								pushid: pushid
							}


							if (res.data.result == 1) {
								uni.navigateTo({
									url: "add?param=" + JSON.stringify(param)
								})
								return;
							} else if (res.data.result == 2) {
								uni.showToast({
									icon: 'none',
									title: '任务已过期'
								});
								return;
							} else if (res.data.result == 3) {

								uni.showToast({
									icon: 'none',
									title: '您所属的中队已经完成该任务啦'
								});
								return;
							} else if (res.data.result == 4) {
								return;
							} else {
								uni.showToast({
									icon: 'none',
									title: '出错啦，请联系客服'
								});
								return;
							}

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
		onReachBottom() {

			console.log(this.pushlist);
			if (this.pushlist.length < 10) {
				this.loadingType = 2
				return;
			}



			this.loadingType = 1;
			this.page++;
			this.getpush(this.page);
			if (this.loadingType !== 0) {
				return;
			}


		},
		components: {
			uniLoadMore
		},
		onLoad: function(e) {
			this.lifecat = e.lifecat
			this.islogin();
			this.getpush(this.page);




		},
		onShow: function() {





		},

		onUnload() {

			this.totallist = [];
			this.pushlist = [];
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

	.list {
		min-height: 200px;
		width: 750px;
		display: flex;
		font-size: 28px;
		flex-direction: column;
		padding: 0 30px;
		box-sizing: border-box;
	}

	.picker-data {
		display: flex;
		font-size: 28px;
		color: #666666;
		height: 120px;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	/* .picker-item{
		
	} */

	.picker-data-text {
		display: flex;
		height: 60px;
		align-items: center;
	}

	.picker-data-num {
		margin-left: 10px;
		display: block;
		min-width: 160px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		background-color: #ffffff;
		border-radius: 10px;
		border: solid 1px #e6e6e6;
		font-size: 28px;
		color: #e9e9e9;
	}

	.findbtn {
		/* margin-left: 30px; */
		width: 100px;
		height: 48px;
		background-color: #67ba61;
		border-radius: 10px;
		font-size: 28px;
		color: #ffffff;
	}

	.item {
		display: flex;
		box-sizing: border-box;
		margin-bottom: 30px;
		position: relative;
		width: 690px;
		height: 180px;
		background-color: #ffffff;
		box-shadow: 0px 3px 5px 0px #e6e6e6;
		position: relative;
	}

	.item-left {
		height: 180px;
		width: 180px;
		padding: 30px;
		box-sizing: border-box;
		flex-shrink: 0;
	}

	.item-left-image {
		width: 100%;
		height: 100%;
		border-radius: 12px;
	}

	.item-middle {
		width: 360px;
		height: 180px;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		/* background-color: #007AFF; */
	}

	.item-name {
		width: 360px;
		height: 50px;
		font-size: 36px;
		color: #333333;
		margin: 25px 0 14px;
		overflow: hidden;

	}

	.item-desc {
		font-size: 24px;
		line-height: 40px;
		color: #666666;
	}

	.item-right {
		width: 150px;
		height: 180px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.item-right-image {
		width: 60px;
		height: 60px;
		margin: 20px;
	}

	.item-btn-warn {
		width: 96px;
		height: 48px;
		line-height: 48px;
		text-align: center;

		border-radius: 10px;
		border: solid 1px #d0021b;
		font-size: 28px;
		color: #d0021b;
	}

	.item-btn-info {
		width: 96px;
		height: 48px;
		line-height: 48px;
		text-align: center;
		background-color: #ffffff;
		border-radius: 10px;
		border: solid 1px #d0021b;
		font-size: 28px;
		color: #d0021b;
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
</style>
