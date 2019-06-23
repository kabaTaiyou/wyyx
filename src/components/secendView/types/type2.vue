<template>
<div class="type2">
    <div class="type2Wrap">
       
        <div class="leftWrap">
              <div class="avata">
                    <img v-lazy="item.avatar" alt="" :key="item.avatar">
                    <span class="headTitle">{{item.nickname}}</span>
                </div>
                <div class="title">
                    {{item.title}}
                 </div>
        </div>
        <div class="showBigImg">
            <img class="bimg" v-lazy="item.picUrl" alt="">
        </div>
        
    </div>
    <span class="looked">
            <i class="iconfont">

            </i>
            <span>
                {{item.readCount}}人看过
            </span>
        </span>
        </div>
</template>

<script>
export default {
    props:['item']

}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.type2
    background-color #fff
    position relative
    .type2Wrap
        display flex
        height 336px
        padding 36px 30px
        margin-bottom 20px

        .avata
            height 56px
            font-size 28px
            display flex
            // justify-content center
            align-items left 
            .headTitle
                line-height 56px
            img 
                border-radius 50%
                width 54px
                height 54px
        .title
            height 100px
            font-size 36px
        .showBigImg
            height 272px
            width 272px
            .bimg 
                height 272px
                width 272px 
    .looked
        height 34px
        position absolute
        bottom 40px
        left 20px
</style>
