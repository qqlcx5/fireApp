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
    <view class="info">
      <view class="info-title">支委会</view>
      <view class="info-msg">
        支委会（每月一次）支部委员会在支部党员大会闭会期间，负责处理党支部日常工作，集体讨论、决定和处理本单位的重大问题。支委会根据工作需要召开，一般每半月召开一次为宜。遇有紧急问题，可随时召开。支委会一般由书记、副书记主持。支部委员会讨论研究的问题，按照《政治工作条例》第四十二条和第二十五条的规定执行。召开支部委员会的基本程序、方法和要求：
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
  }
}
</script>
<style>
.info {
  display: flex;
  flex-direction: column;
  width: 750px;
  min-height: 0px;
}
.info-title {
  width: 750px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #333333;
  font-weight: bold;
}
.info-msg {
  width: 750px;
  padding: 0 30px;
  box-sizing: border-box;
  text-align: justify;
  font-size: 24px;
  line-height: 40px;
  color: #666666;
}
</style>
