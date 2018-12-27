<template>
	<view class="imgItem imgItemBorder" @tap="chooseImage">
		<text class="gIcon addIcon" >
			&#xe62a;
		</text>
	</view>
</template>
<script>
	import common from '../common/common.js';
	import {
		mapState
	} from 'vuex';

	export default {
		data() {
			return {
				imageList: [],
				imgurl: "",

			}
		},
		onUnload() {
			this.imageList = []
		},
		computed: {
			...mapState(['user']),
		},
		methods: {
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
						sourceType:["camera"],
						success: (res) => {
							console.log(JSON.stringify(res));
							console.log(res.tempFiles.size);
							this.imageList = this.imageList.concat(res.tempFilePaths);
						    this.$emit("childimages",this.imageList);	
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
		}
	}
</script>
<style>
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
</style>
