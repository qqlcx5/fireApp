<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @click="goback()">
        <text class="icon">&#xe601;</text>
      </view>
      <view class="header-content">
        包河消防
      </view>
      <view class="header-right">
        <text class="icon">&#xe622;</text>
      </view>
    </view>
    <view class="list mgt20">
      <view class="item">
        <image src="../../static/zhiqin1.png"
               class="car-img" />
        <view class="item-name">消防车辆管理</view>
      </view>
      <view class="item">
        <image src="../../static/zhiqin2.png"
               class="gangshao-img" />
        <view class="item-name">岗哨</view>
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
  min-height: 400px;
  width: 750px;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 373px;
  height: 204px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 4px 4px 0;
}
.item:nth-child(2n) {
  margin-right: 0;
}

.car-img {
  width: 160px;
  height: 80px;
}
.gangshao-img {
  width: 80px;
  height: 80px;
}
.item-name {
  line-height: 80px;
  font-size: 32px;
  color: #999999;
}
</style>
