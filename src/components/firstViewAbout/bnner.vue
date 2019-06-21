<template>
    <div class="bannerBigImg">
        <div class="headeTitle">
           <!-- <slot name="xxx" ></slot> -->
           <img :src="six[indexBanner].img" alt="">
        </div>

        <div class="bottomscroll" ref="scroll">
            <ul class="list">
                <li class="items" v-for="(items,index) in bannerList[indexBanner]" :key="index">
                    <img :src="items.img" alt="">
                    <span>{{items.text}}</span>
                </li>
           

            </ul>
        </div>
      
    </div>
</template>

<script>

import BScroll from "better-scroll";
import { mapState } from 'vuex'
import { reqRight } from '../../api';
import { setTimeout } from 'timers';
//这里 需要 接受来自父组件传来的数据 从而遍历生成多个li

export default {
    
    data(){
        return{
            six:[]
        }
    },
    props:['indexBanner'],
      watch: {
      bannerList(val) {
      
          new BScroll(this.$refs.scroll, {
          click: true,
          scrollX: true
          })

      }
    }
    ,
   computed: {
      ...mapState(['bannerList','isChange'])     //这里 将mapState这个对象展开  里面展开的内容   {传进去的数组字符串: () => this.$store.getters['字符串']}
    }
    ,
    
    

async mounted(){
    const result =  await reqRight()
        // console.log(result,'six')

    if(result.code === 0){
        this.six = result.bannerImg
        console.log(result,'banner')
    }

//  console.log('dispatch', this.$store.dispatch('banner'))  
//   await this.$store.dispatch('banner')
console.log(this)
//   new BScroll(".bottomscroll", {
//       click: true,
//       scrollX: true
//     });

//       new BScroll(".bottomscroll", {
//       click: true,
//       scrollX: true
//     });

}

}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.bannerBigImg
    width 740px
    height 528px
    // margin-bottom 200px
    box-sizing border-box
    background-color #fff
    margin-bottom 130px
    margin-left 5px
    .headeTitle
        height 370px
        width 100%
        font-size 32px
        text-align center
        line-height 90px
        img 
            height 100%
            width 100%
    .bottomscroll
        height 391px
        width 750px
        .list  
            float left
            height 391px
            white-space:nowrap
            background-color #fff

            .items
                display flex
                flex-direction column
                width 200px
                box-sizing border-box
                display inline-block
               
                white-space:nowrap
                height 361px
                // background-color red
                vertical-align middle
                position relative
                img 
                    width 200px
                    height 160px
                    vertical-align middle
                span    
                    position absolute
                    bottom 100px
                    left 50%
                    transform translateX(-50%)
                // float left
    
</style>
