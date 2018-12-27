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
      <view class="header-right" >
       <!-- <image src="../../static/list.png" style="width:45px; height:45px; margin-top: 10px;"></image> -->
      </view>
    </view>
    <view class="info">
      <view class="info-title">党小组会</view>

    </view>
    <view class="article">
			<image src='../../static/zuzhishenghouinfo1.png'
						class="message-img" />
      <text class="text"
            decode=true>&emsp;&emsp; 党小组会（每月一次）党小组会是党员组织生活的重要组成部分，是党员参加党内生活的一种最经常、最普遍的方式。每月召开一次，也可以根据需要召开，由党小组长主持。</text>    
      <text class="text"
            decode=true>&emsp;&emsp; 党小组会的基本内容和任务是：组织党员学习政治理论、党的基本知识及上级的指示、决定、决议等，研究贯彻落实上级党组织及本支部决定（决议）的具体办法和措施；做党员的思想工作并接受党员的汇报；检查党员贯彻支部决议和完成党小组任务情况，开展批评与自我批评；分析群众的思想情况，研究如何有针对性地做好思想工作；组织对党员进行评议和鉴定，评选优秀党员，讨论党员发展对象，讨论处理（处分）党员，按规定改选党小组长，讨论提出支委会委员、出席上级党的代表大会和代表会议代表的候选人等。每次党小组会的具体内容（重点解决一两个问题）由支委研究决定。</text>

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
