<template>
	<view>
		<view class="header">
			<view class="header-left"></view>
			<view class="header-content">
				战备训练
			</view>
			<view class="header-right"></view>
		</view>
		<view class="page-body">
			<form>
				<view class="page-section">
					<view class="uni-list list-pd">
						<view class="uni-list-cell cell-pd">
							<view class="uni-uploader">
								<view class="uni-uploader-head">
									<view class="uni-uploader-title" @tap="govo">点击可预览选好的图片</view>
									<view class="uni-uploader-info">{{imageList.length}}/3</view>
								</view>
								<view class="uni-uploader-body">
									<view class="uni-uploader__files">
										<block v-for="(image,index) in imageList" :key="index">
											<view class="uni-uploader__file">
												<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
												<view class="close" @tap="delImage(index)">
													<image src="../../static/close.png"></image>
												</view>
											</view>
										</block>
									</view>
									<view class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImage"></view>
									</view>
								</view>
							</view>
						</view>
					</view>

				</view>
			</form>
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
				imageList: [],
				//imageListStr:""

			}
		},
		onUnload() {
			this.imageList = [],
				this.imageListStr = ""
		},
		computed: {
			...mapState(['user']),
		},
		methods: {

            govo:function(){
				uni.redirectTo({
					url:"video"
				})
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
						success: (res) => {
							this.imageList = this.imageList.concat(res.tempFilePaths);
						//	console.log(JSON.stringify(res))
							res.tempFilePaths.forEach(function(value, key) {
								that.uploadImage(value);
							})
						}
					})
				},
				delImage: function(e) {
					this.imageList.splice(e, 1);
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
				uploadImage: function(e) {

					let that = this;
					const uploadTask = uni.uploadFile({
						url: common.hosturl + "Upload/uploadfile.html",
						filePath:e,
						name:"file",
						formData: {
							token: this.user.user.token
						},
						success: (uploadFileRes) => {
							console.log(JSON.stringify(uploadFileRes));
						},
					});

					/* uploadTask.onProgressUpdate((res) => {
						console.log('上传进度' + res.progress);
						console.log('已经上传的数据长度' + res.totalBytesSent);
						console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);

					}); */
				},
				previewImage: function(e) {
					var current = e.target.dataset.src
					uni.previewImage({
						current: current,
						urls: this.imageList
					})
				}
		}
	}
</script>

<style>
	@import "../../common/uni.css";

	.cell-pd {
		padding: 22upx 30upx;
	}

	.list-pd {
		margin-top: 50upx;
	}

	.close {
		position: absolute;
		width: 30px;
		height: 30px;
		margin-left: 150upx;
		margin-top: -158upx;
		z-index: 10px;
	}

	.close image {
		width: 100%;
		height: 100%;
	}
	
	.page-body-info {
		display: flex;
		margin-top: 40upx;
		padding: 0;
		height: 360upx;
		border-top: 1upx solid #D9D9D9;
		border-bottom: 1upx solid #D9D9D9;
		align-items: center;
		justify-content: center;
	}
</style>
