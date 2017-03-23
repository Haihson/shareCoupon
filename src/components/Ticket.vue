<template>
<div id="div-show" class="div_container">
  <div class="div_content">
    <!--介绍-->
    <div class="div_header_img"><img src="./../assets/icon_lq_header.png" /></div>
    <div class="div_header_title">{{ticketMoney}}元养车大礼包</div>
    <div class="div_header_desc">优惠触手可得</div>

    <!--横线-->
    <div class="div_line">
      <HR width="100%" color=#DDDDDD SIZE=1>
    </div>

    <!--表单-->
    <div class="div_form" v-show="showForm">
      <div class="form_phone">
        <input v-model="phone" type="tel" maxlength="11" placeholder="请输入手机号码">
      </div>
      <div class="form_code">
        <input v-model="code" placeholder="验证码" maxlength="6">
        <button v-on:click="getIdentCode()" :disabled="time > 0">{{tipText}}</button>
      </div>

      <div class="form_btn">
        <button v-on:click="btnSend()" v-bind:class="{is_click_style: isClickStyle}">马上领取</button>
      </div>
    </div>

    <!--领取成功-->
    <div class="div_success" v-show="showSuccess">
      <div class="s_title">
        恭喜您，领取成功
      </div>
      <div class="s_desc">
        用手机号{{phone}}注册VUEJS使用
      </div>

      <div class="s_btn">
        <button v-on:click="btnLoadApp()">点击下载</button>
      </div>
    </div>

    <!--领取失败-->
    <div class="div_fail" v-show="showFail">
      <div class="f_title">
        {{message}}
      </div>
    </div>

    <!--规则-->
    <div class="div_rule">
      <div class="rule_title">活动规则：</div>
      <div class="rule_desc">1.此手机号领取的礼包需要在下载并注册VUEJSApp后方可使用；</div>
      <div class="rule_desc">2.未使用过VUEJS，并且未领取过新用户专享礼包的用户可领取；</div>
      <div class="rule_desc">3.此活动仅限VUEJS业务已覆盖的城市用户参与；</div>
      <div class="rule_desc">4.本次活动最终解释权归"XXXXXXXXXX有限公司"所有。</div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'div_container',
  props: {
    second: {
      type: Number,
      default: 60
    }
  },
  data () {
    return {
      ticketMoney: '100',
      showForm: true,
      showSuccess: false,
      showFail: false,
      phone: '',
      code: '',
      disabled: false,
      time: 0,
      message: ''
    }
  },
  methods: {
    btnSend: function () {
      if (this.phone === '') {
        console.log('请输入手机号码')
      } else if (this.phone.length < 11) {
        console.log('手机号码不正确')
      } else if (this.code === '') {
        console.log('请输入验证码')
      } else {
        console.log('send http request...')
        this.time = 0
      }
    },
    btnLoadApp: function () {
      console.log('download app')
    },
    getIdentCode: function () {
      if (this.phone === '') {
        console.log('请输入手机号码')
        return
      } else if (this.phone.length < 11) {
        console.log('手机号码不正确')
        return
      }

      this.time = this.second
      this.timer()
      this.$emit('getIdentCode')
    },
    timer: function () {
      if (this.time > 0) {
        this.time = this.time - 1
        setTimeout(this.timer, 1200)
      }
    }
  },
  computed: {
    tipText: function () {
      return this.time > 0 ? this.time + ' 秒' : '获取验证码'
    },
    isClickStyle: function () {
      if (this.phone !== '' && this.phone.length >= 11 && this.code !== '') {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.div_container {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}

.div_content {
  margin: 0% 3%;
}

.div_header_img {
  margin: 5% 5%;
}

.div_header_img img {
  width: 55%;
}

.div_header_title {
  font-family: PingFangSC-Medium;
  font-size: 2.8rem;
  color: #222222;
  font-weight: 600;
}

.div_header_desc {
  font-size: 1.8rem;
  color: #222222;
  padding-top: 0.5rem;
}

.div_line {
  margin: 6% 1%;
}

.div_form {
  text-align: center;
  margin: 5% 0%;
}

.div_form .form_phone {
  width: 100%;
  margin-bottom: 1rem;
}

.div_form .form_phone input {
  width: 80%;
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 0.3rem;
  height: 2.6rem;
  line-height: 2.6rem;
  padding: 0.8rem;
  text-indent: 0rem;
  font-size: 1.4rem;
  -webkit-appearance: none;
}

.div_form .form_code {
  margin-bottom: 1rem;
  width: 100%;
}

.div_form .form_code input {
  width: 44.5%;
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 0.3rem;
  height: 2.6rem;
  line-height: 2.6rem;
  padding: 0.8rem;
  text-indent: 0rem;
  font-size: 1.4rem;
  -webkit-appearance: none;
}

.div_form .form_code button {
  width: 30%;
  color: #222222;
  font-size: 1.2rem;
  background: #FFFFFF;
  border: 1px solid #DDDDDD;
  border-radius: 0.3rem;
  margin-left: 5%;
  padding: 1.3rem 1rem;
}

.div_form .form_btn button {
  width: 85%;
  background: #4DA6F0;
  border-radius: 0.4rem;
  border: none;
  padding: 1rem 0.1rem;
  margin: 0.5rem 0rem;
  font-size: 1.6rem;
  color: #FFFFFF;
}

.div_rule {
  margin: 3% 5%;
}

.div_rule .rule_title {
  text-align: left;
  font-size: 1.6rem;
  color: #222222;
  padding: 1rem 0.5rem 0.8rem 0.5rem;
}

.div_rule .rule_desc {
  text-align: left;
  color: #222222;
  font-size: 1.4rem;
  padding: 0.2rem 0.2rem;
}

.div_success .s_title {
  font-size: 2rem;
  color: #FC7B53;
}

.div_success .s_desc {
  font-size: 1.8rem;
  color: #222222;
  padding-top: 0.5rem;
}

.div_success .s_btn button {
  width: 85%;
  background: #94D94A;
  border-radius: 0.4rem;
  border: none;
  padding: 1.2rem 0.1rem;
  color: #FFFFFF;
  font-size: 1.6rem;
  margin: 2rem 0rem;
}

.div_fail .f_title {
  font-size: 1.8rem;
  color: #222222;
  line-height: 2.4rem;
  margin: 1% 5%;
}

.is_click_style {
  opacity: 0.6;
}
</style>
