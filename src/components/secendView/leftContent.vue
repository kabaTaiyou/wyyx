<template>
    <div class="leftTopicWrap">
        <div class="leftTopicMain" ref="boxItem">
            <div class="leftShowLazy" v-for="(items,index) in LazyShowList " :key="index" >
                <looking v-show="items.look"  :look="items.look"/>
                <div class="reallyList" v-for="(item) in items.topics" :key="item.topicId">
                    <type1 v-if="item.style%2===0" :item="item"   ref="test"   />
                    <type2 v-if="item.style%2!==0" :item="item"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
import type1 from '../secendView/types/type1'
import type2 from '../secendView/types/type2'
import looking from '../secendView/types/looking'
export default {
    data(){
        return{
            pagesize:3
        }
    },
    computed:{
        ...mapState(['LazyShowList'])
    }
    ,
    mounted(){
        console.log(this.$refs,'------------------------------------')
        this.$store.dispatch('lazyShow',{pagesize:2,size:5})
        // this.$store.dispatch('lazyShow',3)

       this.scroll = new BScroll(".leftTopicWrap", {
                click: true,
                // pullUpLoad:true,
                // pullDownRefresh:true,
                 probeType: 2, // 实时, 触摸
                // startY:0
                // scrollY
       });
       this.scroll.on('scroll', ({x, y}) => {
        //   console.log('scroll', x, y)
        //   console.log(this.$refs.boxItem.offsetHeight,'ahahhahah')
          if(Math.abs(y)>=this.$refs.boxItem.offsetHeight-465){

                 this.$store.dispatch('lazyShow',{pagesize:this.pagesize,size:5})
                    console.log('触发了')
                    this.pagesize++
                    console.log('this.page触发',this.pagesize)
                    this.scroll.refresh();

          }
          this.scrollY = Math.abs(y)
        })




    }

    //   watch: {
    //   pages(newPages) {
    //     this.pages = this.new;
    //   }
    // }
    ,
components:{
    type1,
    type2,
    looking

    },
    methods:{
      
       pullingUp(){
           alert(1)
       },


         
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.leftTopicWrap
    margin-top 100px
    height 1200px
    width 750px
    background-color yellow
    // .leftTopicMain


</style>
