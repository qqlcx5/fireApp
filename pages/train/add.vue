<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @tap="backs()">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				添加任务
			</view>
			<view class="header-right">
				<!-- <text class="icon">&#xe622;</text> -->
			</view>
		</view>
		<view class="tab-title">
			<view class="tab-title">
				<view class="tab " :class="{select:!showVideo}" @click="showVideo=false">照片</view>
				<view class="tab " :class="{select:showVideo}" @click="showVideo=true">视频</view>
			</view>
		</view>
		<!-- 编辑图片 -->
		<view v-if="!showVideo">
			<view class="imgList">
				<block v-for="(image,index) in imageList" :key="index">
					<view class="imgItem">
						<image class="imgsize" :src="image" :data-src="image" @tap="previewImage"></image>
						<block>
							<image class="close" src="../../static/close.png" @click="delImage(index)"></image>
						</block>
						<view class="spinner" v-show="imageshow">
							<image src="../../static/timg.gif" style="width: 100px; height: 100px;"></image>
						</view>

					</view>
				</block>
				<view class="imgItem imgItemBorder" @tap="chooseImage">
					<text class="gIcon addIcon">
						&#xe62a;
					</text>
				</view>
			</view>
		</view>
		<!-- 编辑视频 -->
		<view v-else>
			<view class="imgList">
				<view class="imgItem imgItemBorder" @tap="chooseVideo" v-if="!isshow">
					<view class="gIcon addIcon">
						&#xe637;
					</view>
				</view>

				<view class="imgItem" v-else>
					<video :src="src" style="height:200px;" class="video"></video>
				</view>

			</view>


		</view>

		<view class="remarks">
			<view class="remarks-title">
				<text>备注消息</text>
				<text class="gIcon" @tap="isFix=true">&#xe604;</text>
			</view>
			<view class="isFix" v-if="isFix">
				<!-- 事件冒泡 -->
				<view class="fixmsg">
					<view class="fix-title" @tap="ways('changyongyu')">添加常用语</view>
					<view>
						<!-- v-if="false" -->
						<block>
							<view class="fix-item" v-for="(value,index) in comlist" :key="index" @click="showmessage(index)">{{value.content}}</view>
						</block>
					</view>
					<view class="fix-end" @tap="isFix=false">取消</view>
				</view>
			</view>
			<view class="remarks-content">
				<textarea class="textarea" placeholder="必填（1000字符以内)" v-model="content"></textarea>
			</view>
		</view>
		<button class="mgt40 btn" @click="postcontent">保存</button>
	</view>
</template>

