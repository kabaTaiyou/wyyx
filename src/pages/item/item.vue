<template>
  <div class="wrap">

      <div class="contentLeft">
        <ul class="leftList">
           <li :class="{on:current === index}" v-for="(item,index) in leftList" :key="index"  @click="toThisPage(index)">
             <router-link  :to="{path:'/item/detial',query:{page:index}}"> {{item.name}}
               <!-- '/item/detial' -->
              
             </router-link> 
           </li>
        </ul>
      </div>
      <div class="right">
        <router-view class="rightContent"></router-view>
      </div>
 

      <header class="header">
          <div class="seacher" @click="toMore">
          <span class="seachLeft">
            <i class="iconfont">&#xe62d;</i>
          </span>
          <span class="seachRight">搜索商品, 共25192款好物</span>
          </div>
      </header>
    


  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { reqLftItem } from '../../api/index'
export default {
  data(){
    return {
      leftList:[],
      current:0
    }
  },
  methods:{
    toMore(){
      this.$router.replace("/home/seacher");
      this.$store.dispatch("isChange", false);
    },
    toThisPage(index){
      this.current = index
      
    }
  },

  async mounted(){
    const result =  await reqLftItem()
    if(result.code === 0){
      this.leftList = result.data
    }

    new BScroll(".contentLeft", {
       click: true
    })
    
    new BScroll(".right", {
       click: true
    })


  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .wrap
    height 100%
    width 100%
    position relative
    .contentLeft
       height 100%
       width 100%
      .leftList
        margin-top 88px
        width 170px
        li
          height 50px
          width 170px
          text-align center
          line-height 50px
          margin 15px 0
          &.on
            border-left 6px solid #AB2B2B
          a
            font-size 28px

    .header
      position fixed
      background-color #fff
      top 0
      left 0
      width 100%
      height 88px
      display flex
      align-items center
      justify-content center
      .seacher 
            z-index 20
            background-color: #ededed;
            display: flex;
            align-items: center;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: center;
            // height 28px
            height: 56px;
            // width 266px
            width: 690px;
            // border-radius 3px
            border-radius: 6px;
            font-size: 56px;
            font-size: 24px;
    .right
      width 528px
      position absolute
      right 0
      top 0
      height 100%
      .rightContent
        width 100%
        height 2000px
</style>
