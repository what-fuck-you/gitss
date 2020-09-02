<template>
    <div style="font-size:23px">
      <div style="background: #fa4071">
      <div style="width: 100%;height: 0.65rem"></div>
        <div style="position: relative">
      <input type="text" class="oipnut"placeholder="Montagne jeunesse">
        <span class="opsa1"></span>
        </div>
      </div>
      <div class="top1"></div>
<!--最上面的两个-->
      <div class="xiangqiang" v-for="(item,i) in imgw" :key="'0'+i">

      <div style="width: 7.12rem;height: .95rem ;margin-left: .19rem">
      <img :src="datae[i].img" style="float: left;width: .29rem;height: .38rem;margin-top: .27rem">
      <span style="float: left;font-size: .27rem;margin-top: .35rem;margin-left: .2rem">{{item.name}}</span>
      </div>

        <div style="width: 7.5rem;height: 4.8rem">
<!--左边的div-->
            <div  v-for="(asd,ind) in item.list" :key="'1'+ind" class="zdiv">
              <img :src="asd.thumbnail" class="imgg" @click="btn(asd.id)">
              <div style="height: .43rem">
                <span style="font-size: .28rem;color: #e60012;float: left;margin-left: .5rem">¥{{asd.reduct_price}}</span>
                <span class="ospan1">¥{{asd.original_price}}</span>
              </div>
              <p style="width: 2.39rem;font-size: .28rem;text-align:left;margin-left: .23rem">{{asd.name}}</p>
            </div>


        </div>

      </div>
<!--下面全部-->
      <div class="xiangqiang" v-for="(item,inde) in imgw2" :key="'2'+inde">

        <div style="width: 7.12rem;height: .95rem ;margin-left: .19rem">
          <img :src="datae[inde+1].img" class="imgs">
          <span class="sin">{{item.name}}</span>
        </div>

        <div style="width: 7.5rem;height: 4.8rem">

          <div  v-for="(asd,indexs) in item.list" :key="'3'+indexs" class="oip">
            <img :src="asd.thumbnail" class="imgg" @click="btn(asd.id)">
            <p class="opw">{{asd.name}}</p>
            <div style="height: .43rem">
              <span style="font-size: .28rem;color: #fdcc00;float: left;margin-left: .5rem">¥{{asd.reduct_price}}</span>
              <span style="font-size: .23rem;color: #888888;float: right;margin-right: .5rem">¥{{asd.original_price}}</span>
            </div>
          </div>


        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "indexa",
      data(){
          return{
          datae:[
            {"img":"../../static/img/hot.png"},
            {"img":"../../static/img/baby.png"},
            {"img":"../../static/img/meizhuang.png"},
            {"img":"../../static/img/furniture.png"},
            {"img":"../../static/img/food.png"},
            {"img":"../../static/img/airplane.png"},
            ],
            imgw:[],
            imgw2:[],
            maneid:"",
            pid:""
          }
      },
      methods:{
        btn(aj){
          // this.$root.eventHunb.$emit("eventName",aj)
          // this.pid=aj
          // console.log(aj);
          // this.$emit("add",this.pid)
          this.$router.push({
            path:'/particulars',
            query:{ id:aj,}
          });
        }
      },
      mounted(){
            this.$http({
              url:"http://yd.msword.top/getIndexData",
            }).then((res)=>{
              // console.log(res.data.data);
              this.imgw=res.data.data.splice(0,1)
              this.imgw2=res.data.data.splice(0,5)
            })
      } ,//请求数据
    }
    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > 750) deviceWidth = 750;
    document.documentElement.style.fontSize = deviceWidth/7.5 + 'px';
</script>

<style scoped>
.top1{width: 7.5rem;height: 3.93rem;background: url("../../static/img/banner2.png") no-repeat ;background-size:100% 100%}
  .oipnut{width: 5.19rem;height: .5rem;border: none;border-radius: .25rem;background: rgba(255,255,255,0.7);margin-right: .1rem;
    padding-top:.14rem ;
    padding-left: .23rem;padding-bottom: .1rem;
    }
  .opsa1{
    display: inline-block;
    width: .38rem;
    height: .4rem;
    position: absolute;
   right: 1.3rem;
    top: .2rem;
    background: url("../../static/img/search.png") no-repeat;background-size:100% 100%;}
  .xiangqiang{width: 7.12rem;height: 6rem}
  .imgg{width: 3.2rem;height: 3.16rem;border-top:.01rem solid #eeeeee }
  .imgs{float: left;width: .29rem;height: .38rem;margin-top: .27rem}
  .opw{width: 2.5rem;height:.78rem;font-size: .28rem;text-align:left;margin-left: .23rem;overflow: hidden; text-overflow: ellipsis;}
  .oip{width: 3.29rem;height: 4.7rem;float: left;border: 0.01rem solid #f2f2f2;margin-left: .19rem}
  .ospan1{text-decoration: line-through;font-size: .23rem;color: #666666;float: right;margin-right: .5rem}
  .zdiv{width: 3.29rem;height: 4.7rem;float: left;border: 0.01rem solid #f2f2f2;margin-left: .19rem}
  .sin{float: left;font-size: .27rem;margin-top: .35rem;margin-left: .2rem}
</style>
