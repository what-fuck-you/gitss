<template>
  <div style="width: 6.9rem;height: 100%;margin:0 auto;border-top:0.01rem solid #dddddd">
    <!--      <div>{{namea[0].createTime|formatDate }}</div>-->
    <div  v-for="(item,index) in namea" :key="index">
      <div style="width: 6.9rem;height: .63rem;border-top:0.01rem solid #dddddd">
        <span class="nameh">{{item.buyerName}}</span>
        <span class="caratime">{{item.createTime|formatDate }}</span>
      </div>
      <!--      图片-->
      <div style="width: 6.9rem;height: 1.53rem">
        <div v-for="(a,index) in item.postImg" :key="index" class="imgx"><img :src="a" class="img153" ></div>

      </div>
      <!--评语-->
      <div class="div40">{{item.postDescribe}}</div>
      <div class="div74">
        管理员:{{item.adminReviews}}
      </div>
    </div>

    <div style="width: 7.5rem;height: .97rem;z-index: -999" ></div>
  </div>
</template>

<script>
  import moment from 'moment'
    export default {
        name: "chaping",
      data(){
        return{
          namea:[],
          time: "",
        }
      },
      filters: {
        formatDate(value) {
          return moment(Number(value)).format('YYYY-MM-DD')
        }
      },
      submit() {
        console.log(moment(this.dateBegin).format('YYYY-MM-DD'))
      },
      mounted() {
        this.namea=this.$route.query.id
        this.$http({
          url:"http://yd.msword.top/getDetails?pid=00001",
        }).then((res)=>{
          console.log(res.data.data.buyerReviews.bad);
          this.namea=res.data.data.buyerReviews.bad
        })
      }
    }
</script>

<style scoped>
  .nameh{font-size: .23rem;color: #ff9900;float: left}
  .caratime{float: right;color: #999999}
  .img153{
    width: 1.53rem;height: 1.53rem;
  }
  .div40{
    width: 6.9rem;height: .4rem;text-align: left;
    margin-bottom: .15rem;color: #999999;
  }
  .div74{width: 6.9rem;height: .74rem;background: #dddddd;border-radius: .15rem;text-align: left;margin-bottom: .2rem;color: #666}
  .imgx{width: 1.53rem;height: 1.53rem;float: left}
</style>
