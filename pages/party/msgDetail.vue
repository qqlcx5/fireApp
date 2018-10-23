<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @click="goback()">
        <text class="icon">&#xe601;</text>
      </view>
      <view class="header-content">
        党建经验
      </view>
      <view class="header-right">
        <text class="icon">&#xe622;</text>
      </view>
    </view>
    <view class="message-info">
      <view class="title">
        <text class="title-name">做党外知识分子工作就要改方法</text>
        <text class="title-desc">党建/资讯</text>
      </view>
      <view class="message-user">
        <image class="user-left"
               src="../../static/user.jpeg" />
        <view class="user-right mgl20">
          <text class="user-name">陈浩</text>
          <text class="user-time">10-13 13:35</text>
        </view>

      </view>
      <view class="article">
        <text class="text"ecode=true>&emsp;&emsp;上海，中国共产党的诞生地，中国近代工业和中国工人阶级的发祥地。
          如何在全面从严治党方面有新作为？</text>
        <image src='../../static/banner.jpeg'
               class="message-img" />
        <text class="text"ecode=true>&emsp;&emsp;抓住落实管党治党主体责任和监督责任这个“牛鼻子”，
          上海聚焦领导干部这个“关键少数”，从严管好各级领导干部。2015年5月，
          上海出台《关于进一步规范本市领导干部配偶、子女及其配偶经商办企业行为的规定（试行）》
          ，严防“一家两制”，严管“家属经商”，从制度上堵住贪腐的“蚁穴”。</text>
        <text class="text"ecode=true>&emsp;&emsp;在规范工作中，上海市334家单位的2133名市管干部，就配偶、子女及其配偶经商办企业情况作专项申报，并由相关部门一一甄别核实。领导干部在摆进去、照镜子的同时，进一步强化了纪律和规矩意识，知敬畏、明底线。</text>
        <text class="text"ecode=true>&emsp;&emsp;基层是党的执政之基、力量之源。5年来，上海把加强基层党的建设、巩固党的执政基础作为一条红线，贯穿创新社会治理、加强基层建设的始终，夯实基层基础，不断探索符合超大城市特点的城市基层党建新路。</text>
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
.page {
  display: flex;
  flex-direction: column;
  width: 750px;
  min-height: 100vh;
}
.message-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 750px;
  background-color: #fff;
}
.title {
  height: 44px;
  display: flex;
  width: 750px;
  padding: 0 30px;
  box-sizing: border-box;
  color: #323038;
  margin: 40px 0;
  align-items: flex-end;
}
.title-name {
  font-weight: bold;
  flex: 1;
}
.title-desc {
  font-size: 24px;
  color: #67ba61;
}
.message-user {
  display: flex;
  padding: 0 30px;
  height: 100px;
  width: 750px;
  margin-bottom: 30px;
}
.user-left {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.user-right {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.user-name {
  font-size: 28px;
  line-height: 40px;
  color: #666666;
  margin-bottom: 10px;
}
.user-time {
  font-size: 24px;

  color: #b6b4b7;
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
  line-height: 34px;
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
