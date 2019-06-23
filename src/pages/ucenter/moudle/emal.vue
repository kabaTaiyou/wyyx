<template>
 <div class="ucenterWrapEMAIL">
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
     <!-- <input type="text" class="inputs" placeholder="邮箱账号"    v-validate="'required|email'" name="email" v-model="email"> -->
     <input type="text" class="inputs" placeholder="邮箱账号"    

            maxlength="13" name="email" 
              v-model="password" v-validate="'required|email'"
    >
     <span  class="ts"  v-show="errors.has('email')" style="color: red">{{ errors.first('email') }}</span>
    <input type="text" class="inputs" placeholder="密码">
      <div class="btns">
         
          <div class="tel">
            <span>
             
              登陆
            </span>
          </div>
          <div class="qita" @click="gotoToogel(0)">
              <span>
              
                其他方式登陆
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
props:['gotoToogel'],

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
                // this.$store.dispatch("isChange", false);
                  this.isRouterAlive = true;
              }
}
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.ucenterWrapEMAIL
    height 100%
    width 100%
    background-color #ffffff
    .headerucenter
        background-color #f2f5f4
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
      position relative
      .inputs
        display block
        margin 20px auto
        background-color #ffffff
        outline none
        height 90px
        // height 400px
        width 669px
        margin-bottom 20px
        border-bottom 1px solid #999
      .yzm
        width 168px
        height 56px
        border 1px solid #999
        border-radius 6px
        text-align center
        line-height 56px
        position absolute
        top 530px
        right 40px
      .logoWrap
        height 400px
        text-align center
        line-height 400px
      img
        height 90px
        width 268px
      .btns
        // height 292px
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
        .qita
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