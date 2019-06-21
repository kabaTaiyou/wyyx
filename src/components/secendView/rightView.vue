<template>
  <div class="rightWrap">
        <div class="rightWrapBox">
        <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/5dabfaf695b65513493dc29f11727e78.jpg?imageView&quality=75&thumbnail=670x371" alt="">
            </div>
            <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/fe726ef94ce6a26a666e84361dbd6f4d.jpg?imageView&quality=75&thumbnail=670x371" alt="">
            </div>

        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>  

    <div class="bottom">
        <div class="headerTop">
            <h3>建议征集</h3>
            <p>告诉我们你的好物标准</p>
        </div>
        <div class="content">
            <img src="https://yanxuan.nosdn.127.net/8165316688d7d3acfc27d4547c5e17b0.jpg?imageView&quality=75&thumbnail=272x200" alt="">
            <div class="baseInfo">
                <h3>你喜欢怎样的夏日T恤</h3>
                <span>
                    123人看过
                </span>
                <span>
                    47条建议
                </span>
            </div>
        </div>
        <div class="footer">
            <div class="footerContent">
                夏天的t恤，买再多都不会嫌多。马卡龙色、撞色、或是简答白T，哪些是你今年想入手的呢？logo、印花，哪种图案设计你会喜欢？快来聊聊吧~
            </div>
            <div class="advicebtn">
                我要建议
            </div>
        </div>
    </div>




</div>  
</template>

<script>
import Swiper from "swiper";
import Bscroll from 'better-scroll'
export default {
  
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
        slidesPerView: 'auto',
        centeredSlides: true,
        watchSlidesProgress: true,
        paginationClickable: true,
        // slidesPerView: 1.1,
        spaceBetween: 10,
        loop: true,
        autoplay: true,

        })     
        
        new Bscroll('.rightWrap',{
            
        })
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >

    .rightWrap
        margin-top 100px
        height 400px
        width 100%
        .rightWrapBox
            height 100%
            width 100%
        


           
                
            .swiper-container
                z-index 200
                height 430px
                width 100%
                padding 24px 0px
                display flex
                justify-content center
                align-items center
                img 
                    height 372px
                    margin 0 10px
                    width 730px
                    // transform scale(0.8)
        .bottom
            display flex
            justify-content center
            align-items center
            flex-direction column
            height 711px
            .headerTop
                height 141px
                width 100%
                h3
                    text-align center
                    font-size 32px
                p
                    text-align center
                    font-size 24px
                    color #7f7f7f
            .content
                height  248px
                width   688px
                background-color #f4f4ff
                display flex
                justify-content center
                align-items center
                img 
                    height 200px
                    width 272px
                    position relative
                    left -80px
                .descdetail
                    text-align center
                    color #7f7f7f
            .footer
                width 100%
                .footerContent
                    // text-align center
                    padding 20px
                    color #7f7f7f
                .advicebtn
                    height 88px
                    font-size 32px
                    text-align center
                    line-height 88px
                    border 1px solid #000
                    width 730px
                    margin 0 auto






            






   

            
</style>
