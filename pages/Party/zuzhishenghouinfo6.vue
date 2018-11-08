<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @tap="backs">
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
      <view class="info-title">民主评议党员制度</view>

    </view>
    <view class="article">
      <text class="text"
            decode=true>&emsp;&emsp; 民主评议党员制度（每年一次）民主评议党员制度是党组织依据党员标准对每个党员在各项工作中的表现和作用作出客观的评价，促使每一名党员自觉接受群众监督的一项重要组织生活制度。</text>
      <image src='../../static/zuzhishenghouinfo6.png'
             class="message-img" />
      <text class="text"
            decode=true>&emsp;&emsp;坚持这一制度对于强化民主监督、激励党员保持先进性、纯洁党员队伍具有重要意义。民主评议党员通常采取党内与党外相结合的方法，每年至少开展一次，一般结合半年工作总结进行。</text>

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
page {
  width: 750px;
  min-height: 100vh;
  background-color: #fff;
}
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
.article {
  display: flex;
  flex-direction: column;
  width: 750px;
  min-height: 0px;
  padding: 0 30px;
  box-sizing: border-box;
}
.text {
  line-height: 40px;
  font-size: 24px;
  color: #666666;
  margin-bottom: 30px;
  display: block;
  text-align: justify;
}
.message-img {
  width: 670px;
  height: 320px;
  background-color: #d8d8d8;
  box-shadow: 0px 4px 8px 0px #e5e5e5;
  border-radius: 12px;
  margin: 0 auto 30px;
}
</style>
