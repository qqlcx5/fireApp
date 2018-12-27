<template>
	<view class="page">
		<view class="header" style="position: fixed;z-index: 10000;">
			<view class="header-left"></view>
			<view class="header-content">
				战备训练
			</view>
			<view class="header-right"></view>
		</view>
		<view class="banner" style="margin-top:120px;">
			<swiper autoplay="true" interval="3000" duration="1000" indicator-dots="true" style="height: 390px;">
				<swiper-item v-for="(value,key) in itemList" :key="key">
					<image :src="baseurl+value.flashurl" />
				</swiper-item>
			</swiper>
		</view>
		<view class="notify" @click="msglist()">
			<text class="icon notifyIcon mgl20 mgr20" @click="msglist()">&#xe600;</text>
			<swiper autoplay="true" interval="2000" duration="1000" vertical="true" style="width:700px; height: 100px;line-height: 100px;">
				<swiper-item v-for="(value,key) in itemList1" :key="key" @click="msglist()">
					{{value.pushcontent}}
				</swiper-item>
			</swiper>
		</view>
		<view class="list">
			<view class="item" @click="category(1)">
				<image src="../../static/task1.png" />
				<view class="item-name ">战备教育</view>
			</view>
			<view class="item" @click="category(2)">
				<image src="../../static/task2.png" />
				<view class="item-name ">交接班</view>
			</view>
			<view class="item" @click="category(3)">
				<image src="../../static/task3.png" />
				<view class="item-name ">战备检查</view>
			</view>
			<view class="item" @click="category(4)">
				<image src="../../static/task4.png" />
				<view class="item-name ">车场日</view>
			</view>
			<view class="item" @click="category(5)">
				<image src="../../static/task5.png" />
				<view class="item-name ">支部议训</view>
			</view>
			<view class="item" @click="category(6)">
				<image src="../../static/task6.png" />
				<view class="item-name ">训练计划</view>
			</view>
			<view class="item" @click="category(7)">
				<image src="../../static/task7.png" />
				<view class="item-name ">训练安全</view>
			</view>
			<view class="item" @click="category(8)">
				<image src="../../static/task8.png" />
				<view class="item-name ">日常训练</view>
			</view>
			<view class="item" @click="category(9)">
				<image src="../../static/task9.png" />
				<view class="item-name ">六熟悉</view>
			</view>
			<view class="item" @click="category(10)">
				<image src="../../static/task10.png" />
				<view class="item-name ">周考核</view>
			</view>
			<view class="item" @click="category(11)">
				<image src="../../static/task11.png" />
				<view class="item-name ">训练档案</view>
			</view>
			<view class="item" @click="category(12)">
				<image src="../../static/task12.png" />
				<view class="item-name ">业务理论</view>
			</view>
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
				baseurl: "",
				itemList: [],
				itemList1: [],
			}
		},
		computed: {
			...mapState(['user']),
		},
		methods: {
			islogin: function() {
				if (this.user.user === null) {
					uni.reLaunch({
						url: '../../pages/manage/login'
					})
					return;
				}
			},
			category: function(cat) {
				//console.log(cat);
				uni.navigateTo({
					url: "tranInfo?lifecat=" + JSON.stringify(cat)
				})
			},
			msglist: function() {
				uni.navigateTo({
					"url": "../../pages/train/msglist"
				})
			},
			getflash: function() {

				let that = this;
				//console.log(this.user.user.token);
				uni.request({
					url: common.hosturl + "index/getflash.html",
					method: "POST",
					data: {
						token: this.user.user.token,
						flashcat: 2
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
					//	console.log(JSON.stringify(res.data));
						if (res.data.code == 0) {
							that.itemList = res.data.list;
							that.baseurl = res.data.baseurl;

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
			getpush: function() {

				let that = this;
				//console.log(this.user.user.token);
				uni.request({
					url: common.hosturl + "index/toppushlist.html",
					method: "POST",
					data: {
						token: this.user.user.token,
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
						//console.log(JSON.stringify(res.data));
						if (res.data.code == 0) {
							that.itemList1 = res.data.list;
							//that.baseurl = res.data.baseurl;

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



			}

		},
		onLoad: function() {

			this.islogin();

		},
		onShow: function() {
			this.getflash();
			this.getpush();
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
