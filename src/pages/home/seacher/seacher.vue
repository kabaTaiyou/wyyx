<template>
  <div class="wrap">
      <div class="seacherWrap">
          <!-- 头部 -->
          <header>
            <div class="leftContent">
                <span class="left">
                <i class="iconfont">
                    &#xe62d;
                </i>
            </span><input type="text" class="text" placeholder="请输入要搜索的内容">
            </div>
            <span class="cancel">
                取消
            </span>

          </header>
          <!-- 历史纪录 -->
          <div class="history">

          </div>
          <!-- 底部 -->
          <div class="bottom">
            <header class="top">
                热门搜索
            </header>
            <ul class="navList">
                <li @click="Choose(index)"  v-for="(item,index) in hotKeywordVOList" :key="index"><span :class="{on:isChoose===index}">{{item.keyword}}</span></li>
              
            </ul>
          </div>
          <!-- 下拉 -->
          <ul class="selection">
            <li>内容</li>
            <li>内容</li>
            <li>内容</li>
            <li>内容</li>
            <li>内容</li>
          </ul>
      </div>
  </div>
</template>
<script>
import { HotKeyWords } from '../../../api';
export default {
    data(){
        return{
            hotKeywordVOList:[],
            isChoose:0
        }
    },
   async mounted(){
       const result =  await HotKeyWords()
    //    console.log(result)
       if(result.code==="200"){
           const hotKeywordVOList = result.data.hotKeywordVOList
           console.log(result.data.hotKeywordVOList,'热搜')
           this.hotKeywordVOList = hotKeywordVOList
       }
    },
    methods:{
        Choose(index){
            this.isChoose = index
            console.log(index)
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
    .wrap
        width 100%
        
        .seacherWrap
            width 100%
            height 88px
            header 
                height 100%
                // background-color red
                display flex
                align-items center
                justify-content space-around
                position relative
                .leftContent
                    display flex    
                    .left
                        height 56px
                        background-color #f4f4f4
                        display inline-block
                        line-height 56px
                        
                    .text
                        background-color #f4f4f4
                        font-size 28px
                        height 56px
                        width 604px
                        outline none
                .cancel
                    display inline-block
                    font-size 28px
                    width 56px
                    height 41px
                    text-align center
            //底部
            .bottom
                width 100%
                height 406px
                // background-color red
                .top
                    height 90px
                    font-size 28px
                    color #999
                    // text-align left 
                    justify-content left 
                    padding 0 10px
                .navList
                    width 100%
                    // background-color red
                    height 406px
                    li
                     float left
                     height 74.6px
                     margin 18px
                     font-size 24px
                     span
                        color #000
                        &.on
                            border 1px solid red
                            color red
            .selection
                position absolute
                top 88px
                left 0
                background-color red
                width 100%
                li
                    height 104px
                    width 100%
                    border-bottom 1px solid #eee


                     




</style>