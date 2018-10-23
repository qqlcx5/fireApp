<template>
  <view class="page">
    <view class="header">
      <view class="header-left"
            @click="goback()">
        <text class="icon">&#xe601;</text>
      </view>
      <view class="header-content">
        请假
      </view>
      <view class="header-right">
        <text class="icon">&#xe622;</text>
      </view>
    </view>
    <view>
      <view class="list">
        <view class="item">
          <view class="border">
            <picker class="picker-item"
                    mode="selector"
                    :range="array"
                    @change="textChange">
              <view><text class="picker-name">请假类型</text>{{array[textValue]}}</view>
            </picker>
          </view>
        </view>
      </view>
      <view class="list">
        <view class="item">
          <view class="border">
            <text>请假时间</text>
          </view>
        </view>
        <view class="item">
          <view class="border">
            <picker class="picker-item"
                    mode="date"
                    start="2018-01-01"
                    end="2019-01-01"
                    @change="startdateChange">
              <view><text class="picker-name">开始日期</text>{{startdate}}</view>
            </picker>
          </view>
        </view>
        <view class="item">
          <view class="border">
            <picker class="picker-item"
                    mode="time"
                    start="08:00"
                    end="20:00"
                    @change="starttimeChange">
              <view><text class="picker-name">开始时间</text>{{starttime}}</view>
            </picker>
          </view>
        </view>
        <view class="item">
          <view class="border">
            <picker class="picker-item"
                    mode="date"
                    start="2018-01-01"
                    end="2019-01-01"
                    @change="enddateChange">
              <view><text class="picker-name">结束日期</text>{{enddate}}</view>
            </picker>
          </view>
        </view>
        <view class="item">
          <view class="border">
            <picker class="picker-item"
                    mode="time"
                    start="08:00"
                    end="20:00"
                    @change="endtimeChange">
              <view><text class="picker-name">结束时间</text>{{endtime}}</view>
            </picker>
          </view>
        </view>
      </view>
      <view class="list">
        <view class="item">
          <view class="border">
            <text>请假事由</text>
          </view>
        </view>
        <view class="item-textarea">
          <textarea placeholder="请输入公差事由"
                    maxlength="200"></textarea>
        </view>
      </view>
      <view class="list">
        <view class="picture">
          <text class="picture-name">图片</text>
          <text class="addIcon">&#xe604;</text>
        </view>
      </view>
    </view>
    <view class="submit">
      <view class="btn">
        提交
      </view>
    </view>

  </view>

</template>
<script>

export default {
  data () {
    return {
      array: ['病假', '事假', '年假'],
      textValue: 0,
      startdate: '2018-01-01',
      enddate: '2018-05-08',
      starttime: '09:00',
      endtime: '09:00'
    }
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
    },
    //请假方式
    textChange (evt) {
      console.log(evt.detail.value)
      this.textValue = evt.detail.value;

    },
    startdateChange (evt) {
      this.startdate = evt.detail.value;

    },
    starttimeChange (evt) {
      this.starttime = evt.detail.value;
    },
    //结束日期
    endtimeChange (evt) {
      this.endtime = evt.detail.value;
    },
    enddateChange (evt) {
      this.enddate = evt.detail.value;
    }
  }
}
</script>
<style>
.list {
  min-height: 0px;
  width: 710px;
  margin: 20px;
  background-color: #fff;
  display: flex;
  font-size: 28px;
  flex-direction: column;
}
.item {
  height: 88px;
  width: 710px;
  display: flex;
  padding: 0 40px;
  box-sizing: border-box;
}

.item .border {
  height: 88px;
  width: 630px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eee;
}

.picker-item {
  width: 630px;
  height: 88px;
  line-height: 88px;
  font-size: 32px;
  color: #999999;
}

.picker-name {
  min-width: 60px;
  font-size: 32px;
  color: #666666;
  margin-right: 60px;
}
.item-textarea {
  height: 200px;
  width: 710px;
  padding: 30px 40px;
  box-sizing: border-box;
}
.item-textarea textarea {
  width: 100%;
  height: 100%;
}
.picture {
  min-height: 160px;
  width: 710px;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  box-sizing: border-box;
}
.picture-name {
  height: 60px;
  line-height: 60px;
  width: 630px;
  font-size: 32px;
  color: #333333;
}
.addIcon {
  margin-top: 10px;
  font-size: 68px;
  color: #dadada;
  font-family: iconfont;
}
.submit {
  height: 88px;
  width: 750px;
  display: flex;
  justify-content: center;
  margin: 100px 0;
}
.submit .btn {
  background-color: #67ba61;
}
</style>
