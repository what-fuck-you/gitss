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
      // filters: {
      //   formatDate: function (value) {
      //     let date = new Date(value);
      //     let y = date.getFullYear();
      //     let MM = date.getMonth() + 1;
      //     MM = MM < 10 ? ('0' + MM) : MM;
      //     let d = date.getDate();
      //     d = d < 10 ? ('0' + d) : d;
      //     let h = date.getHours();
      //     h = h < 10 ? ('0' + h) : h;
      //     let m = date.getMinutes();
      //     m = m < 10 ? ('0' + m) : m;
      //     let s = date.getSeconds();
      //     s = s < 10 ? ('0' + s) : s;
      //     return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      //   }
      // },
      mounted() {
        this.namea=this.$route.query.id
        this.$http({
          url:"http://yd.msword.top/getDetails?pid=00001",
        }).then((res)=>{
          console.log(res.data.data.buyerReviews.all);
          this.namea=res.data.data.buyerReviews.all
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
