<template>
    <div style="font-size: .16rem">
      <div style="width: 7.5rem;height:1rem"></div>

        <img :src="item" class="img656437" v-for="(item,index) in dateaq" :key="index" >


    </div>
</template>

<script>
    export default {
        name: "particulars1",
      data(){
        return{
          dateaq:[],
        }
      },
      mounted() {
        // this.iid=this.$route.query.id
      this.$http({
          url:"http://yd.msword.top/getDetails?pid=00001",
          params:{
            // pid:this.$route.query.id
          }
        }).then((res)=>{
          // console.log(res.data.data);
          this.dateaq=res.data.data.shopDes
        })
      }
    }
    var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth > 750) deviceWidth = 750;
    document.documentElement.style.fontSize = deviceWidth/7.5 + 'px';
</script>

<style scoped>
.img656437{
  width: 6.56rem;
  height: 4.37rem;
  background: #dadada;
}
</style>
