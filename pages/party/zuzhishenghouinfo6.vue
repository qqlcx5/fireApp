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
      <view class="info-title">民主评议党员制度</view>
      <view class="info-msg">
        民主评议党员制度（每年一次）民主评议党员制度是党组织依据党员标准对每个党员在各项工作中的表现和作用作出客观的评价，促使每一名党员自觉接受群众监督的一项重要组织生活制度。坚持这一制度对于强化民主监督、激励党员保持先进性、纯洁党员队伍具有重要意义。民主评议党员通常采取党内与党外相结合的方法，每年至少开展一次，一般结合半年工作总结进行。
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
