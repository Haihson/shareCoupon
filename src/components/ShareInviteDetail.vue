<template>
<div id="div-show" class="div_container">
  <!--上部分-->
  <div class="div_part_desc">
    <!--活动规则-->
    <div class="div_hot_title">活动规则：</div>
    <div class="div_hot_desc">1.好友可通过您分享的专属二维码，或者邀请链接输入手机号即可获得最高<label>{{comMaxMoney}}元</label>的养车礼包；</div>
    <div class="div_hot_desc">2.未注册过VUEJS的好友可参与活动，每个手机号码仅限参与一次活动；</div>
    <div class="div_hot_desc">3.好友成功领取礼包后，您可获得一个<img class="img_qtz" src="./../assets/logo.png" />
    </div>

    <!--横线-->
    <div class="div_line">
      <HR width="80%" color=#DDDDDD SIZE=1>
    </div>

    <!--活动战绩-->
    <div class="div_cj">
      <div class="cj_part1">您已获得了<span>{{ total }}</span>个<img class="img_qtz" src="./../assets/logo.png" />
      </div>
      <div class="cj_part2">
        已兑换<span>{{ used }}</span>个，剩余<span>{{ qtzPlusNum }}</span>个可兑换
      </div>
    </div>
  </div>

  <!--下部分-->
  <div class="div_part_ticket">
    <div class="t_item" v-for="item in ticketItems">
      <div class="t_money"><sub class="t_m_sub">￥</sub><span>{{ item.giftValue }}</span></div>
      <div class="t_desc">
        <div class="desc_title">{{ item.giftName }}</div>
        <div class="desc_desc"><img class="img_qtz" src="./../assets/logo.png" /> &times; {{ item.qtzPlusNum }}
        </div>
      </div>
      <div class="t_btn">
        <span v-on:click="handler(item,$event)" v-bind:class="{isOpacity:item.qtzPlusNum>qtzPlusNum}">兑换</span>
      </div>
    </div>
  </div>

  <!--兑换弹窗-->
  <div class="div_t_dialog" style="display: none;" v-show="isShowDialog">
    <div class="div_t_bg"></div>

    <div class="div_t_body">
      <img class="div_t_close" v-on:click="dialogClose()" src="./../assets/icon_share_close.png" />
      <div class="body_title">恭喜您获得<span class="span_money">{{ getMoneyValue }}</span>元礼包</div>
      <div class="body_desc">继续分享还可以获得更多哦！</div>
      <div class="body_line"></div>
      <div class="body_ticket_list">
        <div style="height: 265px;overflow: scroll;">
          <div class="ticket_item" v-for="item in duiHuanItems">
            <div class="item_money">
              <sub class="item_sub" v-if="item.couponType!='1'">￥</sub>
              <span>{{ item.couponValue }}</span>
              <sub class="item_sub" v-if="item.couponType=='1'">折</sub>
            </div>
            <div class="item_desc">
              <div class="item_desc_title">{{ item.couponName }}</div>
              <div class="item_desc_desc">{{ item.couponDesc }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="body_footer">优惠券已放入账户中，请在［我的］页查看</div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'div_container',
  data () {
    return {
      total: 4,
      used: 0,
      qtzPlusNum: 4,
      ticketItems: [{
        'qtzPlusNum': 1,
        'giftName': '100元礼包',
        'giftValue': 100
      },
      {
        'qtzPlusNum': 3,
        'giftName': '500元礼包',
        'giftValue': 500
      },
      {
        'qtzPlusNum': 6,
        'giftName': '1000元礼包',
        'giftValue': 1000
      }],
      currtData: 'data',
      isShowDialog: false,
      duiHuanItems: '',
      getMoneyValue: 0
    }
  },
  methods: {
    handler: function (item, event) {
      console.log(item)
    },
    dialogClose: function () {
      this.isShowDialog = false
      window.location.reload()
    }
  },
  computed: {
    comMaxMoney: function () {
      var maxValue = 0
      var currtValue = 0
      for (var i = 0; i < this.ticketItems.length; i++) {
        currtValue = this.ticketItems[i].giftValue
        if (maxValue < currtValue) {
          maxValue = currtValue
        }
      }
      return maxValue
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

.div_part_desc {
  padding: 2% 3%;
  background: #FFFFFF;
}

.div_part_desc .div_hot_title {
  text-align: left;
  font-size: 1.6rem;
  color: #222222;
  padding: 1rem 0.5rem 0.8rem 0.5rem;
}

.div_part_desc .div_hot_desc {
  text-align: left;
  color: #222222;
  font-size: 1.4rem;
  padding: 0.5rem 0.5rem;
}

.div_part_desc .div_hot_desc label {
  color: #FC7B53;
}

.div_part_desc .img_qtz {
  width: 7%;
  height: 7%;
  vertical-align: middle;
  padding: 0.3rem;
}

.div_line {
  width: 100%;
  margin: 3% 0%;
  padding-left: 0.5rem;
}

.div_cj .cj_part1 {
  text-align: left;
  font-size: 1.6rem;
  color: #222222;
  padding: 1rem 0.5rem 0.8rem 0.5rem;
}

.div_cj .cj_part2 {
  text-align: left;
  font-size: 1.4rem;
  color: #222222;
  padding: 0.1rem 0.5rem 0.8rem 0.5rem;
}

.div_cj .cj_part1 span {
  color: #FC5353;
}

.div_cj span {
  padding: 0rem 0.1rem;
}

.div_part_ticket {
  margin: 5%;
}

.div_part_ticket .t_item {
  display: flex;
  width: 100%;
  background: #FFFFFF;
  height: 75px;
  position: relative;
  overflow: hidden;
  /*box-shadow: 2px 2px 5px #DDDDDD;*/
  border: 1px solid #DDDDDD;
  border-radius: 0.4rem;
  margin-bottom: 1.2rem;
  background: #ffffff;
  /*background-image: -webkit-gradient(linear,100% 50%,30% 100%, from(transparent), color-stop(.5,transparent), color-stop(.6,#FC7B53), to(#FC7B53) );*/
  background-image: url('./../assets/icon_bg_ticket.png');
  background-size: 8px 18px;
  background-repeat: repeat-y;
  background-position: 0 100%;
}

.t_item .t_money {
  flex: 1;
  -webkit-flex: 1;
  color: #FC7B53;
  height: 70px;
  line-height: 70px;
  padding: 0rem 0.8rem 0rem 0.8rem;
  min-width: 90px;
  border-right: 2px dotted #FBF2D1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.t_item .t_desc {
  flex: 2;
  -webkit-flex: 2;
}

.t_item .t_btn {
  flex: 1;
  -webkit-flex: 1;
}

.t_item .t_money .t_m_sub {
  font-size: 1.6rem;
}

.t_item .t_money span {
  font-size: 3rem;
}

.t_item .img_qtz {
  width: 14px;
  height: 14px;
  vertical-align: middle;
}

.t_item .t_desc {
  padding: 1.2rem 0.5rem 0.5rem 1rem;
  text-align: left;
}

.t_item .t_desc .desc_title {
  color: #222222;
  font-size: 1.6rem;
}

.t_item .t_desc .desc_desc {
  color: #222222;
  font-size: 1.4rem;
  padding-top: 0.2rem;
}

.t_item .t_btn {
  height: 70px;
  line-height: 70px;
  padding: 0.5rem 0.5rem 0.5rem 0.8rem;
}

.t_btn span {
  padding: 0.4rem 0.8rem;
  background: #FC7B53;
  border-radius: 0.3rem;
  color: #FFFFFF;
  font-size: 1.4rem;
}

.div_t_dialog {}

.div_t_dialog .div_t_bg {
  position: fixed;
  z-index: 11;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
}

.div_t_dialog .div_t_body {
  position: fixed;
  z-index: 14;
  width: 85%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  /*overflow: hidden;*/
  background: #FC7B53;
  border-radius: 0.5rem;
  padding: 3%;
}

.div_t_body .body_title {
  font-size: 2.4rem;
  color: #FFFFFF;
  padding: 1rem 0.1rem 0.4rem 0.1rem;
}

.div_t_body .body_desc {
  font-size: 1.4rem;
  color: #FFFFFF;
  padding: 0.6rem 0.1rem 1rem 0.1rem;
}

.div_t_body .body_line {
  width: 100%;
  background: #FFC636;
  border-radius: 10px;
  height: 0.6rem;
}

.div_t_body .body_ticket_list {
  background: #FBF2D1;
  /*box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);*/
  margin: 0% 1.4%;
  padding: 3% 3% 6% 3%;
  background-image: -webkit-gradient(linear, 50% 0, 0 100%, from(transparent), color-stop(.5, transparent), color-stop(.5, #FC7B53), to(#FC7B53)), -webkit-gradient(linear, 50% 0, 100% 100%, from(transparent), color-stop(.5, transparent), color-stop(.5, #FC7B53), to(#FC7B53));
  background-image: -moz-linear-gradient(50% 0 45deg, transparent, transparent 50%, #d86707 50%, #FC7B53), -moz-linear-gradient(50% 0 -135deg, transparent, transparent 50%, #FC7B53 50%, #FC7B53);
  background-size: 16px 5px;
  background-repeat: repeat-x;
  background-position: 0 100%;
}

::-webkit-scrollbar {
  width: 0px;
  display: none;
}

.body_ticket_list .ticket_item {
  display: flex;
  width: 100%;
  background: #FFFFFF;
  height: 75px;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px 5px #DDDDDD;
  border-radius: 0.4rem;
  margin-bottom: 3%;
  background-image: url('./../assets/icon_bg_ticket.png');
  background-size: 8px 18px;
  background-repeat: repeat-y;
  background-position: 0 100%;
}

.body_ticket_list .ticket_item:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  right: 10px;
  z-index: -1;
}

.body_ticket_list .ticket_item:nth-last-child(1) {
  margin-bottom: 0%;
}

.body_ticket_list .ticket_item .item_money {
  flex: 1;
  -webkit-flex: 1;
  color: #FC7B53;
  height: 70px;
  line-height: 70px;
  padding: 0rem 0.8rem 0rem 0.5rem;
  min-width: 100px;
  border-right: 2px dotted #FBF2D1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.body_ticket_list .ticket_item .item_money .item_sub {
  font-size: 1.6rem;
}

.body_ticket_list .ticket_item .item_money span {
  font-size: 3rem;
}

.body_ticket_list .ticket_item .item_desc {
  flex: 2;
  -webkit-flex: 2;
  padding: 1.2rem 0.5rem 0.5rem 1rem;
  text-align: left;
}

.body_ticket_list .ticket_item .item_desc .item_desc_title {
  font-size: 1.6rem;
  color: #FFC636;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 110px;
}

.body_ticket_list .ticket_item .item_desc .item_desc_desc {
  font-size: 1.2rem;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 110px;
}

.div_t_body .body_footer {
  font-size: 1.2rem;
  color: #FFFFFF;
  padding: 3% 0% 0% 0%;
  position: relative;
}

.div_t_body .body_footer:before {
  content: '';
  display: block;
  position: absolute;
  border-top: 1px solid #DDCE94;
  width: 6%;
  left: 8%;
  bottom: 25%;
}

.div_t_body .body_footer:after {
  content: '';
  display: block;
  position: absolute;
  border-top: 1px solid #DDCE94;
  width: 6%;
  right: 8%;
  bottom: 25%;
}

.div_t_dialog .div_t_close {
  position: fixed;
  z-index: 13;
  right: 0%;
  top: 0%;
  width: 10%;
}

.isOpacity {
  opacity: 0.5;
}
</style>
