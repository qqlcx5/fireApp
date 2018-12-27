<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @tap="backs()">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				任务完成情况
			</view>
			<view class="header-right">
				<!-- <text class="icon">&#xe622;</text> -->
			</view>
		</view>
		<view class="tab-title">
			<view class="tab " :class="{select:!showVideo}" @click="showVideo=false">照片</view>
			<view class="tab " :class="{select:showVideo}" @click="showVideo=true">视频</view>
		</view>
		<!-- 显示图片页面 -->
		<view v-if="!showVideo">
			<view class="imgList">
				<view class="img-item" v-for="(value,index) in imgurl" :key="index">
					<image class="imgsize" :src="baseurl+value" mode="" @tap="showBanner(baseurl+value)"></image>
				</view>
			</view>
		</view>
		<!-- 显示视频页面 -->
		<view v-else>
			<view class="imgList">
				<view class="img-item"  @click="showbigvideo(baseurl+lifedetail.lifevideo)">
					<video  class="imgsize" :src="baseurl+lifedetail.lifevideo" mode="" style="width: 400px;"></video>
				</view>
			</view>
		</view>
		
		<view class="remarks">
			<view class="remarks-title">
				备注消息
			</view>
			<view class="remarks-content">
				<text decode="true">
					&emsp;&emsp;{{lifedetail.lifecontent}}
				</text>
			</view>
		</view>
		
		<!-- 弹出层 -->
		<view class="graces-banner" v-if="bannerShow">
			<view>
				<image :src="bigimg" style="width:100%;border-radius: 12px; overflow: hidden;" mode="widthFix"></image>
			</view>
		</view>
		<view class="graces-mask" v-if="bannerShow"  @tap="closeBanner"></view>
		<!-- 弹出层 -->
		
		
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
				lifedetail: [],
				showVideo: false,
				baseurl:"",
				imgurl:"",
				imageList:[],
			    bigimg:"",
				bannerShow:false
			}
		},
		onBackPress() {
			if (this.bannerShow) {
				this.bannerShow = false;
				return true;
			}
		},
		computed: {
			...mapState(['user']),	
		},
		methods: {
			closeBanner: function() {
			
				this.bannerShow = false;
				
			},
			showbigvideo:function(){
				
				console.log("abcdefg");
			},
			showBanner: function(e) {
				console.log(e);
                this.bigimg=e;
				this.bannerShow = true;
			},
			getdetail: function() {

				let that = this;
				//console.log(this.user.user.token);
				uni.request({
					url: common.hosturl + "life/detail.html",
					method: "POST",
					data: {
						token: this.user.user.token,
						lifeid: this.lifeid
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
						console.log(JSON.stringify(res.data));
						if (res.data.code == 0) {
							//	console.log(JSON.stringify(res.data.list));
							that.lifedetail = res.data.detail;
							that.baseurl=res.data.baseurl;
						
							that.imgurl=res.data.detail.lifeimage.split(',');

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
			previewImage: function(e) {
				/* var current = e.target.dataset.src
				console.log(current); */
				this.imageList
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			}

		},
		onLoad: function(e) {
			this.lifeid = e.lifeid;
			this.getdetail();
			console.log(this.baseurl);
			console.log(this.imgurl);
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
	
	 /* 遮罩层 */
	    .graces-mask {
	        background: rgba(0, 0, 0, 0.6);
	        position: fixed;
	        width: 100%;
	        height: 100%;
	        left: 0;
	        top: 0;
	        z-index: 1;
	    }
	
	    /* 弹出层形式的广告 */
	    .graces-banner {
	        width: 90%;
			padding: 15px;
	        position: fixed;
	        left: 50%;
	        top: 50%;
	        background: #FFF;
	        border-radius: 12px;
	        z-index: 99;
	        transform: translate(-50%, -50%);
			overflow: hidden;
	    }
</style>
