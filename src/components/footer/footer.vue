<template>
    <footer class="footerWrap">
        <span class="item" @click="goto('/home')" :class="{on:'/home' ===$route.path}">
            <div class="content">
                <i class="iconfont">&#xe618;</i>
                 <span>首页</span>
            </div>
        </span>
        <span class="item" @click="goto('/item')"  :class="{on:'/item' ===$route.path}">
            <div class="content">
                <i class="iconfont">&#xe669;</i>
                <span>分类</span>
            </div>   
        </span>
        <span class="item" @click="goto('/topic')" :class="{on:'/topic' ===$route.path}">
            <div class="content">
                <i class="iconfont">&#xe753;</i>
                <span>识物</span>
            </div>    
        </span>
   
        <span class="item" @click="goto('/cart')" :class="{on:'/cart' ===$route.path}"> 
            <div class="content">
                <i class="iconfont">&#xe600;</i>
                <span>购物车</span>
            </div>   
        </span>
        <span class="item" @click="goto('/ucenter')" :class="{on:'/ucenter' ===$route.path}"> 
            <div class="content">
                <i class="iconfont">&#xe610;</i>
                <span>个人</span>
            </div>   
        </span>
    </footer>
</template>
<script>
export default {
    methods:{
        goto(path){
            console.log(1)
            this.$router.replace(path)
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >
.footerWrap
    background-color #fff
    width 100%
    // height 49px
    height 98px
    display flex
    position fixed
    bottom 0
    left 0
    .item
        height 100%
        width 20%
        line-height 100%
        display flex
        flex-direction column
        align-items center
        justify-content center
        &.on
            color red
        .content
            display flex
            flex-direction column
            text-align center
            i 
                font-size 48px
            span 
                font-size 24px
                margin-top 15px
            



</style>
