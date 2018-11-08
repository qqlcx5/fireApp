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
      <view class="info-title">党员汇报制度</view>

    </view>
    <view class="article">
      <text class="text"
            decode=true>&emsp;&emsp;党员汇报制度（每两月一次）党员汇报是党员每月向党组织汇报思想和工作情况，进而增强党组织与党员的联系，加强党员队伍管理的制度。</text>
      <image src='../../static/zuzhishenghouinfo5.png'
             class="message-img" />
      <text class="text"
            decode=true>&emsp;&emsp;党员汇报每两个月组织一次，遇有重要问题时及时汇报，外出时间较长时，作书面汇报。党员汇报的主要内容是：党员个人的思想、工作、学习、作风、执行支部决议情况，个人实际困难和问题，群众的情况和要求，周围的好人好事和不良倾向，对支部工作的意见和建议等。每次汇报，要有中心，言简意赅，主次分明，主要把自己感受体会最深的问题和意见汇报出来。遇到重大问题，应迅速、如实、详细汇报，绝不能隐瞒事实和自己的观点。</text>

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
