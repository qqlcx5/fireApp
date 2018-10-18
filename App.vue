<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style>
/*每个页面公共css */
/* @import './common/common.css'; */

page {
  min-height: 100vh;
  width: 100%;
  font-size: 32px;
  background-color: #f7f7f7;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.mgr20 {
  margin-right: 20px;
}

.mgl20 {
  margin-left: 20px;
}
.mgr30 {
  margin-right: 30px;
}

.mgl30 {
  margin-left: 30px;
}

.mgt20 {
  margin-top: 20px;
}
.mgt40 {
  margin-top: 40px;
}

/* icon图标 */

@font-face {
  font-family: iconfont;
  font-weight: normal;
  font-style: normal;
  src: url('https://at.alicdn.com/t/font_874003_cx48blm2ceq.ttf')
    format('truetype');
}

.icon {
  font-size: 56px;
  color: #fff;
  font-family: iconfont;
}
.gIcon {
  font-size: 48px;
  color: #dadada;
  font-family: iconfont;
}
/*页面头部样式*/
.header {
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
}
</style>
