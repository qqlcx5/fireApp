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
			<view class="page-section">
				<view class="page-body-info">
					<template v-if="!src">
						<view class="image-plus image-plus-nb" @tap="chooseVideo">
							<view class="image-plus-horizontal"></view>
							<view class="image-plus-vertical"></view>
							<view class="image-plus-text">添加视频</view>
						</view>

					</template>
					<template v-else>
						<video :src="src" class="video"></video>
					</template>
				</view>
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

				src: ''
			}
		},
		onUnload() {
			this.src = ''
		},
		computed: {
			...mapState(['user']),
		},
		methods: {
			chooseVideo: function() {
				uni.chooseVideo({
					success: (res) => {
						this.src = res.tempFilePath;
						this.uploadImage(this.src);
						console.log(this.src);
					}
				})
			},
			uploadImage: function(e) {

				let that = this;
				const uploadTask = uni.uploadFile({
					url: common.hosturl + "Upload/uploadfile.html",
					filePath: e,
					name: "file",
					formData: {
						token: this.user.user.token
					},
					success: (uploadFileRes) => {
						console.log(JSON.stringify(uploadFileRes));
						/* self.src = res.tempFilePath;

						uni.saveVideoToPhotosAlbum({
							filePath: res.tempFilePath,
							success: function() {
								console.log('save success');
							}
						}); */
					},
				});



				/* uploadTask.onProgressUpdate((res) => {
									console.log('上传进度' + res.progress);
									console.log('已经上传的数据长度' + res.totalBytesSent);
									console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
			
								}); */
			},

		}
	}
</script>

<style>
	@import "../../common/uni.css";

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
