<template>
    <div style="width: 7.5rem;height: 100%;position: relative">
<!--      使用原生js写的  购买选项-->
      <div class="div1799" id="aaa">
<!--        黑社的-->
        <div class="div623"></div>
        <div class="div190">
            <div class="div216189">
              <img src="http://yd.msword.top/static/img/details01.png" class="oim">
            </div>
          <div class="div408">
            <p style="font-size: .3rem;text-align: left;color: red">￥{{datea.reduct_price}}</p>
            <p style="font-size: .25rem;text-align: left">库存{{datea.total}}件</p>
            <p style="font-size: .25rem;text-align: left">请选择商品属性</p>
          </div>
          <div class="div58"><span class="ojinin" @click="io()"></span></div>
        </div>
        <div style="width: 6.67rem;height: 3.87rem;background: #ffffff;margin-left: .43rem;margin-right: .4rem">
                <div style="width: 6.67rem;height: .72rem">
                  <span style="font-size: .3rem;float: left;line-height: .72rem">购买数量</span>
                  <div style="width: 2.02rem;height: .72rem;float: right">
                    <div class="jian" @click="jia()">-</div>
                    <div class="haofan">{{shuzhi}}</div>
                    <div class="jian" @click="jib()">+</div>
                  </div>
                </div>
          <div class="dia71">

            <div style="width: 6.67rem;height: 50%" v-for="(a,b) in datea.buySelect"  :key="b">
              <p style="font-size: .3rem;text-align: left">{{a.name}}</p>
              <div class="dian54247">
                    <span class="opw" v-for="(v,aw) in a.list">{{v}}</span>
              </div>
            </div>
<!--            <div style="width: 6.67rem;height: 50%">-->
<!--              <p style="font-size: .3rem;text-align: left">年龄</p>-->
<!--            </div>-->
          </div>
        </div>
      </div>
<!--      加入购物车-->
      <div class="zhuishang">
        <div class="div123">总价:<span style="color: red">￥{{sum}}</span></div>
        <div class="div198" @click="jiaru()">加入购物车</div>
        <div class="div1981" @click="tanchu()">立即购买</div>
      </div>
<!--     固定定位 占位-->
        <div class="dingdun"></div>
        <div class="dingdun11"></div>
<!--      内容-->
      <div class="widj">
<!--        轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swiperImgArr1" :key="index">
            <img :src="item" class="imgcka">
            </div>
            <div class="swiper-slide">11111</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
          <!-- Add Pagination -->
<!--          <div class="swiper-pagination"></div>-->
<!--          &lt;!&ndash; Add Arrows &ndash;&gt;-->
<!--          <div class="swiper-button-next"></div>-->
<!--          <div class="swiper-button-prev"></div>-->
        </div>

        <div class="oid">
          <div class="diu">
            <span class="sow" @click="nta()"></span>
          </div>
          <div class="youi">
            <span class="gtg"></span>
            <span class="gtg1"></span>
          </div>
        </div>


        <div class="sw1">
<!--          名字-->
          <div style="width: 100%;height: .8rem">
          <div class="swo">
           {{datea.name}}
          </div>
<!--          收藏-->
          <div class="w3d">
            <div style="width: .7rem;height: .36rem"><span class="sw1a"></span></div>
            <div style="width: .7rem;height: .37rem;font-size: .16rem;color: red;margin-top: .17rem" >收藏 </div>
          </div>
        </div>

          <div style="width: 6.64rem;height: 1.03rem;">
              <div style="width: 6.64rem;height: .46rem;">
                <div class="sdw223">￥{{datea.original_price}}</div>
                <div class="sdw2231">
                  <span class="day1span">{{sz}}折</span>
                  <span class="day2span">包邮</span>
                </div>
              </div>
              <div style="width: 6.64rem;height: .57rem;">
                <div class="sw0">￥998.00</div>
                <div class="ijn">
                  <span class="onu" v-for="(dw,i) in datea.describe" :key="i">{{dw}}</span>
                </div>
              </div>
          </div>
        </div>
        <div style="width: 7.5rem;height: .32rem;background: #eeeeee;margin: 0 auto"></div>
