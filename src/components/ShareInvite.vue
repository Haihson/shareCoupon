<template>
<div id='div-show' class='div_container'>
  <div class='div_body'>
    <div class='div_content'>
      <div class='div_header_img'><img src='./../assets/icon_lq_header.png' /></div>
      <div class='div_tip_font'>邀请好友，好友可获取<label>{{ ticketMoney }}元</label>的礼包</div>
      <div class='div_tip_font'>邀请人数越多，您可得礼包价值越高</div>
      <div class='div_share_code'><img src='./../assets/p_info.png' /></div>
      <div class='div_ticket_detail'><span><router-link class='a_underline' to="/detail">活动礼包详情></router-link></span></div>
    </div>
    <!--分享操作-->
    <div class='div_share'>
      <div class='share_title'>分享好友</div>
      <div class='share_icon'>
        <div><img v-on:click="share('wxhy')" src='./../assets/icon_share_wxhy.png' /></div>
        <div><img v-on:click="share('pyq')" src='./../assets/icon_share_pyq.png' /></div>
        <div><img v-on:click="share('qqhy')" src='./../assets/icon_share_qqhy.png' /></div>
        <div><img v-on:click="share('qqkj')" src='./../assets/icon_share_qqkj.png' /></div>
      </div>
      <div class='share_desc'>
        <div><span v-on:click="share('wxhy')">微信好友</span></div>
        <div><span v-on:click="share('pyq')">朋友圈</span></div>
        <div><span v-on:click="share('qqhy')">QQ好友</span></div>
        <div><span v-on:click="share('qqkj')">QQ空间</span></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'div_container',
  data () {
    return {
      ticketMoney: '200'
    }
  },
  methods: {
    share (message) {
      var currtClientType = 'ios'
      console.log('分享渠道：' + message)
      if (currtClientType === 'android') {
        // android.shareToolByAndroid(message, window.shareConfig.icon, window.shareConfig.url, window.shareConfig.title, window.shareConfig.content)
      } else if (currtClientType === 'ios') {
        shareToolByIOS({
          type: message,
          icon: window.shareConfig.icon,
          url: window.shareConfig.url,
          title: window.shareConfig.title,
          content: window.shareConfig.content
        })
      } else {
        console.log('分享未知客户端类型：' + currtClientType)
      }
    }
  }
}
var shareToolByIOS
shareToolByIOS = function (o) {
  o.url = o.url.replace(/=/g, '%3d').replace(/&/g, '%26')
  o = 'shareToolByIOS?type=' + o.type + '&icon=' + o.icon + '&url=' + o.url + '&title=' + o.title + '&content=' + o.content
  var iFrame
  iFrame = document.createElement('iframe')
  iFrame.setAttribute('src', o)
  iFrame.setAttribute('style', 'display:none;')
  iFrame.setAttribute('height', '0px')
  iFrame.setAttribute('width', '0px')
  iFrame.setAttribute('frameborder', '0')
  document.body.appendChild(iFrame)
  iFrame.parentNode.removeChild(iFrame)
  iFrame = null
}
// 分享参数配置
window.shareConfig = {
  'icon': '',
  'url': '',
  'title': '',
  'content': ''
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.div_container {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}

.div_header_img {
  margin: 10% 3% 2% 3%;
}

.div_header_img img {
  width: 45%;
}

.div_tip_font {
  color: #222222;
  font-size: 1.4rem;
  padding: 0.2rem 0.6rem;
}

.div_tip_font label {
  padding: 0rem 0.2rem;
  color: #FC7B53;
}

.div_share_code {
  margin: 3% 3% 3% 3%;
}

.div_share_code img {
  width: 30%;
}

.div_ticket_detail {
  color: #4DA6F0;
  font-size: 1.4rem;
  margin-top: 10%;
}

.div_ticket_detail .a_underline{
  text-decoration: none;
}

.div_share {
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 640px;
  padding: 1.2rem 0rem 0.8rem 0rem;
  left: 0px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
}

.div_share .share_title {
  color: #222222;
  font-size: 1.4rem;
  position: relative;
  text-align: center;
  width: 100%;
}

.div_share .share_title:before {
  content: '';
  display: block;
  position: absolute;
  border-top: 1px solid #DDDDDD;
  width: 28%;
  right: 65%;
  top: 10px;
}

.div_share .share_title:after {
  content: '';
  display: block;
  position: absolute;
  border-top: 1px solid #DDDDDD;
  width: 28%;
  left: 65%;
  top: 10px;
}

.div_share .share_icon,
.div_share .share_desc {
  display: flex;
}

.div_share .share_icon div,
.div_share .share_desc div {
  flex: 1;
  -webkit-flex: 1;
}

.div_share .share_icon div {
  padding: 0.6rem 0rem 0rem 0rem;
}

.div_share .share_icon img {
  width: 40%;
}

.div_share .share_desc div {
  color: #222222;
  font-size: 1.2rem;
}

.div_body {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
}

.div_body .div_content {
  flex: 1 0 auto;
}

.div_body .div_share {
  flex: 0 0 auto;
}
</style>
