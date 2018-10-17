<template>
  <view class="page">
    <view class="header">
      <!-- <view class="header-left"
            @click="goback()">
        <text class="icon">&#xe601;</text>
      </view> -->
      <view class="header-left"></view>
      <view class="header-content">
        包河消防
      </view>
      <view class="header-right"
            @click="goTo('message')">
        <text class="icon">&#xe622;</text>
      </view>
    </view>
    <view class="banner">
      <image src="../../static/banner.jpeg" />
    </view>
    <view class="notify">
      <text class="icon notifyIcon mgl20 mgr20">&#xe600;</text>
      <text>第四届全国119消防奖拟表彰对象公示</text>

    </view>
    <view class="list mgt20">
      <view class="item"
            @click="goTo('zhiqin')">
        <image src="../../static/basics1.png" />
        <view class="item-name mgl20">执 勤</view>
      </view>
      <view class="item">
        <image src="../../static/basics2.png" />
        <view class="item-name mgl20">考 勤</view>
      </view>
      <view class="item"
            @click="goTo('weishengqujian')">
        <image src="../../static/basics3.png" />
        <view class="item-name mgl20">卫生区检</view>
      </view>
      <view class="item">
        <image src="../../static/basics4.png" />
        <view class="item-name mgl20">请假外出</view>
      </view>
      <view class="item">
        <image src="../../static/basics5.png" />
        <view class="item-name mgl20">装备检查</view>
      </view>
      <view class="item">
        <image src="../../static/basics6.png" />
        <view class="item-name mgl20">训练计划</view>
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
    },
    goTo (url) {
      uni.navigateTo({
        url: url
      })
    }
  }
}
</script>
<style>
.header {
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
}

.banner {
  height: 375px;
  width: 750px;
  overflow: hidden;
}
.banner image {
  width: 100%;
  height: 100%;
}
.notify {
  height: 100px;
  width: 750px;
  background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 28px;
  color: #666666;
}
.notifyIcon {
  color: #d0021b;
}
.list {
  min-height: 100px;
  width: 750px;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 373px;
  height: 160px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px 4px 0;
}
.item:nth-child(2n) {
  margin-right: 0;
}

.item image {
  width: 80px;
  height: 80px;
}
.item-name {
  width: 140px;
  height: 80px;
  line-height: 80px;
  font-size: 32px;
  color: #666666;
}
</style>
