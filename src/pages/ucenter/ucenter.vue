<template>
 <div class="ucenterWrap">
   <header class="headerucenter">
            <span class="leftText" @click="gotoLink('/home')">
              <i class="iconfont">
              &#xe618;  
              </i>
            </span>

            <div class="middle">
             <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
            </div>


            <span class="rightText">
              <i class="iconfont" @click="gotoLink('/home/seacher')"> 
                &#xe62d;
              </i>
              <i class="iconfont">
                &#xe600;
              </i>
            </span>
        </header>
 
  
  <div class="cont">
    <div class="logoWrap">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">

    </div>
      <div class="btns">
          <div class="tel">
            <span>
              <i class="iconfont">
                &#xe645;
              </i>
              手机登陆
            </span>
          </div>
          <div class="email">
              <span>
                <i class="iconfont">
                &#xe61e;
                </i>
                邮箱登陆
              </span>
          </div>
          <span class="qukly">
            快速注册 >
          </span>
      </div>
  </div>




 </div>
</template>
<script>
export default {
// beforeRouteEnter(to,from,next){
//   next(vm => {
//     console.warn(to.redirectedFrom,'tootototoototoototo')
//     if(to.redirectedFrom){//vue-router redirect不会刷新页面，需要判断并刷新
//       // vm.$router.go(0)//safari浏览器go(0)无效
//       window.location.reload()
//     }
//   })
// },

methods:{
    gotoLink(path){
                this.$router.push({path})
                this.$store.dispatch("isChange", false);
              }
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.ucenterWrap
    height 100%
    width 100%
    background-color #f2f5f4
    .headerucenter
        z-index 100

        height 100px
        // background-color red
        display flex
        align-items center
        justify-content space-around
        // border-bottom 1px solid #999
        .iconfont
          font-size 50px
        .middle
          height 54px
          width 170px
          display flex
          justify-content space-around
          align-items center
          img 
            height 100%
            width 100%
    .cont
      width 100%
      height 700px
      .logoWrap
        height 400px
        text-align center
        line-height 400px
      img
        height 90px
        width 268px
      .btns
        height 292px
        width 100%
        // background-color yellow
        display flex
        justify-items center
        flex-direction column
        align-items center
        .tel
          width 700px
          height 100px
          background-color #b4282d
          color #ffffff
          font-size 28px
          text-align center
          line-height 100px
          margin-bottom 20px
        .email
          margin-bottom 20px

          line-height 100px
          font-size 28px
          text-align center
          height 100px
          width 700px
          background #ffffff
          border 1px solid #b4282d
          color #b4282d
        .qukly

          margin-bottom 20px

          height 40px
          font-size 28px          
          color #333


</style>