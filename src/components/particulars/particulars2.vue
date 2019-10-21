<template>
    <div class="zdiv">
      <div style="width: 7.5rem;height:.7rem;border-top:0.01rem solid #dddddd"></div>
      <div class="day7030">
          <router-link to="/particulars/particulars2/quanbu" active-class="yanshe"  class="wed" >全部评价</router-link>
          <router-link to="/particulars/particulars2/haop" active-class="yanshe" class="wed">好评</router-link>
          <router-link to="/particulars/particulars2/chaping" active-class="yanshe" class="wed">差评</router-link>
          <router-link to="/particulars/particulars2/saidan" active-class="yanshe" class="wed">晒单</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "particulars2",
      mounted() {
        // this.iid=this.$route.query.id
        this.$http({
          url:"http://yd.msword.top/getDetails?pid=00001",
          params:{
            // pid:this.$route.query.id1
          }
        }).then((res)=>{
          // console.log(res.data.data.shopDes);
          // this.dateaq=res.data.data.shopDes
        })
      }
    }
    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > 750) deviceWidth = 750;
    document.documentElement.style.fontSize = deviceWidth/7.5 + 'px';
</script>

<style scoped>
.day7030{width: 7.1rem;margin: 0 .3rem;height: .7rem;border-top:0.01rem solid #dddddd}
  .wed{width: 1.37rem;height: .5rem;float: left;text-decoration: none;background: #999999;
    border-radius:.25rem;line-height: .5rem;margin-right: .4rem;margin-top: .1rem;color: #ffffff}
  .zdiv{width: 7.5rem;height: 100%;font-size: .16rem;display: block; line-height: .7rem}
.yanshe{background: #ff9900}
</style>
