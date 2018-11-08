<template>
  <view class="page">
    <view class="banner">
      <image src="../../static/login.png" />
    </view>
    <view class="list">
      <view class="item  ">
        <text class="gIcon mgl30 mgr20">&#xe615;</text>
        <input type="text"
               class="item-name"
               placeholder="请输入账号"
							 v-model="account">
      </view>
      <view class="item  ">
        <text class="gIcon mgl30 mgr20">&#xe640;</text>
        <input type="text"
               class="item-name"
               placeholder="请输入密码">
      </view>
    </view>
    <view class="keep">
      <view class="btn" @tap="bindlogin">
        登录
      </view>
    </view>

  </view>

</template>
<script>
export default {
  data () {
    return {
		account:''
    }
  },
  methods: {
   
		bindlogin(){
			if(this.account.length<5){
				uni.showToast({
					icon:'none',
					title:'账号最短为5个字符'
				})
				return
			}
		}
  }
}
</script>
<style>
.page {
  height: 100vh;
  width: 750px;
  background-color: #fff;
}
.banner {
  width: 750px;
  height: 386px;
  overflow: hidden;
}
.banner image {
  width: 100%;
  height: 100%;
}
.list {
  min-height: 110px;
  width: 750px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.item {
  width: 750px;
  height: 110px;
  display: flex;
  align-items: center;
  font-size: 32px;
  color: #6c6c6c;
  border-bottom: solid 2px #e6e6e6;
}

.item-name {
  flex: 1;
}
.keep {
  width: 750px;
  min-height: 100px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
}
</style>
