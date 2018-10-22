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
      <view class="info-title">党日制度</view>
      <view class="info-msg">
        党日制度（每周一次）党日是党的组织和党员进行党的活动的专门时间。根据《政治工作条例》规定,每周用半天时间进行党的组织活动。每月的四个党日时间,一般两个用于党的教育,两个用于召开党的会议,处理支部业务或进行党的其他活动。党日时间必要时可以集中使用，但集中党日时间进行教育一般限于当月，且每年集中次数不宜过多，保证党日活动经常化。
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
