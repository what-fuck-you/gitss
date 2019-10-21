
<template>
  <div class="odiv">
    <router-view></router-view>
    <div class="to1" ></div>
    <div class="to2">
<!--      首页 购物车 分类 我-->
      <div class="omd1">
<!--        <span  class="imgga"></span>-->
    <router-link to="/indexa" active-class="cols" class="oa1" ><br><br><span >首页</span></router-link>
      </div>
      <div class="omd1">
    <router-link to="/classify" active-class="colsa" class="oa2"><br><br><span >分类</span></router-link>
      </div>
      <div class="omd1">
    <router-link to="/shopping" active-class="colsb" class="oa3"><br><br><span >购物车</span></router-link>
      </div>
      <div class="omd1">
        <router-link to="/my" active-class="colsd" class="oa4"><br><br><span >我</span></router-link>
      </div>

    </div>
  </div>
</template>

<script>
  // var aa=document.getElementsByClassName("omd1")
  // console.log(aa);
  // aa.onclick=function(){
  //   console.log("11111")
  // }
  import jquery  from"../jquery-3.4.1.js"
    export default {
        name: "index",
      methods:{
      },
      mounted() {

      } //请求数据
    }
  var deviceWidth = document.documentElement.clientWidth;
  if(deviceWidth > 750) deviceWidth = 750;
  document.documentElement.style.fontSize = deviceWidth/7.5 + 'px';
</script>

<style scoped>

  *{margin: 0;padding: 0;list-style: none}
.odiv{
  width: 7.5rem;
  background:#ffffff ;
}
  .to2{
    position: fixed;bottom: 0;
    width: 7.5rem;
    height:1rem;border-top: 0.01rem solid #dadada;
    background: #ffffff;
  }
  .to1{
    width: 7.5rem;
    height: 100px;
    background: #ffffff;
  }
  a{text-decoration: none;}
  .oa1{font-size: .23rem;display: block;color: #333;width: 1.87rem;height: 1rem;;
    background: url("../../static/img/tab_home_nor.png")  no-repeat .69rem  0 ;background-size:.44rem .44rem ;
  }
  .oa2{
    font-size: .23rem;display: block;color: #333;width: 1.87rem;height: 1rem;;
    background: url("../../static/img/tab_menu_nor.png")  no-repeat .69rem  0 ;background-size:.44rem .44rem ;
  }
  .oa3{
    font-size: .23rem;display: block;color: #333;width: 1.87rem;height: 1rem;;
    background: url("../../static/img/tab_shopping_nor.png")  no-repeat .69rem  0 ;background-size:.44rem .44rem ;
  }
  .oa4{
    font-size: .23rem;display: block;color: #333;width: 1.87rem;height: 1rem;;
    background: url("../../static/img/tab_me_nor.png")  no-repeat .69rem  0 ;background-size:.44rem .44rem ;
  }
  .cols{color: #fdcc00;background: url("../../static/img/tab_home_hig.png")no-repeat .69rem  0 ;background-size:.44rem .44rem}
.colsa{color: #fdcc00;background: url("../../static/img/tab_menu_hig.png")no-repeat .69rem  0 ;background-size:.44rem .44rem}
.colsb{color: #fdcc00;background: url("../../static/img/tab_shopping_hig.png")no-repeat .69rem  0 ;background-size:.44rem .44rem}
.colsd{color: #fdcc00;background: url("../../static/img/tab_me_hig.png")no-repeat .69rem  0 ;background-size:.44rem .44rem}
  .omd1{width: 1.87rem ;height:1rem ;float: left;color: #333333;position: relative;margin-top: .1rem}
</style>
