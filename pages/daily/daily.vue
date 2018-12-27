<template>
	<view class="page">
		<view class="header" style="position: fixed;z-index: 10000;">
			<view class="header-left"></view>
			<view class="header-content">
				日常管理
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
			<view class="icon notifyIcon mgl20 mgr20" @click="msglist()">&#xe600;</view>
			<swiper autoplay="true" interval="2000" duration="1000" vertical="true" style="width:700px; height: 100px;line-height: 100px;">
				<swiper-item v-for="(value,key) in itemList1" :key="key" @click="msglist()">
					{{value.pushcontent}}
				</swiper-item>
			</swiper>
		</view>
		<view class="list">
			<view class="item" @tap="category(13)">
				<image src="../../static/task13.png" />
				<text class="item-name">早操</text>
			</view>
			<view class="item" @tap="category(14)">
				<image src="../../static/task14.png" />
				<text class="item-name">安全管理</text>
			</view>
			<view class="item" @tap="category(15)">
				<image src="../../static/task19.png" />
				<text class="item-name">验菜</text>
			</view>
			<view class="item" @tap="category(16)">
				<image src="../../static/task20.png" />
				<text class="item-name">谈心制度</text>
			</view>
			<view class="item">
				<image class="imglogo" src="../../static/daily4.jpg" />
			</view>
			<view class="item" @tap="category(17)">
				<image src="../../static/task17.png" />
				<text class="item-name">学习经验</text>
			</view>
			<view class="item" @tap="category(18)">
				<image src="../../static/task18.png" />
				<text class="item-name">行政会议</text>
			</view>
			<view class="item" @tap="category(19)">
				<image src="../../static/ry.png" />
				<text class="item-name">人员在位情况</text>
			</view>
			<view class="item" @tap="category(20)">
				<image src="../../static/task15.png" />
				<text class="item-name">警容风纪检查</text>
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
				uni.navigateTo({
					url: "../../pages/train/tranInfo?lifecat=" + JSON.stringify(cat)
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
						flashcat: 3
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
	.banner {
		height: 390px;
		width: 750px;
		box-sizing: border-box;
		overflow: hidden;
	}

	.banner image {
		width: 100%;
		height: 100%;
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
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 0 30px 30px 0;
		width: 210px;
		height: 210px;
		background-color: #ffffff;
		border-radius: 6px;
	}

	.item image {
		width: 75px;
		height: 75px;
		border-radius: 12px;
	}

	.item-name {
		margin-top: 10px;
		font-size: 28px;
		color: #666666;
	}

	/* 中间logo */
	.item .imglogo {
		width: 210px;
		height: 210px;
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
</style>
