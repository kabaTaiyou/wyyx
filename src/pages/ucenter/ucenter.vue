<template>
 <div class="ucenterWrap">
   <header class="headerucenter" v-show="isShow === 0">
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
 
  
  <div class="cont" v-show="isShow === 0">
    <div class="logoWrap">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">

    </div>
      <div class="btns">
          <div class="tel" @click="gotoToogel(2)">
            <span>
              <i class="iconfont">
                &#xe645;
              </i>
              手机登陆
            </span>
          </div>
          <div class="email" @click="gotoToogel(1)">
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


  <email v-show="isShow === 1" :gotoToogel="gotoToogel"/>
  <tel v-show="isShow === 2" :gotoToogel="gotoToogel"/>

 </div>
</template>
<script>
import email from './moudle/emal'
import tel from './moudle/tel'
export default {
data(){
  return{
    isShow:2
  }
},
methods:{
    gotoLink(path){
                this.$router.push({path})
                // this.$store.dispatch("isChange", false);
                  this.isRouterAlive = true;
              },
    gotoToogel(isShow){
      this.isShow = isShow
    }
},
components:{
  email,
  tel
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