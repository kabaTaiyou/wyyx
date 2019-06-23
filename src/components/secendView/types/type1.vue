<template>
    <div class="type1Wrap">
       
        <div class="avata">
            <img v-lazy="item.avatar" alt="" :key="item.avatar">
            <span class="headTitle">{{item.nickname}}</span>
        </div>
        <div class="title">
           {{item.title}}
        </div>
        <div class="showBigImg">
            <img v-lazy="item.picUrl" alt="" :key="item.picUrl">
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
    ,
    methods:{
        test1111111111111111111111111(){
            console.log('test','test')
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.type1Wrap
    height 674px
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
    .showBigImg
        height 360px
        width 100%
        img 
            height 100%
            width 100%
    .looked
        height 34px
</style>
