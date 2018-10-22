<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @click="goback()">
        <text class="icon">&#xe601;</text>
      </view>
      <view class="header-content">
        组织生活
      </view>
      <view class="header-right">
        <text class="icon">&#xe622;</text>
      </view>
    </view>
    <view class="list">
      <view class="item"
            @click="goTo('zuzhishenghouinfo1')">
        <image src="../../static/zuzhishenghuo1.png"
               mode="" />
        党小组会
      </view>
      <view class="item"
            @click="goTo('zuzhishenghouinfo2')">
        <image src="../../static/zuzhishenghuo2.png"
               mode="" />
        党日制度
      </view>
      <view class="item"
            @click="goTo('zuzhishenghouinfo3')">
        <image src="../../static/zuzhishenghuo3.png"
               mode="" />
        党课制度
      </view>
      <view class="item"
            @click="goTo('zuzhishenghouinfo4')">
        <image src="../../static/zuzhishenghuo4.png"
               mode="" />
        党员汇报制度
      </view>
      <view class="item"
            @click="goTo('zuzhishenghouinfo5')">
        <image src="../../static/zuzhishenghuo5.png"
               mode="" />
        支委会
      </view>
      <view class="item"
            @click="goTo('zuzhishenghouinfo6')">
        <image src="../../static/zuzhishenghuo6.png"
               mode="" />
        民主评议党员制度
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
  min-height: 100px;
  width: 720px;
  margin: 30px 0 0 30px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 330px;
  height: 160px;
  background-color: #fff;
  margin: 0 30px 30px 0;
  border-radius: 12px;
  box-sizing: border-box;
  font-size: 32px;
  color: #666666;
  box-shadow: 0px 4px 8px 0px #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item image {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
</style>
