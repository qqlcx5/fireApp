<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @click="goback()">
        <text class="icon">&#xe601;</text>
      </view>
      <view class="header-content">
        请假详情
      </view>
      <view class="header-right">
        <text class="icon">&#xe622;</text>
      </view>
    </view>
    <view class="list">
      <view class="item">
        <text class="item-name">申请人</text>
        <text class="item-info">李国人</text>
      </view>
      <view class="item">
        <text class="item-name">类型</text>
        <text class="item-info">病假</text>
      </view>
      <view class="item">
        <text class="item-name">时间</text>
        <text class="item-info">10月02日 9:00—10月04日 18:00</text>
      </view>
      <view class="item">
        <text class="item-detail">因为生病发烧，从018年10月02日，到10月04日请假两天，请领导批准。</text>
      </view>
      <view class="item">
        <image class="item-img"
               src="../../static/banner.jpeg" />
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
  min-height: 110px;
  line-height: 110px;
  padding: 0 30px;
  box-sizing: border-box;
  border-bottom: solid 2px #e6e6e6;
}
.item-name {
  width: 130px;
  color: #999999;
}
.item-info {
  color: #666666;
}
.item-detail {
  line-height: 44px;
  color: #666666;
  margin: 30px 0;
}
.item-img {
  width: 200px;
  height: 200px;
  background-color: #d8d8d8;
  border-radius: 12px;
  margin: 30px 0;
}
</style>
