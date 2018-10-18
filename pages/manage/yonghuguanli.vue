<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @click="goback()">
        <text class="icon">&#xe601;</text>
      </view>
      <view class="header-content">
        用户信息
      </view>
      <view class="header-right">
        <text class="icon">&#xe622;</text>
      </view>
    </view>
    <view class="list">
      <view class="item">
        <view class="border">
          <text class="item-name">个人资料</text>
          <text class="gIcon">&#xe661;</text>
        </view>

      </view>
      <view class="item">
        <view class="border">
          <text class="item-name">密码管理</text>
          <text class="gIcon">&#xe661;</text>
        </view>
      </view>
      <view class="item">
        <view class="border">
          <text class="item-name">用户身份</text>
          <text class="gIcon">&#xe661;</text>
        </view>
      </view>
      <view class="item">
        <view class="border">
          <text class="item-name">常用分组</text>
          <text class="gIcon">&#xe661;</text>
        </view>
      </view>
      <view class="item">
        <view class="border">
          <text class="item-name">清除缓存</text>
          <text class="item-clear">338M</text>
          <text class="gIcon">&#xe661;</text>
        </view>
      </view>
    </view>
    <view class="account">
      <view class="btn mgt20">
        切换账号
      </view>
      <view class="btn btn-out mgt40">
        退出登录
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
.list {
  min-height: 200px;
  width: 710px;
  margin: 20px;
  background-color: #fff;
  display: flex;
  font-size: 28px;
  flex-direction: column;
}
.item {
  height: 100px;
  width: 710px;
  display: flex;
  padding: 0 40px;
  box-sizing: border-box;
}
.item .border {
  height: 100px;
  width: 710px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eee;
}
.item-name {
  flex: 1;
  font-size: 32px;
  color: #666666;
}
.item-clear {
  font-size: 32px;
  color: #999999;
}
.account {
  width: 750px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.account .btn {
  width: 490px;
  height: 88px;
  border-radius: 12px;
  border: solid 2px #d0021b;
  line-height: 88px;
  text-align: center;
  font-size: 36px;
  color: #d0021b;
}
.account .btn-out {
  background-color: #d0021b;
  color: #ffffff;
}
</style>
