<template>
    <div style="width: 7.5rem;height: 100%">
       <div class="div1">
             <input type="text" class="ipnput" placeholder="Montagne jeunesse">
         <span class="opsa1"></span>
       </div>
      <div style="width: 7.5rem;height: 100%">

        <div style="width: 7.3rem;height: 10rem;background: #fafafa;position: relative">
          <!-- 左边-->
          <div class="opm">
               <router-link to="/classify1"active-class="wid" class="sdo">母婴专区</router-link>
<!--            <router-view></router-view>-->
          </div>
          <div class="opm">
            <router-link to="/classify2" active-class="wid" class="sdo">美妆护肤</router-link>
            <!--            <router-view></router-view>-->
          </div>
          <div class="opm">
            <router-link to="/classify3" active-class="wid" class="sdo">家居生活</router-link>
          </div>
          <div class="opm">
            <router-link to="/classify4" active-class="wid" class="sdo">食品营养</router-link>
          </div>
          <div class="opm">
            <router-link to="/classify5" active-class="widaaaaaa" class="sdo">全球直邮</router-link>
          </div>

            <router-view style="position: absolute;top:0;left:2.37rem "></router-view>


        </div>
<!--        右面-->


      </div>
    </div>
</template>

<script>
    export default {
        name: "classify",
      mounted() {
        this.$http({
          url:"http://yd.msword.top/getClassify",
        }).then((res)=>{
          // console.log(res.data);

        })
      }
    }
</script>

<style scoped>
.div1{width: 7.5rem;height: 1.38rem;background: #ff9900;position: relative}
 .ipnput{width: 4.95rem;height: 0.62rem;border-radius: .25rem;border: none;padding-left:.23rem }
.opsa1{
  display: inline-block;
  width: .38rem;
  height: .4rem;
  position: absolute;
  right: 1.5rem;
  top: .6rem;
  background: url("../../static/img/search.png") no-repeat;background-size:100% 100%;}
  .sdo{display: block;width: 2.37rem;height: .95rem;font-size: .28rem;background: #fafafa;line-height: .95rem
  ;text-decoration: none;color: #333333;}
  .wid{background: #ffffff;color: #ff9900;width: 2.27rem;margin-left:0.1rem  }
  .widaaaaaa{background: #ffffff;color: #ff9900;width: 2.27rem;margin-left:0.1rem  }
  .opm{width: 2.37rem;height: .95rem;background: #1d84a7}
</style>
