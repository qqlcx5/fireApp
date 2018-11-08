<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @tap="backs">
        <text class="icon">&#xe601;</text>
      </view>
      <view class="header-content">
        密码管理
      </view>
      <view class="header-right">
        <text class="icon">&#xe622;</text>
      </view>
    </view>
		<form>
    <view class="list">
      <view class="item mgt20">
        <text class="gIcon mgl30 mgr20">&#xe640;</text>
        <input type="text"
               class="item-name"
               placeholder="请输入旧密码">
      </view>
      <view class="item mgt20">
        <text class="gIcon mgl30 mgr20">&#xe640;</text>
        <input type="text"
               class="item-name"
               placeholder="设置新密码">
      </view>
      <view class="item">
        <text class="gIcon mgl30 mgr20">&#xe640;</text>
        <input type="text"
               class="item-name"
               placeholder="请再次输入新密码">
      </view>
    </view>
    <view class="desc">
      <text class="desc-text">必须是6-20个英文字母、数字或符号(除空格)，且字母、数字和标点符号至少包含两种</text>
    </view>
    <view class="keep">
      <view class="btn">
        登录
      </view>
    </view>
		</form>

  </view>

</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
 
  }
}
</script>
<style>
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
.desc {
  width: 750px;
  min-height: 0px;
  margin: 20px 0 40px;
  padding: 0 30px;
  box-sizing: border-box;
}
.desc-text {
  font-size: 24px;
  color: #999999;
  text-align: justify;
}
.keep {
  width: 750px;
  min-height: 100px;
  display: flex;
  justify-content: center;
}
</style>
