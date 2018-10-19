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
    <view class="week-box">
      <view class="week-left">
        <div class="week-left-item select">星期一</div>
        <div class="week-left-item">星期二</div>
        <div class="week-left-item">星期三</div>
        <div class="week-left-item">星期四</div>
        <div class="week-left-item">星期五</div>
        <div class="week-left-item">星期六</div>
        <div class="week-left-item">星期日</div>
      </view>
      <view class="week-right">
        <div class="week-right-time">
          <div class="week-right-time-top">
            2018-10-20
          </div>
          <div class="week-right-time-bottom">
            08:00-16:00
          </div>

        </div>
        <div class="week-right-time">
          <div class="week-right-time-top">
            2018-10-20
          </div>
          <div class="week-right-time-bottom">
            08:00-16:00
          </div>

        </div>
        <div class="week-right-time">
          <div class="week-right-time-top">
            2018-10-20
          </div>
          <div class="week-right-time-bottom">
            08:00-16:00
          </div>

        </div>
        <div class="week-right-item">
          王天宝
        </div>
        <div class="week-right-item">
          李志强
        </div>
        <div class="week-right-item">
          陈钦
        </div>
        <div class="week-right-item">
          李志强
        </div>
        <div class="week-right-item">
          李国人
        </div>
        <div class="week-right-item">
          张茆
        </div>
        <div class="week-right-item">
          周镇
        </div>
        <div class="week-right-item">
          吴左右
        </div>
        <div class="week-right-item">
          周凯
        </div>
        <div class="week-right-item">
          李志强
        </div>
        <div class="week-right-item">
          纪时
        </div>
        <div class="week-right-item">
          李志强
        </div>
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
.week-box {
  display: flex;
  width: 750px;
  min-height: 730px;
  margin-top: 60px;
}
.week-left {
  width: 130px;
  min-height: 730px;
  display: flex;
  flex-direction: column;
}
.week-left-item {
  width: 130px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  background-color: #c12158;
  border-radius: 0 35px 35px 0;
  margin-bottom: 40px;
  color: #ffffff;
}
.week-left .select {
  background-color: #e45252;
}
.week-right {
  flex: 1;
  min-height: 730px;
  display: flex;
  flex-wrap: wrap;
  /* background-color: #ccc; */
  padding: 0 20px 0 30px;
  box-sizing: border-box;
}
.week-right-time {
  width: 180px;
  height: 134px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px #e6e6e6;
  border-radius: 12px;
  margin: 0 10px 10px 0;
  font-size: 28px;
  color: #666666;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.week-right-time-top {
  width: 180px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 24px;
  background-color: #ffffff;
}
.week-right-time-bottom {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  background-color: #d0021b;
  font-size: 26px;
  color: #ffffff;
}
.week-right-item {
  width: 180px;
  height: 134px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px #e6e6e6;
  border-radius: 12px;
  margin: 0 10px 10px 0;
  font-size: 28px;
  color: #666666;
  line-height: 134px;
  text-align: center;
}
</style>
