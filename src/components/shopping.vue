<template>
    <div style="width: 7.5rem;height: 100%">
<!--      占位-->
      <div style="width:7.5rem;height: .37rem;background: #ff9900"></div>
      <div class="div105">
         <div class="div45"><img src="../../static/img/day12_03.jpg" class="img2337"></div>
        <div style="width: 6.69rem;height: 1.05rem;font-size: .42rem;color: #ffffff;line-height: 1.05rem" @click="ooo()">购物车</div>
      </div>
<!--      循环的数据购物车信息-->
        <div class="diav750327" v-for="(as,index) in datea" :key="index">
<!--          上班-->
             <div class="dvi72">
              <img src="../../static/day01.png" class="imggw1"> 深圳腾讯有限公司
             </div>
          <div class="div850">
            <div class="duihao1"></div>
            <div class="p_l" style="float: left">
              <img :src="as.img[0]" style="width: 1.57rem;height:1.59rem ">
            </div>
            <div style="width: 3.03rem;height: 1.64rem;float:left;margin-left: .2rem">
              <div class="p0_9">
                {{as.name}}
              </div>
              <div style="width: 3.03rem;height: .82rem">
                <div class="jian" @click="jia()">-</div>
                <div class="haofan">{{as.zzz}}</div>
                <div class="jian" @click="jib(as.zz)">+</div>
              </div>
            </div>
            <span style="font-size: .32rem">￥{{as.jge}}</span>

          </div>
          <div class="rome" @click="shanc(index,as['myid'])">删除</div>
        </div>


<!--      下面的内容是  去结算-->
      <div class="di116">
          <div class="p0oq">
            <div class="ij99">
              <img src="../../static/day8.png" style="width: .44rem;height: .49rem;"><br>
              全选
            </div>
          </div>
          <div>
            <div class="ij99">
              <img src="../../static/day8.png" style="width: .44rem;height: .49rem;"><br>
              编辑
            </div>
          </div>
        <div style="width: 2.9rem;height: .86rem;font-size: .23rem;float: left;;margin-top: .3rem">合计{{this.shu}}<br>(不含运费)</div>
          <div class="ppa">去结算</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shopping",
      data(){
          return{
            datea:[],
            shu:0
          }
      },
      methods:{
        ooo(){
          this.$router.go(-1);
        },
        shanc(i,key ){
          this.datea.splice(i,1);
          sessionStorage.removeItem(key);
        },

      },
      mounted(){
        let arr = [];

        for(var i = 0 ; i <sessionStorage.length ; i++ ) {
          arr.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))));
          this.datea = arr
          this.shu+=Number(arr[i].jge)
        }
        // console.log(arr);


      }


    }
</script>

<style scoped>
.div105{
  width: 7.12rem;
  height: 1.05rem;
  background: #ff9900;
  padding: 0 0.19rem;
}
.p0oq{width: 1.11rem;height: 1.16rem;float: left}
.di116{width:7.5rem ;height: 1.16rem;background: #fff2ef;position: fixed;left: 0;bottom: 1rem;}
.ij99{width: 1.11rem;height: .68rem;font-size: .28rem;float: left}
.ppa{
  width: 2.34rem;height:1.16rem ;background: #ff5500;color: #ffffff;font-size: .37rem;line-height: 1.16rem;float: right;
}
.p_l{width: 1.56rem;height: 1.64rem}
.duihao1{width: .38rem;height: 1.64rem;float: left;}
.imggw1{width: .37rem;height: .37rem;margin-left: .38rem;margin-right: .26rem}
  .div45{width: .45rem;height: 100%;float: left;}
  .img2337{display: block;width: .23rem;height: .37rem;margin-top: .43rem;margin-left: .22rem}
  .diav750327{width: 7.5rem;height: 3rem;background: #fafafa;border-bottom: 0.02rem solid #dadada;overflow: hidden}
  .dvi72{width: 7.5rem;height: .72rem;font-size: .283rem;
    display:table-cell;
    vertical-align:bottom;text-align: left;
  }
.haofan{width: .9rem;height: .48rem;float: left;border: 0.02rem solid #dddddd;font-size: .3rem;line-height: .48rem}
.jian{float: left;width: .52rem;height: .52rem;background: #999999;font-size: .3rem;color: #ffffff;line-height: .52rem}

.div850{width:6.5rem;height: 1.64rem;float: left}
.p0_9{width: 3.03rem;height: .82rem;font-size: .32rem;text-align: left;overflow: hidden;white-space: nowrap;text-overflow: ellipsis}
  .rome{;float: right;width: .99rem;font-size: .32rem;background: #ff9900;height:2.3rem;line-height: 2.3rem;color: #ffffff}
</style>
