<template>
	<view class="page">
		<view class="header">
			<view class="header-left" @tap="backs">
				<text class="icon">&#xe601;</text>
			</view>
			<view class="header-content">
				机构设置
			</view>
			<view class="header-right">

			</view>
		</view>

		<view style="margin-top: 120px;">
			<web-view src="http://223.247.144.84:81/bh/party/index.html"></web-view>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {}
		}
	}
</script>
<style>
	.banner {
		height: 1206px;
		width: 750px;
		background-color: #D8D8D8;
	}

	.banner image {
		width: 100%;
		height: 100%;
	}
</style>
