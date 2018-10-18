<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @click="goback()">
        <text class="icon">&#xe601;</text>
      </view>
      <view class="header-content">
        检查列表
      </view>
      <view class="header-right">
        <text class="icon">&#xe622;</text>
      </view>
    </view>
    <view class="add-box">
      <view class="addbtn mgr30">添加</view>
    </view>
    <view class="list">
      <view class="item">
        <text class="gIcon mgl30 mgr20 right">&#xe6a6;</text>
        <view class="item-name">2018-10-22 检查</view>
        <text class="right mgr20">合格</text>
        <text class="gIcon mgr30">&#xe619;</text>
      </view>
      <view class="item">
        <text class="gIcon mgl30 mgr20 fail">&#xe6a6;</text>
        <view class="item-name">2018-10-22 检查</view>
        <text class="right mgr20 fail">不合格</text>
        <text class="gIcon mgr30">&#xe619;</text>
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
    }
  }
}
</script>
<style>
/* .header {
  height: 128px;
  width: 100%;
  display: flex;
  padding-top: 40px;
  box-sizing: border-box;
  padding-top: 20px;
  align-items: center;
  background-color: #d0021b;
  box-shadow: 0px 4px 8px 0px #e6e6e6;
}

.header-left,
.header-right {
  width: 88px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-content {
  flex: 1;
  font-size: 36px;
  text-align: center;
  font-size: 36px;
  color: #ffffff;
} */
.add-box {
  width: 750px;
  height: 80px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.add-box .addbtn {
  width: 112px;
  height: 56px;
  border-radius: 12px;
  border: solid 2px #d0021b;
  font-size: 28px;
  color: #d0021b;
  text-align: center;
  line-height: 56px;
}
.list {
  min-height: 110px;
  width: 750px;
  display: flex;
  flex-direction: column;
}
.item {
  width: 750px;
  height: 110px;
  border-bottom: 2px solid #e6e6e6;
  background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 32px;
  color: #6c6c6c;
}
.item-name {
  flex: 1;
}
.right {
  color: #67ba61;
}
.fail {
  color: #d0021b;
}
</style>
