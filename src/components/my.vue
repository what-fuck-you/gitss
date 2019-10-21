<template>
    <div style="width: 7.5rem;height: 100%">
      <div style="width: 7.5rem;height: .73rem;background: #ff9900"></div>
      <div class="div1">
        <div class="zdiv">
          <img src="../../static/img/toothed.jpg" class="img1">
        </div>
        <div class="z1div">
          个人中心
        </div>
        <div class="youdiv">
          <img src="../../static/img/fang.jpg" class="imgy">
        </div>
      </div>
      <div style="width: 7.5rem;height: 2.5rem;background: #ff9900;position: relative">
        <img src="../../static/img/yuan.jpg" class="ydimg">
      </div>
      <div class="xdiv"></div>
      <div class="xdiv">
        <span class="dl" @click="genglu()">点击登录</span>
      </div>
      <div class="div111">
        <span class="ssc">我的收藏</span>
        <span class="ingspan"></span>
      </div>
      <div style="width: 7.5rem;height: .15rem;background: #efeeee"></div>
      <div class="ibs">
        <div class="ddan">我的订单</div>
        <div style="font-size: .33rem;color: #999999;float: right;line-height:1.25rem">查看全部订单 </div>
      </div>
      <div style="width: 7.5rem;height:1.9rem">
      <div class="divday1">
          <img src="../../static/img/day1_03.jpg" class="day1">
        <span class="dayspan1">代付款</span>
      </div>
      <div class="divday1">
        <img src="../../static/img/day2_06.jpg" class="day1">
        <span class="dayspan1">待发货</span>
      </div>
      <div class="divday1">
        <img src="../../static/img/day3_05.jpg" class="day1">
        <span class="dayspan1">待收货</span>
      </div>
      <div class="divday1">
        <img src="../../static/img/day4_07.jpg" class="day1">
        <span class="dayspan1">待评价</span>
      </div>
      <div class="divday1">
        <img src="../../static/img/day5_09.jpg" class="day1">
        <span class="dayspan1">退款/售后</span>
      </div>
      </div>
      <div style="width: 7.5rem;height: .14rem;background:#efeeee"></div>
      <div style="width: 7.5rem;height: .14rem;background:#efeeee"></div>
      <div style="width: 7.5rem;height: .14rem;background:#efeeee"></div>
      <div style="width: 7.5rem;height: .14rem;background:#efeeee"></div>
      <div style="width: 7.5rem;height: 1.25rem;background: #fafafa">
        <span style="display: block;font-size: 0.33rem;line-height: 1.25rem;text-align: left;margin-left: .46rem">收货地址管理</span>
      </div>
      <div style="width: 7.5rem;height: 1.3rem;background: #f3f3f3"></div>
    </div>
</template>

<script>
    export default {
        name: "my",
      methods:{
        genglu(){
          this.$router.push({
            path:'/login',
          })
        }
      }
    }
</script>

<style scoped>
.div1{width: 7.5rem;height: .54rem;background: #ff9900}
  .zdiv{width: 0.8rem;height: .54rem;background: #ff9900;float: left}
  .img1{display: block;width: .51rem;height: .53rem;margin-left: .29rem}
  .z1div{width: 5.61rem;height: .48rem;float: left;font-size: .41rem;color: #fefefe}
  .youdiv{width: 1.02rem;height: .54rem;float:left;}
  .imgy{display: block;width: .56rem;height: .45rem;}
  .ydimg{position: absolute;left: 2.7rem;top:1.1rem;width: 2.08rem;height: 2.08rem}
  .xdiv{width: 7.5rem;height: .71rem;background: #fafafa}
  .dl{display: block;font-size: .32rem;line-height: .71rem;margin-left:-.2rem }
  .div111{width: 7.15rem;height: .37rem;padding-left: .35rem;padding-top:.38rem ;padding-bottom: .27rem;position: relative;
  ;background:#fafafa }
  .ingspan{
    display: block;
    width: .38rem;
    height: .36rem;
    position: absolute;
    left: .35rem;
    top: .39rem;
    background: url("../../static/img/xin.jpg");background-size: 100% 100%;
  }
  .ibs{width: 7.5rem;height: 1.25rem;background: #fafafa;border-bottom: 0.01rem solid #b3b3b3}
  .ssc{display: block;width: 80%;font-size: .33rem;text-align: left;margin-left: .67rem}
  .ddan{font-size: .33rem;float: left;line-height:1.25rem;margin-left: .47rem;}
  .day1{display: block;width: .54rem;height: .47rem;margin-left: .4rem}
  .divday1{width: 1.5rem;height: 1.9rem;background: #fafafa;padding-top: .45rem;float: left}
  .dayspan1{display: block;font-size: .23rem;margin-top: .27rem;margin-left: -.23rem}
</style>
