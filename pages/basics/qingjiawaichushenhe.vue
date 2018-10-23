<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @click="goback()">
        <text class="icon">&#xe601;</text>
      </view>
      <view class="header-content">
        请假外出
      </view>
      <view class="header-right">
        <text class="icon">&#xe6df;</text>
      </view>
    </view>
    <view class="list">
      <view class="item">
        <view class="item-img">
          <image src="../../static/user.jpeg" />
        </view>
        <view class="item-left">
          <text class="item-name">李志强的公差申请</text>
          <text class="item-desc">公差事由：借调</text>
          <text class="item-detail">查看详情</text>

        </view>
        <view class="item-right">
          <text class="item-time">2018-10-22 14:52</text>
          <text class="item-approval">等待审批</text>
        </view>
      </view>
      <view class="item">
        <view class="item-img">
          <image src="../../static/user.jpeg" />
        </view>
        <view class="item-left">
          <text class="item-name">李志强的公差申请</text>
          <text class="item-desc">公差事由：借调</text>
          <text class="item-detail">查看详情</text>

        </view>
        <view class="item-right">
          <text class="item-time">2018-10-22 14:52</text>
          <text class="item-approval">等待审批</text>
        </view>
      </view>
      <view class="item">
        <view class="item-img">
          <image src="../../static/user.jpeg" />
        </view>
        <view class="item-left">
          <text class="item-name">李志强的公差申请</text>
          <text class="item-desc">公差事由：借调</text>
          <text class="item-detail">查看详情</text>

        </view>
        <view class="item-right">
          <text class="item-time">2018-10-22 14:52</text>
          <text class="item-approval">等待审批</text>
        </view>
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
.list {
  display: flex;
  flex-direction: column;
  min-height: 0px;
  width: 750px;
}
.item {
  display: flex;
  padding: 30px;
  box-sizing: border-box;
  height: 180px;
  border-bottom: solid 2px #e6e6e6;
}
.item-img {
  width: 100px;
  height: 120px;
  /* background-color: #ddd; */
  display: flex;
  align-items: center;
}
.item-img image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.item-left {
  flex: 1;
  height: 120px;
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
}
.item-name {
  font-size: 28px;
  color: #666666;
  margin-bottom: 10px;
}
.item-desc {
  font-size: 24px;
  color: #999999;
  margin-bottom: 10px;
}
.item-detail {
  font-size: 24px;
  color: #4a90e2;
}
.item-right {
  min-width: 200px;
  height: 120px;
  /* background-color: #eee; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.item-time {
  font-size: 24px;
  color: #999999;
  margin-bottom: 40px;
}
.item-approval {
  font-size: 28px;
  color: #e45252;
}
</style>