<script>
	import common from '../../common/common.js';
	import {
		mapState
	} from 'vuex';
	var cmr = null;
	export default {

		data() {

			return {
				isFix: false,
				isshow: false,
				src: '',
				showVideo: false,
				content: "",
				comlist: [],
				imageList: [],
				imgurlarr: [],
				lifevideo: "",
				lifecat: "",
				pushid:""
			}
		},
		computed: {
			...mapState(['user']),
		},
	
		onUnload() {
			this.src = '';
			//uni.hideLoading();
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
			/* getimglist: function(data) {
				let that = this;
				this.imageList = data;
				this.imageList.forEach(function(value, key) {
					//console.log(value);
					//that.uploadImage(value, 1);
				})
			}, */
			getcomlist: function() {

				let that = this;
				//console.log(this.user.user.token);

				uni.request({
					url: common.hosturl + "index/getmessage.html",
					method: "POST",
					data: {
						token: this.user.user.token,
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {

						//console.log(JSON.stringify(res.data))
						if (res.data.code == 0) {

							that.comlist = res.data.list;

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

			uploadImage: function(e, type) {
				uni.showLoading({
					title: '上传中..',
					mask: true
				});

				let that = this;
				//console.log(e);
				const uploadTask = uni.uploadFile({
					url: common.hosturl + "Upload/uploadfile.html",
					filePath: e,
					name: "file",
					formData: {
						token: this.user.user.token
					},
					success: (uploadFileRes) => {
						let res = JSON.parse(uploadFileRes.data);
						if (res.code == 0) {

							if (type == 1) {
								this.imgurlarr = this.imgurlarr.concat(res.fileurl);
								if (this.imgurlarr != "") {
									uni.hideLoading();
								}

							} else {
								this.lifevideo = res.fileurl;
								if (this.lifevideo != "") {
									uni.hideLoading();
								}

								console.log(this.lifevideo);


							}


							//console.log(JSON.stringify(this.imgurlarr));
						} else {


						}


					},
				});

			},

			postcontent: function() {
				if (this.imgurlarr == "") {
					uni.showToast({
						icon: 'none',
						title: '请上传图片'
					});
					return;
				}

				if (this.content == "") {
					uni.showToast({
						icon: 'none',
						title: '请选择备注信息'
					});
					return;
				}
				
				if (this.lifevideo == "") {
					uni.showToast({
						icon: 'none',
						title: '请上传视频'
					});
					return;
				}

				//let lifeimage=this.imgurlarr.join("|");

				let data = {
					'lifeimage': this.imgurlarr,
					'token': this.user.user.token,
					'lifecontent': this.content,
					'lifecat': this.lifecat,
					'lifevideo': this.lifevideo,
					'pushid':this.pushid,
				
				};
				var that = this;
				uni.request({
					url: common.hosturl + "life/savelife.html",
					method: "post",
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					data: data,
					success: function(res) {
						console.log(res.data);
						if (res.data.code == 0) {
							uni.showToast({
								icon: 'none',
								title: res.data.msg,
								success: function() {

									uni.redirectTo({
										url: "tranInfo?lifecat=" + that.lifecat
									})
								}

							});

						} else {
							uni.showToast({
								icon: 'none',
								title: res.data.msg
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
			delImage: function(e) {
				console.log(e);
				this.imageList.splice(e, 1);
				this.imgurlarr.splice(e, 1);
				console.log(this.imgurlarr);
			},
			showmessage: function(e) {
				this.content = this.comlist[e].content;
				this.isFix = false;

			},
			chooseVideo: function() {

				var that = this;
				var VIDEOZOOM = 100;
				var MediaStore = plus.android.importClass("android.provider.MediaStore");
				var Intent = plus.android.importClass("android.content.Intent");
				// 导入后可以使用new方法创建类的示例对象
				var intent = new Intent("android.media.action.VIDEO_CAPTURE");
				intent.putExtra("android.intent.extra.videoQuality", 1); //0 means low quality, 1 means high quality
				//intent.putExtra("android.provider.MediaStore.EXTRA_OUTPUT", url);
				intent.putExtra("android.intent.extra.durationLimit", 10); //设置录像时间

				var main = plus.android.runtimeMainActivity();
				main.startActivityForResult(intent, VIDEOZOOM);
				//获取返回参数
				main.onActivityResult = function(requestCode, resultCode, data) {
					var context = main;
					plus.android.importClass(data);
					var uri = data.getData();
					var resolver = context.getContentResolver();
					plus.android.importClass(resolver);
					var cursor = resolver.query(uri, null, null, null, null);
					plus.android.importClass(cursor);
					cursor.moveToFirst();
					var column = cursor.getColumnIndexOrThrow(MediaStore.Video.Media.DATA);
					// 获取录制的视频路径
					var filePath = cursor.getString(column);
					that.src = filePath;
					//	console.log(that.src);
					that.isshow = !that.isshow;
					that.uploadImage(filePath, 2);


				};
			},

			chooseImage: async function() {
				let imgcount = 3;
				let that = this;
				if (this.imageList.length == 3) {
					let isContinue = await this.isFullImg();
					if (!isContinue) {
						return false;
					}
				}
				uni.chooseImage({
					count: imgcount - this.imageList.length,
					sourceType: ["camera"],
					success: (res) => {
						//console.log(JSON.stringify(res));
						//console.log(res.tempFiles.size);
						this.imageList = this.imageList.concat(res.tempFilePaths);
						res.tempFilePaths.forEach(function(value, key) {
							that.uploadImage(value,1);
						})
					}
				})
			},
			isFullImg: function() {
				return new Promise((res) => {
					uni.showModal({
						content: "最多只能选择3张图片,是否清空现有图片？",
						success: (e) => {
							if (e.confirm) {
								this.imageList = [];
								res(true);
							} else {
								res(false)
							}
						},
						fail: () => {
							res(false)
						}
					})
				})
			},

			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			}
		},
		onLoad: function(e) {
			//console.log(JSON.parse(e.param));
			let param=JSON.parse(e.param);
			this.lifecat = param.lifecat;
			this.pushid=param.pushid;
			this.islogin();
			//console.log(this.lifecat);
			//console.log(param.lifecat);
		},
		onShow: function() {

			this.getcomlist();
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

	/* 两个组件公用一套样式 */
	.imgList {

		display: flex;
		min-height: 260px;
		min-width: 750px;
		flex-wrap: wrap;
		padding: 37.5px 0 0 37.5px;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}

	.imgItem {
		margin: 0 37.5px 37.5px 0;
		/* padding: 0 37.5px 37.5px 0; */
		position: relative;
		/* width: 237.5px;
		height: 237.5px; */
		width: 200px;
		height: 200px;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	/* 添加icon边框 */
	.imgItemBorder {
		border: solid 4px #999999;
	}

	.imgsize {
		width: 200px;
		height: 200px;
		/* background-color: #d8d8d8; */
		border-radius: 6px;
	}

	.close {
		position: absolute;
		top: -25px;
		right: -25px;
		width: 50px;
		height: 50px;
	}

	/* 添加图片的样式 */
	.addIcon {
		font-size: 100px;
	}

	.remarks-title {
		height: 107px;
		width: 750px;
		font-size: 32px;
		color: #666666;
		padding: 0 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}


	.remarks-content {
		min-height: 400px;
		width: 750px;
		background-color: #FFFFFF;
		padding: 30px;
		box-sizing: border-box;
	}

	.remarks-content textarea {
		width: 100%;
		min-height: 375px;
		font-size: 28px;
		line-height: 44px;
		color: #666666;
	}

	/* 输入常用语 */
	.isFix {
		height: 100vh;
		width: 100%;
		z-index: 10;
		background-color: rgba(0, 0, 0, .2);
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.fixmsg {
		position: fixed;
		bottom: 0;
		width: 750px;
		min-height: 0;
	}

	.fix-title,
	.fix-end,
	.fix-item {
		width: 750px;
		height: 88px;
		background-color: #ffffff;
		position: relative;
		border-bottom: 2px solid #f7f7f7;
		padding-left: 30px;
		box-sizing: border-box;
	}

	.fix-title {
		font-size: 36px;
		line-height: 88px;
		text-align: center;
		color: #4a90e2;
	}

	.fix-end {
		font-size: 36px;
		line-height: 88px;
		text-align: center;
		color: #6c6c6c;
	}

	.fix-item {
		line-height: 88px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		font-size: 32px;
		color: #6c6c6c;
	}


	.spinner {
		position: absolute;
		z-index: 1000;
		width: 100px;
		right: 50px;
		top: 50px;
	}

	.videospinner {
		position: absolute;
		z-index: 10000000;
		width: 100px;
		margin-right: 100px;
		margin-top: -200px;

	}
</style>
