<template>
    <div class="type9Wrap">
       
        <div class="avata">
            <img :src="look.avatar" alt="">
            <span class="headTitle">{{look.title}}</span>
        </div>
        <div class="title">
            {{look.content}}
        </div>
        <div class="showBigImg2">
            <img v-lazy="look.lookPics[0].picUrl" alt="" :key="look.lookPics[0].picUrl">
        </div>
        <span class="looked">
            <i class="iconfont">

            </i>
            <span>
                {{look.readCount}}人看过
            </span>
        </span>
    </div>
</template>

<script>
export default {
props:['look']
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.type9Wrap
    height 780px
    padding 36px 30px
    background-color #fff
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
    .showBigImg2
        height 618px
        width 100%
        img 
            height 100%
            width 100%
    .looked
        height 34px
</style>
