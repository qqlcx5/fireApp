<template>
	<view class="page">
		<view class="header" style="position: fixed;z-index:10000 ;">
			<view class="header-left"></view>
			<view class="header-content">
				党建工作
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
			<text class="icon notifyIcon mgl20 mgr20" >&#xe600;</text>
			<swiper autoplay="true" interval="2000" duration="1000" vertical="true" style="width:700px; height: 100px;line-height: 100px;">
				<swiper-item v-for="(value,key) in itemList1" :key="key" @click="msglist()">
					{{value.pushcontent}}
				</swiper-item>
			</swiper>
		</view>
		<view class="list">
			<view class="item" @tap="ways('jigoushezhi')">
				<image src="../../static/party1.png" />
				<text class="item-name">机构设置</text>
			</view>
			<view class="item" @tap="ways('zuzhishenghuo')">
				<image src="../../static/party2.png" />
				<text class="item-name">组织生活</text>
			</view>
			<view class="item" @tap="articlelist(7)">
				<image src="../../static/party3.png" />
				<text class="item-name">党建经验</text>
			</view>
			<view class="item" @tap="articlelist(8)">
				<image src="../../static/party4.png" />
				<text class="item-name">学习经验</text>
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
			articlelist: function(e) {
				uni.navigateTo({
					url: "articlelist?catid=" + e
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
						flashcat: 1
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
						//console.log(JSON.stringify(res.data));
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
		width: 330px;
		height: 330px;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 0 30px 30px 0;
	}

	.item image {
		width: 120px;
		height: 120px;
	}

	.item-name {
		margin-top: 20px;
		font-size: 32px;
		color: #999999;
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
