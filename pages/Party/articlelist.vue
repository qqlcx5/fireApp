<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @tap="backs">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				{{title}}
			</view>
			<view class="header-right">
				<!-- <text class="icon">&#xe622;</text> -->
			</view>
		</view>
		<view class="list mgt20">

			<view class="item" v-for="(value,index) in articlelist" :key="index" @tap="article(value.articleid)">
				<view class="item-left">
					<image :src='baseurl+value.imageurl'></image>
				</view>
				<view class="mgl30 item-right">
					<text class="item-name">{{value.articlename}}</text>
					<text class="item-desc">{{value.articlesub}}</text>
				</view>
				<text class="item-time">{{value.createtime}}</text>
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
				articlelist: [],
				baseurl: "",
				catid: "",
				title:""
			}
		},
		computed: {
			...mapState(['user']),
			
			
		},
		methods: {
			goback: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			article:function(articleid){
				uni.navigateTo({
					url:"article?articleid="+articleid
				})
			},
			islogin: function() {
				if (this.user.user === null) {
					uni.redirectTo({
						
						url: '../../pages/manage/login'
					})
					return;
				}
			},
			getlist: function() {

				let that = this;
				//console.log(this.user.user.token);
				uni.request({
					url: common.hosturl + "article/articlelist.html",
					method: "POST",
					data: {
						token: this.user.user.token,
						catid: this.catid
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
					//	console.log(JSON.stringify(res.data));
						if (res.data.code == 0) {
							//	console.log(JSON.stringify(res.data.list));
							that.articlelist = res.data.list;
							console.log(res.data.baseurl);
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
			}
		},
		onLoad: function(e) {
			this.catid = e.catid;
			this.islogin();

		},
		onShow: function(e) {
			this.getlist();
			if(this.catid==7)
			{
				this.title="党建经验";
			}
			else{
				this.title="学习经验";
			}

		}
	}
</script>
<style>
	/* .header {
  height: 128px;
  width: 100%;
  display: flex;
  padding-top: 40px;
  box-sizing: border-box;
  padding-top: 20px;
  align-items: center;
  background-color: #d0021b;
  box-shadow: 0px 4px 8px 0px #e6e6e6;
}

.header-left,
.header-right {
  width: 88px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-content {
  flex: 1;
  font-size: 36px;
  text-align: center;
  font-size: 36px;
  color: #ffffff;
} */
	.list {
		min-height: 200px;
		width: 750px;
		display: flex;
		flex-direction: column;
	}

	.item {
		width: 750px;
		height: 200px;
		background-color: #fff;
		display: flex;
		padding: 30px;
		box-sizing: border-box;
		border-bottom: 2px solid #e6e6e6;
		position: relative;
	}

	.item-left image {
		width: 140px;
		height: 140px;
		background-color: #d8d8d8;
	}

	.item-right {
		width: 520px;
		height: 140px;
		display: flex;
		flex-direction: column;
	}

	.item-name {
		font-size: 32px;
		color: #666666;
		font-weight: 700;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.item-desc {
		margin-top: 20px;
		font-size: 24px;
		color: #999999;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.item-time {
		position: absolute;
		bottom: 10px;
		right: 30px;
		font-size: 20px;
		color: #dadada;
	}
</style>
