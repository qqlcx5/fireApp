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
      	<!-- <image src="../../static/list.png" style="width:45px; height:45px; margin-top: 10px;"></image> -->
      </view>
    </view>
    <view class="info">
      <view class="info-title">支部党员大会</view>

    </view>
    <view class="article">
			<image src='../../static/zuzhishenghouinfo7.png'
						class="message-img" />
      <text class="text"
            decode=true>&emsp;&emsp; 支部党员大会支部党员大会是党支部全体党员参加的会议，是党支部的最高领导机关。一般每季度不得少于一次，也可以根据需要提前或推后召开。遇有特殊情况而长时间不能召开的，必须向上级党组织报告。按期召开支部党员大会，是贯彻民主集中制原则，健全党内民主生活的具体体现，是党员履行自己的权利并监督党支部工作的重要方式。根据《党章》和《政治工作条例》规定，支部党员大会的职权是讨论贯彻执上级决议指示的计划与措施；讨论听取和决定中队（连）的重大问题；讨论和批准支委会工作报告，听取和讨论中队（连）长、指导员工作报告；选举支委会委员和出席上级党代表大会的代表；评议党员，评选优秀党员，讨论和做出不合格党员、要求退党党员的组织处理意见；做出吸收和处分党员的决定；讨论决定支部委员会提交的其他重要问题。支部党员大会一般由支部书记或副书记主持。
</text>
   
     
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
		category: function(cat) {
			uni.navigateTo({
				url: "../../pages/train/msglist?lifecat=" + JSON.stringify(cat),
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
