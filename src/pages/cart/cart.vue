<template>
    <div class="cartWrap">
      <header class="cartHeader">
          <h3>
            购物车
          </h3>
          <span>
            领券
          </span>
      </header>
      <div class="m-servicePolicy">
        <li><i class="iconfont">&#xe614;</i> 30天无忧退货</li>
        <li><i class="iconfont">&#xe614;</i> 48小时快速退款</li>
        <li><i class="iconfont">&#xe614;</i> 满88元免邮费</li>
      </div>

      <div class="loginMiddle">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
        <span class="add">去添加点啥吧</span>
        <button class="login">登陆</button>
      </div>
    </div>
</template>
<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .cartWrap
    background-color #f4f4f4
    height 100%
    width  100%
    position relative
    .cartHeader
      height 88px
      background-color #fff
      padding 0 30px
      display flex
      justify-content space-between
      h3
        font-size 36px
        color #333
        line-height 88px
      span 
        color  rgb(180, 40, 45)
        font-size 30px
        line-height 88px
    .m-servicePolicy
       height 70px
       li
        width 33%
        text-align center
        color #666
        font-size 24px
        float left
    .loginMiddle
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      display flex
      flex-direction column
      align-items center

      img 
        height 248px
        width 248px
      button 
        height 92px
        width 480px
        background-color #b4282d
        outline none 
        color #ffffff
        border none 
      .add
        text-align center
        font-size 28px
        color #999
        margin-bottom 30px


</style>
