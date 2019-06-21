<template>
    <div class="threeImg">
        <div class="headeTitle">
            - 新人专享 -
        </div>
        <div class="leftIMG">
            <span class="name">新人专享礼包</span>
            <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
        </div>
        <div class="rightIMG">
            <div class="top">
                <span>
                    福利社
                </span>
                <img src="http://yanxuan.nosdn.127.net/00035dccd3dd272ae01611a3325e9e31.png?imageView&thumbnail=200x200&quality=75" alt="">
            </div>
            <div class="bottom">
                <span>
                    新人拼命
                </span>
                <img src="http://yanxuan.nosdn.127.net/9b17bde0818b456f208257089ce9ed73.png?imageView&thumbnail=200x200&quality=75" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.threeImg
    width 740px
    height 528px
    box-sizing border-box
    background-color #fff
    margin-top 20px
    margin-left 5px
    .headeTitle
        height 90px
        width 100%
        font-size 32px
        text-align center
        line-height 90px
    .leftIMG
        width 50%
        float left
        box-sizing border-box

        height 434px
        background-color #F9E9CF
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
    .rightIMG
        box-sizing border-box

        float left
        width 49%
        height 50%
        margin-left 1px
        .top
            height 215px
            width 100%
            background #FBE2D3
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
            height 215px
            width 100%
            background-color #FFECC2
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
