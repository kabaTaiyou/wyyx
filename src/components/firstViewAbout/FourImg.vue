<template>
    <div class="FOURImg">
        <div class="headeTitle">
          品牌制造商直供
          <span class="rightMore">
              更多
          </span>
        </div>

        <div class="leftIMGFOUR">
            <div class="top" style="background-image:url(http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1);background-size:100% 100%;">
                <span class="name">新人专享礼包</span>
                <!-- <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt=""> -->
            </div>
            <div class="bottom" style="background-image:url(http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1);background-size:100% 100%;">
                 <span class="name" >新人专享礼包</span>
            
            </div>
        </div>
        <div class="rightIMGFOUR">
            <div class="top" style="background-image:url(http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1);background-size:100% 100%;">
                <span>
                    福利社
                </span>
            </div>
            <div class="bottom" style="background-image:url(http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1);background-size:100% 100%;">
                <span>
                    新人拼命
                </span>
            </div>
        </div>
    </div>
</template>

<script>
//这里 需要 接受来自父组件传来的数据 从而遍历生成多个li

export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.FOURImg
    width 740px
    height 554px
    box-sizing border-box
    background-color #fff
    margin-top 20px
    margin-left 5px
    margin-bottom 100px
    .headeTitle
        height 90px
        width 100%
        font-size 32px
        // text-align center
        line-height 90px
        right  150px
        .rightMore
            position relative
            left 390px

    .leftIMGFOUR
        width 50%
        float left
        box-sizing border-box
        margin 1px

        height 100%
        // background-color #F9E9CF
        .top
            height 260px
            width 100%
            margin-bottom 1px
            .name
                font-size 32px
                width 100%
                margin-top 20px
                text-align center
                display inline-block
        .bottom
            width 100%
            height 260px
            .name
                font-size 32px
                width 100%
                margin-top 20px
                text-align center
                display inline-block
            img 
                height 258px
                width 257px
                margin 40px
    .rightIMGFOUR
        box-sizing border-box

        float left
        width 49%
        height 50%
        margin-left 1px
        .top
            height 260px
            width 100%
            // background #FBE2D3
            position relative
            margin-bottom 1px
            span 
                font-size 32px
                margin 50px
                position relative
                bottom -30px
            img 
                position absolute
                right 10px
                top 30px
                height 200px
                width 200px

        .bottom
            height 260px
            width 100%
            // background-color #FFECC2
            position relative
            img 
                height 200px
                width 200px
                position absolute
                right 10px
                top 30px
            span 
                font-size 32px
                margin 50px
                position relative
                bottom -30px

</style>