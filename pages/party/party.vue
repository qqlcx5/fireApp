<template>
  <view class="page">
    <view class="header">
      <view class="header-left"></view>
      <view class="header-content">
        包河消防
      </view>
      <view class="header-right"
            >
        <text class="icon">&#xe622;</text>
      </view>
    </view>
    <view class="banner">
      <image src="../../static/partyBanner.jpg" />
    </view>
    <view class="list">
      <view class="item">
        <image src="../../static/party1.png" />
        <text class="item-name">机构设置</text>
      </view>
      <view class="item"
            @click="goTo('zuzhishenghuo')">
        <image src="../../static/party2.png" />
        <text class="item-name">组织生活</text>
      </view>
      <view class="item"
            @click="goTo('xuexijingyan')">
        <image src="../../static/party3.png" />
        <text class="item-name">党建经验</text>
      </view>
      <view class="item"
            @click="goTo('xuexijingyan')">
        <image src="../../static/party4.png" />
        <text class="item-name">学习经验</text>
      </view>
    </view>
  </view>

</template>
<script>

export default {
  data () {
    return {}
  },
  methods: {
    goTo (url) {
      uni.navigateTo({
        url: url
      })
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
  overflow: hidden;
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

.banner {
  height: 375px;
  width: 750px;
  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;
}
.banner image {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
.list {
  min-height: 100px;
  width: 720px;
  margin: 30px 0 0 30px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
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
</style>