<!--        卖家口碑商品详情-->
        <router-link  to="/particulars/particulars1" class="div50" active-class="yanshe" >
          <span @click="ann()">商品详情</span>
        </router-link>
        <router-link  to="/particulars/particulars2" class="div50" active-class="yanshe" >卖家口碑</router-link>
        <router-view></router-view>
        <div style="width: 7.5rem;height: .97rem;z-index: -999" ></div>
      </div>
    </div>
</template>

<script>


  import Swiper from "swiper"
    export default {
        name: "particulars",
      data(){
        return{
         datea:[],
          swiperImgArr1:[],
          sz:"",
          sw1:"",
          szhi:"00001",
          shuzhi:1
        }
       },
      methods:{
        nta(){
          this.$router.push({
            path:'/indexa',
          });
        },
        ann(){
          // this.szhi= this.$route.query.id;
          // console.log(this.szhi);
          // this.$router.push({
          //   query:{id:this.szhi,}
          // });
        },
        tanchu(){
          var divo=document.getElementById("aaa")
          divo.style.display="block";
        },
        jiaru(){  //加入购物车
          this.$router.push({
            path:'/shopping',
          });
          let obj={
            // 商品名字  价格  数量  图片
            name:this.datea.name,
            myid:this.datea.cid,
            img:this.datea.swiperImgArr,
            jge:this.datea.original_price,
            zzz:this.shuzhi
          }

          sessionStorage.setItem(this.datea.cid,JSON.stringify(obj))
        },
        io(){
          var divo=document.getElementById("aaa")
          divo.style.display="none";
        },
        jib(){
          this.shuzhi++
        },
        jia(){
          if(this.shuzhi>0){
            this.shuzhi--;
          }
        }
      },
      computed:{
        sum(){
          var taioat=0;
            taioat+=this.datea.reduct_price*this.shuzhi
          return taioat
            ;
        }
      },
      mounted(){
       this.szhi= this.$route.query.id
        // console.log(this.$route.query);
        // console.log(this.$route.query.id);
        //请求数据

        this.$http({
          url:"http://yd.msword.top/getDetails",
          params:{
            pid:this.szhi,
          }
        }).then((res)=>{
          // console.log(res.data.data);
          this.datea=res.data.data
          this.swiperImgArr1=res.data.data.swiperImgArr
          this.sz=res.data.data.allowance
        })
        // this.$router.push({
        //   query:{id1:this.szhi,}
        // })
        var swiper = new Swiper('.swiper-container', {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    }

    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > 750) deviceWidth = 750;
    document.documentElement.style.fontSize = deviceWidth/7.5 + 'px';
</script>

<style scoped>
  @import url("../../../node_modules/swiper/css/swiper.min.css");

.dingdun{width: 7.5rem;height: .4rem;background: #ff9900;position: fixed;top:0;left: 0;z-index: 999}
.dingdun11{width: 7.5rem;height: .4rem;background: #ff9900;z-index: 999}
  .widj{width: 7.54rem;height: 5.44rem;position: relative}
.imgcka{display: block;width: 7.54rem;height: 5.44rem;}
.oid{width: 7.5rem;height: .57rem;position: absolute;
  top: .2rem;z-index: 99}
.diu{width: .8rem;height: .57rem ;float: left}
.sow{display: inline-block;background: url("../../../static/img/day6.jpg");width: .56rem;
  height: .56rem;background-size:100% 100%;float: right}
.youi{display:block;width: 1.46rem;height: .56rem;float: right;margin-right: .28rem}
.gtg{display: block;width: .52rem;height: .52rem;background: url("../../../static/img/day07.jpg")
;background-size: 100% 100%;float: left}
.gtg1{display: block;width: .52rem;height: .53rem;background: url("../../../static/img/day08.jpg");
background-size: 100% 100%;float: right}
.sw1{ width: 6.9rem;height: 1.9rem; ;padding-left: .23rem;padding-right: .28rem;border-top:.01rem solid #eeeeee }
.swo{width: 5.7rem;height: .8rem;font-size: .29rem;text-align: left; float: left;margin-top: .1rem}
.w3d{width: .7rem;height: .8rem;float: right;margin-top: .1rem;font-size: .16rem;color: red}
.sw1a{display: block;width: .36rem;height: .36rem;background: url("../../../static/img/day09.jpg");background-size:100% 100% ;margin: 0 auto}
.sdw223{width: 1.82rem ;height: .46rem;font-size: .33rem;text-align: left;float: left;color: red}
.sdw2231{width: 3.74rem ;height: .46rem;font-size: .33rem;float: left;text-align: left}
.day1span{
  display: block;width: .75rem;height: .3rem;color: #ffffff;font-size: .2rem;background: #ff9900;float: left;margin-right: .2rem;
  text-align: center;
}
.day2span{ display:block;width: .7rem;height: .3rem;color: #ffffff;font-size: .2rem;background: #ff9900;float: left; text-align: center }
 .sw0{width: 1.44rem;height:.57rem;font-size: .24rem;text-align: left;text-decoration: line-through;float: left}
 .ijn{width: 4.8rem;height: .57rem;font-size: .2rem;float: left;margin-left: .4rem}
 .onu{display: block;width: 1.05rem;height: .3rem;border: 0.01rem solid #ff9900;float: left;font-size: .2rem;margin-right: .1rem}
  .zhuishang{width: 7.5rem;height: .97rem;position: fixed;bottom: 0;left: 0;z-index: 999}
.div123{width: 3.22rem ;height: .97rem;background: #ffffff;float: left ;font-size: .3rem;text-align: left;margin-left:.3rem ;line-height: .97rem}
.div198{width: 1.98rem;height: .97rem;float: left;background: #ff9900;font-size: .29rem;line-height: .97rem;color: #ffffff}
.div1981{width: 1.98rem;height: .97rem;float: left;background: red;font-size: .29rem;line-height: .97rem;color: #ffffff}
.div50{width: 1.75rem;height: .6rem;float: left;font-size: .26rem;line-height: .6rem;text-decoration: none;color: #999999;
;margin-left: 1.1rem;margin-right: .5rem}
.yanshe{border-bottom: 0.01rem solid #ff9900 ;color: #ff9900}
.div1799{width: 7.5rem;height:11.97rem;position: fixed;top:0.39rem;z-index: 999;display: none}
  .div623{
    width: 7.5rem;height: 6.23rem;background: rgba(0,0,0,0.5);
  }
  .div190{width: 6.78rem;height: 1.89rem;background: #ffffff;padding-left: .43rem;padding-right: .29rem}
  .div216189{width: 2.16rem;height: 1.89rem;background: #0e90d2;position: relative;float: left}
.oim{display: block;width: 2rem;height: 2rem;position: absolute;bottom: 0;left: 0;border:.07rem solid #dddddd;border-radius:0.06rem }
 .div58{width: .58rem;height: 1.59rem;float:left;margin-top: .3rem}
.ojinin{width: .57rem;height:.58rem;display: block;background: url("../../../static/img/day11_03.jpg");background-size:100% 100% }
 .div408{width: 3.82rem;height: 1.24rem;float: left;margin-top: 0.65rem;margin-left: .22rem}
.jian{float: left;width: .52rem;height: .52rem;background: #999999;font-size: .3rem;color: #ffffff;line-height: .52rem}
.haofan{width: .9rem;height: .48rem;float: left;border: 0.02rem solid #dddddd;font-size: .3rem;line-height: .48rem}
.dia71{width: 6.67rem;height: 3.16rem}
.dian54247{
  width:6rem;height: .97rem;
}
.opw{ font-size: .3rem;background: #dddddd;padding: 0.1rem .46rem;display: block;float: left;margin-top: .2rem;margin-left: .2rem;
border-radius:.1rem }
  /*样式*/
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;

  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    margin-left: .2rem;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
