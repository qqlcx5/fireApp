<template>
	<view class="page">
		<view class="header" style="position: fixed;">
			<view class="header-left" @tap="backs">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
			 {{categoryname}}
			</view>
			<view class="header-right">
				<!-- <text class="icon">&#xe622;</text> -->
			</view>
		</view>
		<view class="message-info" style="margin-top:120px;">
			<view class="title">
				<text class="title-name">{{article.articlename}}</text>
				<text class="title-desc">{{categoryname}}</text>
			</view>
			<view class="message-user">
				<image class="user-left" :src="baseurl+adduser.head" />
				<view class="user-right mgl20">
					<text class="user-name">{{adduser.personname}}</text>
					<text class="user-time">{{article.createtime}}</text>
				</view>

			</view>
			<view class="article">
				<rich-text class="detailimg" :nodes="articlecontent"></rich-text>	
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
				articleid: "",
				article:{},
				articlecontent:"",
				adduser:{},
				baseurl:"",
				categoryname:"",
				catid:""
			}
		},
		computed: {
			...mapState(['user']),
		},
		methods: {
			getdetail: function() {

				console.log(this.articleid);
				let that = this;
				//console.log(this.user.user.token);
				uni.request({
					url: common.hosturl + "article/detail.html",
					method: "POST",
					data: {
						token: this.user.user.token,
						articleid: this.articleid
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
						console.log(JSON.stringify(res.data));
						if (res.data.code == 0) {
							that.article=res.data.detail;
							that.adduser=res.data.user;
							that.baseurl=res.data.baseurl;
							that.categoryname=res.data.category.categoryname;
							//that.catid=res.data.
							//console.log(res.data.category.categoryname);
							//that.articlecontent = res.data.detail.articlecontent.replace(/\\/g, "").replace(/<img/g, "<img style=\"display:none;\"");
							that.articlecontent = res.data.detail.articlecontent.replace(/\\/g, "").replace(/<img/g, "<img style=\"max-width:100%;\"");

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
		onLoad: function(e) {
			this.articleid = e.articleid
			//console.log(this.articlecontent);

		},
		onShow: function() {
			this.getdetail();
		}
	}
</script>
<style>
	.page {
		display: flex;
		flex-direction: column;
		width: 750px;
		min-height: 100vh;
	}

	.message-info {
		display: flex;
		flex-direction: column;
		flex: 1;
		width: 750px;
		background-color: #fff;
	}

	.title {
		height: 44px;
		display: flex;
		width: 750px;
		padding: 0 30px;
		box-sizing: border-box;
		color: #323038;
		margin: 40px 0;
		align-items: flex-end;
	}
  .header-content{
	
		height: 50px ;
		overflow: hidden;
	}
	.title-name {
		font-weight: bold;
		overflow: hidden;
	  flex: 1;
		height: 50px;
	}

	.title-desc {
		font-size: 24px;
		color: #67ba61;
	}

	.message-user {
		display: flex;
		padding: 0 30px;
		box-sizing: border-box;
		height: 100px;
		width: 750px;
		margin-bottom: 30px;
	}

	.user-left {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		overflow: hidden;
	}

	.user-right {
		flex: 1;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.user-name {
		font-size: 28px;
		line-height: 40px;
		color: #666666;
		margin-bottom: 10px;
	}

	.user-time {
		font-size: 24px;

		color: #b6b4b7;
	}

	.article {
		display: flex;
		flex-direction: column;
		width: 750px;
		min-height: 0px;
		padding: 0 30px;
		box-sizing: border-box;
	}
	image{
		width: 700px;
	}
	
	
	.text {
		line-height: 34px;
		font-size: 24px;
		color: #666666;
		margin-bottom: 30px;
		display: block;
		text-align: justify;
	}

	.message-img {
		width: 670px;
		height: 320px;
		background-color: #d8d8d8;
		box-shadow: 0px 4px 8px 0px #e5e5e5;
		border-radius: 12px;
		margin: 0 auto 30px;
	}
</style>
