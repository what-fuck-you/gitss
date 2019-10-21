<template>
  <div class="div1">

    <div class="soe" style="position: relative" v-for="(item,index) in dta" :key="index">
      <img :src="item.thumbnail" class="imdd">

      <p style="font-size: .23rem;color: #ffffff;position: absolute;bottom: .12rem;left: .8rem">{{item.name}}</p>

    </div>

  </div>
</template>

<script>
    export default {
        name: "classify5",
      data(){
        return{
          dta:[]
        }
      },
      mounted() {
        this.$http({
          url:"http://yd.msword.top/getClassify",
        }).then((res)=>{
          console.log(res.data.data[4]);
          this.dta=res.data.data[4].list
        })
      }
    }
</script>

<style scoped>
  .div1{
    width: 4.96rem;
    height: 100%;
    float: right;background: #ffffff}
  .soe{
    float: left;
    width: 2.2rem;
    height: 2.4rem;
    background: #1d84a7;margin-left: 0.18rem;margin-top: 0.22rem;border: 0.03rem solid #1d84a7;border-radius:0.15rem ;
  }
  .imdd{width: 2.2rem;height: 1.9rem}
</style>
