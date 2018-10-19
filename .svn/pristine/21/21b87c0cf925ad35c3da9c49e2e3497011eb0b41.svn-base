<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @click="goback()">
        <text class="icon">&#xe601;</text>
      </view>
      <view class="header-content">
        卫生区检
      </view>
      <view class="header-right">
        <text class="icon">&#xe622;</text>
      </view>
    </view>
    <view class="table">
      <view class="table-row">
        <view class="row-left">
          <text>10月23日</text>
          <text>检查项目</text>
        </view>
        <view class="row-content">检查截图</view>
        <view class="row-right">整改要求</view>
      </view>
      <view class="table-row">
        <view class="row-left">
          <text>1.行车证件</text>
        </view>
        <view class="row-content">
          <text class="gIcon">&#xe603;</text>
          <text class="row-content-desc">请输入检查结果</text>
        </view>
        <view class="row-right"><input type="text"></view>
      </view>
      <view class="table-row">
        <view class="row-left">
          <text>2.安全带</text>
        </view>
        <view class="row-content">
          <text class="gIcon">&#xe603;</text>
          <text class="row-content-desc">请输入检查结果</text>
        </view>
        <view class="row-right"><input type="text"></view>
      </view>
      <view class="table-row">
        <view class="row-left">
          <text>3.转向</text>
        </view>
        <view class="row-content">
          <text class="gIcon">&#xe603;</text>
          <text class="row-content-desc">请输入检查结果</text>
        </view>
        <view class="row-right"><input type="text"></view>
      </view>
      <view class="table-row">
        <view class="row-left">
          <text>4.刹车</text>
        </view>
        <view class="row-content">
          <text class="gIcon">&#xe603;</text>
          <text class="row-content-desc">请输入检查结果</text>
        </view>
        <view class="row-right"><input type="text"></view>
      </view>
      <view class="table-row">
        <view class="row-left">
          <text>5.轮胎</text>
        </view>
        <view class="row-content">
          <text class="gIcon">&#xe603;</text>
          <text class="row-content-desc">请输入检查结果</text>
        </view>
        <view class="row-right"><input type="text"></view>
      </view>
      <view class="table-row">
        <view class="row-left">
          <text>6.地盘、钢板
            总成</text>
        </view>
        <view class="row-content">
          <text class="gIcon">&#xe603;</text>
          <text class="row-content-desc">请输入检查结果</text>
        </view>
        <view class="row-right"><input type="text"></view>
      </view>
      <view class="table-row">
        <view class="row-left">
          <text>7.引擎</text>
        </view>
        <view class="row-content">
          <text class="gIcon">&#xe603;</text>
          <text class="row-content-desc">请输入检查结果</text>
        </view>
        <view class="row-right"><input type="text"></view>
      </view>
      <view class="table-row">
        <view class="row-left">
          <text>8.电路、油路</text>
        </view>
        <view class="row-content">
          <text class="gIcon">&#xe603;</text>
          <text class="row-content-desc">请输入检查结果</text>
        </view>
        <view class="row-right"><input type="text"></view>
      </view>
      <view class="table-row">
        <view class="row-left">
          <text>9.喇叭、雨刷</text>
        </view>
        <view class="row-content">
          <text class="gIcon">&#xe603;</text>
          <text class="row-content-desc">请输入检查结果</text>
        </view>
        <view class="row-right"><input type="text"></view>
      </view>
      <view class="table-row">
        <view class="row-left">
          <text>10.车门锁</text>
        </view>
        <view class="row-content">
          <text class="gIcon">&#xe603;</text>
          <text class="row-content-desc">请输入检查结果</text>
        </view>
        <view class="row-right"><input type="text"></view>
      </view>
      <view class="table-row">
        <view class="row-left">
          <text>11.后视镜</text>
        </view>
        <view class="row-content">
          <text class="gIcon">&#xe603;</text>
          <text class="row-content-desc">请输入检查结果</text>
        </view>
        <view class="row-right"><input type="text"></view>
      </view>

    </view>
    <view class="agree">
      <text>故障通知管理员</text>
      <text class="gIcon mgt20">&#xe604;</text>
    </view>
    <view class="submit">
      <view class="btn gbtn"> 提交</view>
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
.table-row {
  display: flex;
  min-height: 88px;
  width: 750px;
  font-size: 28px;
  color: #666666;
}
.row-left,
.row-right {
  width: 180px;
  min-height: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-right: 2px solid #e6e6e6;
  border-bottom: 2px solid #e6e6e6;
  box-sizing: border-box;
}
.row-content {
  flex: 1;
  min-height: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-right: 2px solid #e6e6e6;
  border-bottom: 2px solid #e6e6e6;
}
.row-content-desc {
  font-size: 24px;
  color: #e6e6e6;
}
.agree {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 180px;
  background-color: #fff;
  justify-content: center;
  padding-left: 30px;
  box-sizing: border-box;
  border-bottom: 2px solid #e6e6e6;
}
.submit {
  width: 750px;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.gbtn {
  background-color: #67ba61;
}
</style>
