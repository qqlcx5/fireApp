<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @click="goback()">
        <text class="icon">&#xe601;</text>
      </view>
      <view class="header-content">
        岗哨
      </view>
      <view class="header-right">
        <text class="icon">&#xe622;</text>
      </view>
    </view>
    <view class="tab-title">
      <view class="tab select">课表安排</view>
      <view class="tab">访客签到</view>
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
.tab-title {
  width: 750px;
  height: 70px;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.tab-title .tab {
  width: 280px;
  height: 70px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 2px #e45252;
  box-sizing: border-box;
  color: #666666;
}
.tab-title .select {
  background-color: #d0021b;
  color: #ffffff;
}
.tab-title .tab:nth-child(1) {
  border-radius: 12px 0 0 12px;
}
.tab-title .tab:nth-child(2) {
  border-radius: 0 12px 12px 0;
}
</style>
