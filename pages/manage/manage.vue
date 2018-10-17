<template>
  <view class="page">
    <view class="header-box">
      <view class="header">
        <view class="header-left"></view>
        <view class="header-content">
          我的管理
        </view>
        <view class="header-right">
          <text class="icon">&#xe622;</text>
        </view>
      </view>
      <view class="banner">
        <image src="../../static/Party.png" />
        <text>李志强</text>
        <text class="banner-desc">职务：消防一队组长</text>
      </view>
    </view>

    <view class="list">
      <view class="item">
        <text class="gIcon mgl30 mgr20">&#xe77e;</text>
        <view class="item-name">用户信息</view>
        <text class="gIcon mgr30">&#xe661;</text>
      </view>
      <view class="item">
        <text class="gIcon mgl30 mgr20">&#xe608;</text>
        <view class="item-name">行政管理</view>
        <text class="gIcon mgr30">&#xe661;</text>
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
    goback: function () {
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>
<style>
.header-box {
  height: 420px;
  width: 750px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(90deg, #e75551 0%, #c43164 100%);
  box-shadow: 0px 4px 8px 0px #e6e6e6;
}
.header {
  height: 128px;
  width: 100%;
  display: flex;
  padding-top: 40px;
  box-sizing: border-box;
  padding-top: 20px;
  align-items: center;
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
  color: #ffffff;
}
.banner {
  height: 292px;
  width: 750px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}
.banner image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 30px 0;
}
.banner-desc {
  margin-top: 10px;
  font-size: 28px;
}
.list {
  min-height: 110px;
  width: 750px;
  display: flex;
  flex-direction: column;
}
.item {
  width: 750px;
  height: 110px;
  border-bottom: 2px solid #e6e6e6;
  background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 32px;
  color: #6c6c6c;
}
.item-name {
  flex: 1;
}
</style>
